package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ErrorResponse;
import com.app.dto.OrderDetails;
import com.app.dto.PaymentDTO;
import com.app.dto.PaymentStatus;
import com.app.service.ICustomerService;
import com.app.service.IPaymentService;
import com.razorpay.RazorpayException;

@RestController
@CrossOrigin
@RequestMapping("/payment")
public class PaymentController {
	
	@Autowired
	IPaymentService paymentService;

	public PaymentController() {
		super();
		System.out.println("in payment controller");
		
	}
	
	@PostMapping
	public ResponseEntity<?> createpaymentorder(@RequestBody PaymentDTO paymentdto)
	{
		
		try {
			return new ResponseEntity<>(paymentService.createpaymentorder(paymentdto),HttpStatus.OK);
		} catch (RazorpayException e) {
			// TODO Auto-generated catch block
			return new ResponseEntity<>(new ErrorResponse("problem while payment processing"),HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/updatepayment")
	public ResponseEntity<?> updatepayment(@RequestBody PaymentStatus paymentstatus)
	{
	        return new ResponseEntity<>(paymentService.updatepayment(paymentstatus),HttpStatus.OK);
	}
	
}
