package com.app.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginRequest {

	@NotBlank(message="Please Enter Email id")
	private String email ;
	@NotBlank(message="Please Enter Password")
	private String password ;
	@NotBlank(message="Please Select Role")
	private String role;
	
}
