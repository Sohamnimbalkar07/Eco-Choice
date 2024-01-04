package com.app.service;

import com.app.entities.UserEntity;

public interface IOtpService {
	
	String generateOtp();
	void saveOtpForUser(UserEntity user, String otp);
	boolean isOtpValid(UserEntity user, String otp);

}
