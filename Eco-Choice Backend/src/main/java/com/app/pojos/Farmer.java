package com.app.pojos;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Farmer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(length = 20, nullable = false)
	private String first_name;
	
	@Column(length = 20, nullable = false)
	private String last_name;
	
	@Column(length = 20, nullable = false)
	private String username;
	
	@Column(length = 35, nullable = false)
	private String email;
	
	@Column(length = 20, nullable = false)
	private String  password;
	
	@Column(length = 50, nullable = false)
	private String address;

	
	public Farmer(String first_name, String last_name, String username, String email, String password, String address) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.address = address;
	}
	
	
}
