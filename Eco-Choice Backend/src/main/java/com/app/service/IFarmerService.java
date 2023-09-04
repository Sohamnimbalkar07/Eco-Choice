package com.app.service;

import java.util.List;

import com.app.dto.ProductDTO;
import com.app.pojos.Category;
import com.app.pojos.Product;

public interface IFarmerService {

	Product addProduct(ProductDTO productdto);
	String deleteProduct(int productId);
	List<Product> getProduct(int farmer_id);
	Product getProductDetails(int id);
	String updateProductDetails(ProductDTO productdto);
	public boolean upload(int pid, byte[] photo);
	public List<Category> getCategories();
}
