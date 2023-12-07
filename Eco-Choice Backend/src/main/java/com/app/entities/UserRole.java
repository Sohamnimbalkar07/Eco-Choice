package com.app.entities;

public enum UserRole {
	ROLE_FARMER, ROLE_CUSTOMER, ROLE_ADMIN;

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return name().toLowerCase();
	}
	
	
	
}
