package com.app.pojos;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

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
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable =  false)
	private String line_1;
	
	private String line_2;
	
	@Column(length = 6 , nullable = false)
	private String pincode;
	
	@Column(length = 25, nullable = false)
	private String City;
	
	@Column(length = 25, nullable = false)
	private String state;
	
	@ManyToOne
	@JoinColumn(name = "Customer_Id")
	private Customer customer;
	
}
