package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Cart_Items {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Cart_Items_id;
	
	@ManyToOne
	@JoinColumn(name = "cart_Id")
	private Cart cart;
	
	@OneToOne
	@JoinColumn(name = "product_Id")
	private Product product;
	
	private int quantity;
	
	private int totalPrice;
	
}
