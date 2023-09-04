package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.Cart_ItemsRepository;
import com.app.dao.ProductRepository;
import com.app.pojos.Cart_Items;
import com.app.pojos.Product;


@Service
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	Cart_ItemsRepository cart_itemsRepo;
	
	@Autowired
	ProductRepository productRepo;

	@Override
	public void addToCart(int customerId, int productId, int quantity) {
		
		cart_itemsRepo.addToCart(customerId,productId,quantity);
		
		
	}

	@Override
	public List<Cart_Items> getCartItems(int customer_id) {
		
		return cart_itemsRepo.findAllByCartCustomerId(customer_id);
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
