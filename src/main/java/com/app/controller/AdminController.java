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
import com.app.pojos.Admin;
import com.app.service.IAdminService;



@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	public AdminController()
	{
		System.out.println("in constructor" + getClass().getName());
	}
	
	@Autowired
	IAdminService AdminService;
	
	@PostMapping
    public ResponseEntity<?> addNewAdminDetails(@RequestBody Admin newAdmin)
    {   
		System.out.println("in add user" + newAdmin);
		
		try {
		return new ResponseEntity<>(AdminService.addAdmin(newAdmin),HttpStatus.CREATED);
		} catch(RuntimeException e)
		{
			System.out.println("err in add" + e);
			return new ResponseEntity<>(new ErrorResponse("adding User failed",e.getMessage()),HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
}
