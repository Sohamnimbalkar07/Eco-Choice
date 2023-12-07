package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repository.Cart_ItemsRepository;
import com.app.repository.ProductRepository;
import com.app.entities.Cart_Items;
import com.app.entities.Product;


@Service
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	Cart_ItemsRepository cart_itemsRepo;
	
	@Autowired
	ProductRepository productRepo;

	@Override
	public void addToCart(long userId, int productId, int quantity) {
		
		cart_itemsRepo.addToCart(userId,productId,quantity);
		
		
	}

	@Override
	public List<Cart_Items> getCartItems(long user_id) {
		
		return cart_itemsRepo.findAllByCartUserUserId(user_id);
	}

	@Override
	public void removeCart(int cartItemId) {
		cart_itemsRepo.deleteById(cartItemId);
		
	}

	
	  @Override 
	  public List<Product> getProductByName(String productname) {
	 
	 return productRepo.findByNameIgnoreCase(productname); 
	 }

	@Override
	public List<Product> getAllProduct() {
		
		return productRepo.findAll();
	}

	@Override
	public void updateCartItem(int cartItemId, int quantity) {
		
		int quantity1 = cart_itemsRepo.updatequantity(cartItemId,quantity);
		
	}
	 

}
