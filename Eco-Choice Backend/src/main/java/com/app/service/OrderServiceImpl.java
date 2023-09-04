package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.Cart_ItemsRepository;
import com.app.dao.CustomerRepository;
import com.app.dao.OrderItemRepository;
import com.app.dao.OrderRepository;
import com.app.dao.ProductRepository;
import com.app.dto.SingleOrder;
import com.app.pojos.Cart_Items;
import com.app.pojos.Customer;
import com.app.pojos.Order;
import com.app.pojos.OrderItem;
import com.app.pojos.Product;

@Service
public class OrderServiceImpl implements IOrderService {

	    
	    @Autowired
	    private CustomerRepository customerRepo;

	    @Autowired
	    private OrderRepository orderRepo;

	    @Autowired
	    private OrderItemRepository orderItemRepo;

	    @Autowired
	    private Cart_ItemsRepository cart_ItemsRepo;
	    
	    @Autowired
	    private ProductRepository productRepo;

		@Override
	    public void placeSingleProductOrder(SingleOrder order) {
	        // Retrieve the customer
	        Customer customer = customerRepo.findById(order.getCustomerId())
	        .orElseThrow(() -> new RuntimeException("Customer not found with ID"));
	        
	        Product product = productRepo.findById(order.getProduct_id());
	        //.orElseThrow(() -> new RuntimeException("product not found with ID"));

	        // Create a new order
	        Order order1 = new Order();
	        order1.setCustomer(customer);
	        order1.setShippingAddress(order.getShippingAddress());
	        order1.setTotal(order.getTotal());
            order1.setDate(LocalDate.now());
	        // Create an order item for the single product
	        OrderItem orderItem = new OrderItem();
	        orderItem.setOrder(order1);
	        orderItem.setProduct(product);
	        orderItem.setQuantity(order.getQuantity());
	        orderItem.setTotal(order.getTotal());
	        // Calculate and set the total based on product price and quantity
	        // orderItem.setTotal(...);

	        // Save order and order item
	        order1.setOrderItems(Collections.singletonList(orderItem));
	        Order savedOrder = orderRepo.save(order1);
	        orderItemRepo.save(orderItem);

	        //return savedOrder
	    }

		@Override
		public String placeOrderFromCart(int customerId, String shippingAddress,int total) {
			
			// Retrieve the customer
	        Customer customer = customerRepo.findById(customerId)
	                .orElseThrow(() -> new RuntimeException("Customer not found with ID: " + customerId));

	        // Create a new order
	        Order order = new Order();
	        order.setCustomer(customer);
	        order.setShippingAddress(shippingAddress);
	        order.setTotal(total);
            order.setDate(LocalDate.now());
	        // Retrieve cart items for the customer
	        List<Cart_Items> cartItems = cart_ItemsRepo.findAllByCartCustomerId(customerId);

//	        if (cartItems.isEmpty()) {
//	            return "Cart is empty";
//	        }

	        // Create order items from cart items
	        List<OrderItem> orderItems = new ArrayList<>();

	        for (Cart_Items cartItem : cartItems) {
	            OrderItem orderItem = new OrderItem();
	            orderItem.setOrder(order);
	            orderItem.setProduct(cartItem.getProduct());
	            orderItem.setQuantity(cartItem.getQuantity());
	            orderItem.setTotal(cartItem.getTotalPrice());
	            // Calculate and set the total based on product price and quantity
	            // orderItem.setTotal(...);

	            orderItems.add(orderItem);
	        }

	        // Save order and order items
	        order.setOrderItems(orderItems);
	        Order savedOrder = orderRepo.save(order);
	        orderItemRepo.saveAll(orderItems);

	        // Clear the customer's cart after placing the order
	       cart_ItemsRepo.deleteByCartCustomerId(customerId);

	        //return savedOrder;
			return "1";
		}
		
		public List<Order> getOrdersByCustomerId(int customerId) {
	        return orderRepo.findByCustomerId(customerId);
	    }
	}

	


