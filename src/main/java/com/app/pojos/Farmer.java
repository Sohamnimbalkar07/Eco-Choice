package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Farmer {

	@Id
	private int id;
	private int email;
	private String  password;
	
}
