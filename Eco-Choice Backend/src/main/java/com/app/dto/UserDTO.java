package com.app.dto;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import com.app.entities.UserRole;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = "roles")
public class UserDTO {
	
    private Long userId;
	
	@NotBlank(message = "Firstname must be supplied")
	private String first_Name;
	
	@NotBlank(message = "Lastname must be supplied")
	private String last_Name;
	
	@NotBlank(message = "User name must be supplied")
	private String userName;
	
	@NotBlank(message = "email must be supplied")
	private String email;
	
	@NotBlank(message = "password must be supplied")
	private String password;
	
	private String mobileNo;
	
	@NotEmpty(message = "at least 1 role should be chosen")
	private Set<UserRole> roles = new HashSet<>();

}
