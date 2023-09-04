package com.app.service;



import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.dao.AdminRepository;
import com.app.dao.CustomerRepository;
import com.app.dao.FarmerRepository;
import com.app.pojos.Admin;
import com.app.pojos.Customer;
import com.app.pojos.Farmer;
import com.app.dto.ErrorResponse;

@Service
@Transactional
public class SigninServiceImpl implements ISigninService {

	@Autowired
	private CustomerRepository custRepo;
	
	@Autowired
	private FarmerRepository farmerRepo;
	
	@Autowired
	private AdminRepository adminRepo;
	
	@Override
	public Optional<?> authenticateUser(String email, String password, String Role) {
		
		if(Role.equals("Customer"))
		{
			
			Optional<Customer> customer = custRepo.findByEmailAndPassword(email,password);
					//.orElseThrow(()-> new RuntimeException("Signin Failed"));
			
			return customer;
		
		}
		else if(Role.equals("Admin"))
	    
		{
			Optional<Admin> admin = adminRepo.findByEmailAndPassword(email,password);
					//.orElseThrow(()-> new RuntimeException("Signin Failed"));
			System.out.println(admin);
			return admin;
		}
		else
		{
			Optional<Farmer> farmer = farmerRepo.findByEmailAndPassword(email,password);
					//.orElseThrow(()-> new RuntimeException("Signin Failed"));
			return farmer;
		}
		
		
		
	}

	

}
