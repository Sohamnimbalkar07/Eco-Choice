package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "Otps")
public class OtpEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String otp;

    @OneToOne
	@JoinColumn(name = "user_id")
    private UserEntity user;

    private LocalDateTime expiryDate;

}
