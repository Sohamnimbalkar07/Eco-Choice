package com.app.service;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.app.pojos.Cart_Items;
import com.app.pojos.OrderItem;
import com.app.pojos.Product;


public interface ICustomerService {

	void addToCart(int customerID, int productID, int quantity);
	List<Cart_Items> getCartItems(int customer_id);
	void removeCart(int cartItemId);
	List<Product> getProductByName(String productname);
	List<Product> getAllProduct();
	void updateCartItem(int cartItemId,int quantity);
}
