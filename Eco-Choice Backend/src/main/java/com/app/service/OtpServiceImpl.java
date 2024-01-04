package com.app.service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.OtpEntity;
import com.app.entities.UserEntity;
import com.app.repository.OtpRepository;

@Service
public class OtpServiceImpl implements IOtpService {
	
	private static final int OTP_LENGTH = 6;
    private static final int OTP_EXPIRY_MINUTES = 10;
    
    @Autowired
    private OtpRepository otpRepository;

	@Override
	public String generateOtp() {
		
		return String.format("%0" + OTP_LENGTH + "d", new Random().nextInt((int) Math.pow(10, OTP_LENGTH)));
		
	}

	@Override
	public void saveOtpForUser(UserEntity user, String otp) {
		
		OtpEntity otpEntity = new OtpEntity();
        otpEntity.setOtp(otp);
        otpEntity.setUser(user);
        otpEntity.setExpiryDate(LocalDateTime.now().plusMinutes(OTP_EXPIRY_MINUTES));
        otpRepository.save(otpEntity);

	}

	@Override
	public boolean isOtpValid(UserEntity user, String otp) {
		
		LocalDateTime now = LocalDateTime.now();
        OtpEntity otpEntity = otpRepository.findByUserAndOtpAndExpiryDateAfter(user, otp, now);
        return otpEntity != null;
	}

}
