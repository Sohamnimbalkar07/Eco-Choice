package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.service.ISigninService;

@RestController
@RequestMapping("/signin")
@CrossOrigin
public class LoginController {
	
	
	@Autowired
	ISigninService service;
	
	public LoginController()
	{ 
		System.out.println("in Login Controller");
	}
	
	@PostMapping
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request)
	{
		
		return ResponseEntity.ok(service.authenticateUser(request.getEmail(),request.getPassword(),request.getRole()));
	}
	
}
