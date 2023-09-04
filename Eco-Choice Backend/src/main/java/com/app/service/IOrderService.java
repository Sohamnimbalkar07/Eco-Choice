package com.app.service;

import java.util.List;

import com.app.dto.SingleOrder;
import com.app.pojos.Order;

public interface IOrderService {

	void placeSingleProductOrder(SingleOrder order);
	String placeOrderFromCart(int customerId, String shippingAddress,int total);
	List<Order> getOrdersByCustomerId(int customerId);
	
}
