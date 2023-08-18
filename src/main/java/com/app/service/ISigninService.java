package com.app.service;

public interface ISigninService {

	String authenticateUser(String email, String password,String Role);
	
}
