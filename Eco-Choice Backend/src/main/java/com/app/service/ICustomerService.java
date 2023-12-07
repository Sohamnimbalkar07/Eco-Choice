package com.app.service;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.app.entities.Cart_Items;
import com.app.entities.OrderItem;
import com.app.entities.Product;


public interface ICustomerService {

	void addToCart(long userID, int productID, int quantity);
	List<Cart_Items> getCartItems(long user_id);
	void removeCart(int cartItemId);
	List<Product> getProductByName(String productname);
	List<Product> getAllProduct();
	void updateCartItem(int cartItemId,int quantity);
}
