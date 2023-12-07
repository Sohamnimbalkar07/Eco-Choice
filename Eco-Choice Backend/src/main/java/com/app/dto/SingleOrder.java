package com.app.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class SingleOrder {
	
	@NotBlank(message="please enter user id")
	private int userId;
	
	@NotBlank(message="please enter product id")
	private int product_id;
	
	@NotBlank(message="please enter quantity")
	private int quantity;
	
	@NotBlank(message="please enter shipping address")
	private String shippingAddress;
	
	private int total;
	
}
