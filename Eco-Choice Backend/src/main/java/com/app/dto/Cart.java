package com.app.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.app.pojos.Category;
import com.app.pojos.Farmer;

public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(length = 20, nullable= false)
	private String product_name;
	
	@Column(length = 100, nullable= false)
	private String description;
	
	@Column(length = 20, nullable= false)
	private float price;
	
	@Column(length = 20, nullable= false)
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name = "Category_id")
	private Category category;
	
	@ManyToOne
	@JoinColumn(name = "Farmer_Id")
	private Farmer farmer;
	
}
