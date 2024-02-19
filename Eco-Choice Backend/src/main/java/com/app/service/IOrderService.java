package com.app.service;

import java.util.List;

import com.app.dto.SingleOrder;
import com.app.entities.Order;

public interface IOrderService {

	int placeSingleProductOrder(SingleOrder order);
	int placeOrderFromCart(long userId, String shippingAddress,int total);
	List<Order> getOrdersByCustomerId(long customerId);
	
}
