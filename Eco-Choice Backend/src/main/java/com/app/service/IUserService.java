package com.app.service;

import java.util.Optional;

import javax.validation.Valid;

import com.app.dto.UserDTO;
import com.app.dto.UserRegResponse;
import com.app.entities.UserEntity;

public interface IUserService {

	UserRegResponse registerUser(UserDTO user);
	
	long getUserId(String email);

	UserEntity findByEmail(String email);
	
	void resetPassword(String email, String newPassword);
}
