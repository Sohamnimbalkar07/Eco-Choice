package com.app.entities;



import java.util.Optional;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class Product {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(length = 30, nullable= false)
	private String name;
	
	@Column(length = 100, nullable= false)
	private String description;
	
	@Column(length = 20, nullable= false)
	private float price_per_unit;
	
	@Column(length = 20, nullable= false)
	private int totalUnits;
	
	@Lob
	private byte[] picture;
	
	
	
	@ManyToOne
	@JoinColumn(name = "Category_id")
	private Category category;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "user_id")
	private UserEntity user;

	
	
	public Product orElseThrow(Object object) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public Product(String productName, String description, int pricePerUnit, int totalUnits,
			Category category, UserEntity user) {
		this.name = productName;
		this.description = description;
		this.price_per_unit = pricePerUnit;
		this.totalUnits = totalUnits;
		this.category = category;
		this.user = user;
	}


	public Product(int id, String name, String description, float price_per_unit, int totalUnits, Category category,
			UserEntity user) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price_per_unit = price_per_unit;
		this.totalUnits = totalUnits;
		this.category = category;
		this.user = user;
	}
	
	
	
}
