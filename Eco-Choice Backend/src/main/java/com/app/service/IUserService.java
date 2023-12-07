package com.app.service;

import javax.validation.Valid;

import com.app.dto.UserDTO;
import com.app.dto.UserRegResponse;

public interface IUserService {

	UserRegResponse registerUser(UserDTO user);
	
	long getUserId(String email);

}
