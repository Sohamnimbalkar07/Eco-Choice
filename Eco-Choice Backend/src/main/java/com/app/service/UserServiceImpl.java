package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dto.UserDTO;
import com.app.dto.UserRegResponse;
import com.app.entities.UserEntity;
import com.app.repository.RoleRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	// dep : user repo n role repo
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private RoleRepository roleRepo;

	// mapper
	@Autowired
	private ModelMapper mapper;
	//	password enc
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public UserRegResponse registerUser(UserDTO user) {
		// Objective : 1 rec inserted in users table n insert n recs in link table (users_roles)
		//1. Map dto --> entity
		UserEntity userEntity=mapper.map(user,UserEntity.class);
		System.out.println("size of the set "+userEntity.getUserRoles().size());
	//	userEntity.getUserRoles().clear();//to be checked further !!!!!!!!!!!!!!!!!!!!!! --DONE !
		//2. Iterate over the  roles from user dto n map it to Role ---add them under user entity
		user.getRoles().stream() //Stream<UserRole>
		.map(roleEnum -> roleRepo.findByRoleName(roleEnum).orElseThrow(() -> new RuntimeException("Invalid role!!!"))) //Stream<Role>
		.forEach(role -> userEntity.getUserRoles().add(role));//establishes uni dir relation ship between User n Role
		//3. encode pwd
		userEntity.setPassword(encoder.encode(user.getPassword()));
		//4 : should I save roles first before saving user dtls? NO : alrdy existing in db		
		UserEntity persistentUser = userRepo.save(userEntity);
		return new UserRegResponse("User registered successfully with ID "+persistentUser.getUserId());
	}

	@Override
	public long getUserId(String email) {
		
		UserEntity user =  userRepo.findByEmail(email)
		.orElseThrow(() -> new RuntimeException("User not found with email"));;
		return user.getUserId();
	}

	@Override
	public UserEntity findByEmail(String email) {
		
		Optional<UserEntity> user = userRepo.findByEmail(email);
		return user.orElse(null);
	}
	
	@Override
	public void resetPassword(String email, String newPassword) {
        UserEntity user = findByEmail(email);

        if (user != null) {
            
            String encodedPassword = encoder.encode(newPassword);
            user.setPassword(encodedPassword);
            userRepo.save(user);
        } else {
            throw new IllegalArgumentException("User with email " + email + " not found");
        }
    }

}
