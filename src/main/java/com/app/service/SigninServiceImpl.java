package com.app.service;



import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.dao.AdminRepository;
import com.app.dao.CustomerRepository;
import com.app.dao.FarmerRepository;
import com.app.pojos.Admin;
import com.app.pojos.Customer;
import com.app.pojos.Farmer;

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
	public String authenticateUser(String email, String password, String Role) {
		
		if(Role.equals("Customer"))
		{
			
			Customer customer = custRepo.findByEmailAndPassword(email,password)
					.orElseThrow(()-> new RuntimeException("Signin Failed"));
		
		}
		else if(Role.equals("Admin"))
	    
		{
			Admin admin = adminRepo.findByEmailAndPassword(email,password)
					.orElseThrow(()-> new RuntimeException("Signin Failed"));
			
		}
		else
		{
			Farmer Farmer = farmerRepo.findByEmailAndPassword(email,password)
					.orElseThrow(()-> new RuntimeException("Signin Failed"));
			
		}
		
		return "Signin successfull";
		
	}

	

}
