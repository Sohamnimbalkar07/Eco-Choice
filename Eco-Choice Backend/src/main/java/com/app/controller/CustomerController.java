package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.dto.CartItemDTO;
import com.app.dto.ErrorResponse;
import com.app.dto.OrderDetails;
import com.app.dto.ResponseDTO;
import com.app.dto.SingleOrder;
import com.app.pojos.Order;
import com.app.pojos.OrderItem;
import com.app.pojos.Product;
import com.app.service.CustomerServiceImpl;
import com.app.service.ICustomerService;
import com.app.service.IOrderService;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	ICustomerService customerService;
	
	@Autowired
	IOrderService orderService;
	
	public CustomerController() {
		super();
		System.out.println("in Customer controller");
	}
	
	@GetMapping("getproducts/{productname}")
	public ResponseEntity<?> getProductByName(@PathVariable String productname){
		
		try {
			return new ResponseEntity<List<Product>>(customerService.getProductByName(productname),HttpStatus.OK);
		}catch(RuntimeException e)
		{
			System.out.println("err in addToCart" + e);
			return new ResponseEntity<>(new ErrorResponse("Product Not Found",e.getMessage()),HttpStatus.BAD_REQUEST);
		}
		
		}
	
	
	@PostMapping()
	public ResponseEntity<?> addToCart(@RequestBody CartDTO cartdto){
		System.out.println(cartdto);
		try {
			System.out.println(cartdto);
		customerService.addToCart(cartdto.getCustomer_id(), cartdto.getProduct_id(), cartdto.getQuantity());
		
		return new ResponseEntity<>(new ResponseDTO("product is added in cart Successfully"),HttpStatus.CREATED);
		}catch(RuntimeException e)
		{
			System.out.println("err in addToCart" + e);
			return new ResponseEntity<>(new ErrorResponse("adding User failed",e.getMessage()),HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/{customer_id}")
	public ResponseEntity<?> getCartItems(@PathVariable int customer_id){
		
		System.out.println(customer_id);
		try {
			
			return ResponseEntity.ok(customerService.getCartItems(customer_id));
			
		}catch(RuntimeException e)
		{
			return new ResponseEntity<>(new ErrorResponse("No items in Cart",e.getMessage()),HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/products")
	public ResponseEntity<?> getAllProduct(){
			
		return new ResponseEntity<List<Product>>(customerService.getAllProduct(),HttpStatus.OK);
		
		}
	
	@DeleteMapping("/{cartItemId}")
	public ResponseEntity<?> RemoveCart(@PathVariable int cartItemId)
	{
		System.out.println("in remove cart"+cartItemId);
		customerService.removeCart(cartItemId);
		return ResponseEntity.ok(new ResponseDTO("Item removed Successfully"));
	}
	
	@PostMapping("/order")
	public ResponseEntity<?> PlaceSingleProductOrder(@RequestBody SingleOrder order)
	{
		System.out.println("in order ");
		orderService.placeSingleProductOrder(order);
		return new ResponseEntity<>(new ResponseDTO("Order Placed Successfully"),HttpStatus.CREATED);
	}
	
	@PostMapping("/orderfromcart")
	public ResponseEntity<?> placeOrderFromCart(@RequestBody OrderDetails orderdetails)
	{
		return new ResponseEntity<>(orderService.placeOrderFromCart(orderdetails.getCustomerid(), orderdetails.getAddress(),orderdetails.getTotal()),HttpStatus.CREATED);
	}
	
	@GetMapping("/order/{customerId}")
    public ResponseEntity<?> getOrdersByCustomerId(@PathVariable int customerId) {
        List<Order> orders = orderService.getOrdersByCustomerId(customerId);
        return ResponseEntity.ok(orders);
    }

	@PostMapping("/update")
	public ResponseEntity<?> updateCartItems(@RequestBody CartItemDTO cartitemdto)
	{
		System.out.println(cartitemdto);
		customerService.updateCartItem(cartitemdto.getCartItemId(),cartitemdto.getQuantity());
		return null;
	}
}


