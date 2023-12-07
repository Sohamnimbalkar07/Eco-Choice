package com.app.service;

import java.time.LocalDate;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.app.dto.PaymentDTO;
import com.app.dto.PaymentStatus;
import com.app.entities.Payment;
import com.app.repository.OrderRepository;
import com.app.repository.PaymentRepository;
import com.app.repository.UserRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@Service
public class PaymentService implements IPaymentService {
	
	@Autowired
    private UserRepository userRepo;

    @Autowired
    private OrderRepository orderRepo;
    
    @Autowired
    private PaymentRepository paymentRepo;
	
	@Value("${razorpay.keyId}")
    private String razorpayKeyId;

    @Value("${razorpay.keySecret}")
    private String razorpayKeySecret;

	@Override
	public String createpaymentorder(PaymentDTO paymentdto) throws RazorpayException {
		
		RazorpayClient razorpayClient = new RazorpayClient(razorpayKeyId, razorpayKeySecret);

        JSONObject razorpayOrderRequest = new JSONObject();
        razorpayOrderRequest.put("amount", paymentdto.getAmount() * 100);
        razorpayOrderRequest.put("currency", "INR");
        razorpayOrderRequest.put("receipt", "txn_235425");
        Order order = razorpayClient.Orders.create(razorpayOrderRequest);
        
        Payment payment = new Payment();
        
        payment.setUser(userRepo.findByUserId(paymentdto.getUserid()).get());
        payment.setOrderId(orderRepo.findByOrderId(paymentdto.getOrderid()).get());
        payment.setPaymentDate(LocalDate.now());
        payment.setPaymentAmount(paymentdto.getAmount());
        payment.setPaymentStatus("created");
        payment.setRazorpayOrderId(order.get("id"));
        payment.setRazorpayPaymentId(null);
        payment.setPaymentReceipt(order.get("receipt"));
        
        paymentRepo.save(payment);
		
		return order.toString();
	}

	@Override
	public String updatepayment(PaymentStatus paymentstatus) {
		
		
		
		Payment payment = paymentRepo.getByRazorpayOrderId(paymentstatus.getOrderId()).get();
		
		payment.setRazorpayPaymentId(paymentstatus.getPaymentID());
		payment.setPaymentStatus(paymentstatus.getStatus());
		payment.setPaymentDate(LocalDate.now());
		
	    paymentRepo.save(payment);
	    
		return "payment Successful";
	}

}
