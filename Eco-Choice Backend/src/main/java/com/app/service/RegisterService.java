package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminRepository;
import com.app.dao.CustomerRepository;
import com.app.dao.FarmerRepository;
import com.app.dto.Person;
import com.app.pojos.Customer;
import com.app.pojos.Farmer;

@Service
public class RegisterService implements IRegisterService {

	@Autowired
	CustomerRepository customerRepo;
	
	@Autowired
	FarmerRepository farmerRepo;
	
	@Override
	public String addPerson(Person person) {
		
		if(person.getRole().equals("farmer"))
		{
			Farmer farmer = new Farmer(person.getFirst_name(),person.getLast_name(),person.getUsername(),person.getEmail(),person.getPassword(),person.getAddress());
			farmerRepo.save(farmer);
		}
		else
		{
			Customer customer = new Customer(person.getFirst_name(),person.getLast_name(),person.getEmail(),person.getPassword(),person.getUsername(),person.getMobileNo());
			customerRepo.save(customer);
		}
		
		return "user Added Sucessfully";
	}

}
