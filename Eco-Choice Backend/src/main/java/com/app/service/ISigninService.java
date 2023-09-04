package com.app.service;

import java.util.Optional;

public interface ISigninService {

	Optional<?> authenticateUser(String email, String password,String Role);
	
}
