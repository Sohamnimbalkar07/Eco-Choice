package com.app.service;

import com.app.dto.PaymentDTO;
import com.app.dto.PaymentStatus;
import com.razorpay.RazorpayException;

public interface IPaymentService {

	String createpaymentorder(PaymentDTO paymentdto) throws RazorpayException;

	String updatepayment(PaymentStatus paymentstatus);

}
