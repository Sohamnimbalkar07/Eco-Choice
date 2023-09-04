package com.app.custom_exception;

public class UserHandlingException extends RuntimeException {

	public UserHandlingException(String mesg)
	{
		super(mesg);
	}
}
