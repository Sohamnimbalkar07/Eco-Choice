package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.ProductDTO;
import com.app.entities.Category;
import com.app.entities.Product;

public interface IFarmerService {

	Product addProduct(ProductDTO productdto);
	String deleteProduct(int productId);
	List<Product> getProduct(long farmer_id);
	Optional<Product> getProductDetails(int id);
	String updateProductDetails(ProductDTO productdto);
	public boolean upload(int pid, byte[] photo);
	public List<Category> getCategories();
}
