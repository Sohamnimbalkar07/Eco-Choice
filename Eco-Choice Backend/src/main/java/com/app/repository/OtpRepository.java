package com.app.repository;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.OtpEntity;
import com.app.entities.UserEntity;

@Repository
public interface OtpRepository extends JpaRepository<OtpEntity, Long> {

    OtpEntity findByUserAndOtpAndExpiryDateAfter(UserEntity user, String otp, LocalDateTime expiryDate);
    
}