package com.app.service;

import java.util.List;

import com.app.dto.SingleOrder;
import com.app.entities.Order;

public interface IOrderService {

	void placeSingleProductOrder(SingleOrder order);
	String placeOrderFromCart(long userId, String shippingAddress,int total);
	List<Order> getOrdersByCustomerId(long customerId);
	
}
