package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repository.Cart_ItemsRepository;
import com.app.repository.OrderItemRepository;
import com.app.repository.OrderRepository;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;
import com.app.dto.SingleOrder;
import com.app.entities.Cart_Items;
import com.app.entities.Order;
import com.app.entities.OrderItem;
import com.app.entities.Product;
import com.app.entities.UserEntity;

@Service
public class OrderServiceImpl implements IOrderService {
	
	    @Autowired
	    private UserRepository userRepo;

	    @Autowired
	    private OrderRepository orderRepo;

	    @Autowired
	    private OrderItemRepository orderItemRepo;

	    @Autowired
	    private Cart_ItemsRepository cart_ItemsRepo;
	    
	    @Autowired
	    private ProductRepository productRepo;

		@Override
	    public int placeSingleProductOrder(SingleOrder order) {
	        
	        UserEntity user = userRepo.findByUserId(order.getUserId())
	        .orElseThrow(() -> new RuntimeException("User not found with ID"));
	        
	        Product product = productRepo.findById(order.getProduct_id())
	        .orElseThrow(() -> new RuntimeException("product not found with ID"));

	        
	        Order order1 = new Order();
	        order1.setUser(user);
	        order1.setShippingAddress(order.getShippingAddress());
	        order1.setTotal(order.getTotal());
            order1.setDate(LocalDate.now());
	        
	        OrderItem orderItem = new OrderItem();
	        orderItem.setOrder(order1);
	        orderItem.setProduct(product);
	        orderItem.setQuantity(order.getQuantity());
	        orderItem.setTotal(order.getTotal());
	        
	        order1.setOrderItems(Collections.singletonList(orderItem));
	        Order savedOrder = orderRepo.save(order1);
	        OrderItem placedOrder = orderItemRepo.save(orderItem);
            return savedOrder.getOrderId();
	    }

		@Override
		public int placeOrderFromCart(long userId, String shippingAddress,int total) {
			
			UserEntity user = userRepo.findByUserId(userId)
			        .orElseThrow(() -> new RuntimeException("User not found with ID"));

	        
	        Order order = new Order();
	        order.setUser(user);
	        order.setShippingAddress(shippingAddress);
	        order.setTotal(total);
            order.setDate(LocalDate.now());
	        
	        List<Cart_Items> cartItems = cart_ItemsRepo.findAllByCartUserUserId(userId);

//	        if (cartItems.isEmpty()) {
//	            return "Cart is empty";
//	        }

	        
	        List<OrderItem> orderItems = new ArrayList<>();

	        for (Cart_Items cartItem : cartItems) 
	        {
	            OrderItem orderItem = new OrderItem();
	            orderItem.setOrder(order);
	            orderItem.setProduct(cartItem.getProduct());
	            orderItem.setQuantity(cartItem.getQuantity());
	            orderItem.setTotal(cartItem.getTotalPrice());
	            
                orderItems.add(orderItem);
	        }

	        
	        order.setOrderItems(orderItems);
	        Order savedOrder = orderRepo.save(order);
	        orderItemRepo.saveAll(orderItems);

	        
	       cart_ItemsRepo.deleteByCartUserUserId(userId);

			return savedOrder.getOrderId();
		}
		
		public List<Order> getOrdersByCustomerId(long customerId) 
		{
	        return orderRepo.findByUserUserId(customerId);
	    }

}

	


