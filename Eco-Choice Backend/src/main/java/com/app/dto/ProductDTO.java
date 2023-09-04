package com.app.dto;

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
public class ProductDTO {

	int id;
	
	String productName;
	
	String description;
	
	int pricePerUnit;
	
	int totalUnits;
	
	int categoryId;
	
	int farmerId;
	
}
