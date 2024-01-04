package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthRequest;
import com.app.dto.ResetPassword;
import com.app.entities.UserEntity;
import com.app.service.IEmailService;
import com.app.service.IOtpService;
import com.app.service.IUserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@CrossOrigin
@RequestMapping("/forgotpassword")
public class ForgotPasswordController {
	
	@Autowired
    private IUserService userService;

    @Autowired
    private IOtpService otpService;

    @Autowired
    private IEmailService emailService;
    
    @PostMapping
    public ResponseEntity<String> forgotPassword(@RequestParam String email) {
        UserEntity user = userService.findByEmail(email);
        if (user != null) {
 
            String otp = otpService.generateOtp();
            otpService.saveOtpForUser(user, otp);
            
            String emailContent = "Your OTP for password reset is: " + otp;
            emailService.sendEmail(email, "Password Reset OTP", emailContent);
            
            return ResponseEntity.ok("OTP sent to your email.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
    
    @PostMapping("/verifyotp")
    public ResponseEntity<String> verifyOtp(@RequestParam @Valid String email, @RequestParam String otp) {
        UserEntity user = userService.findByEmail(email);
        if (user != null && otpService.isOtpValid(user, otp)) {
        
            return ResponseEntity.ok("OTP is valid. Redirect to reset password page.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid OTP");
        }
    }
    
    @PostMapping("/resetpassword")
    public ResponseEntity<String> resetPassword(@RequestParam String email, @RequestParam String newpassword) {
    	
        userService.resetPassword(email, newpassword);
        return ResponseEntity.ok("Password reset successfully");
    }

}
