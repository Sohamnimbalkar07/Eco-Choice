package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ErrorResponse;
import com.app.dto.Person;
import com.app.service.IRegisterService;

@RestController
@RequestMapping("/register")
@CrossOrigin
public class RegisterController {

	@Autowired
	IRegisterService registerService;
	
	@PostMapping
    public ResponseEntity<?> addUserDetails(@RequestBody Person person)
    {   
		System.out.println(person.getRole());
		System.out.println("in add user" + person);
		
		try {
		return new ResponseEntity<>(registerService.addPerson(person),HttpStatus.CREATED);
		} catch(RuntimeException e)
		{
			System.out.println("err in add" + e);
			return new ResponseEntity<>(new ErrorResponse("adding User failed",e.getMessage()),HttpStatus.INTERNAL_SERVER_ERROR);
		}
        
        }

}