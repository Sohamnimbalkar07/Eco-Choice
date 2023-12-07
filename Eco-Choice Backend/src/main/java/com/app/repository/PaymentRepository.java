package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

	Optional<Payment> getByRazorpayOrderId(String orderId);

}
