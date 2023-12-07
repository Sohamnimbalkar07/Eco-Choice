package com.app.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentId;

    @OneToOne
	@JoinColumn(name = "order_id")
    private Order orderId;
    
    @OneToOne
	@JoinColumn(name = "user_id")
	private UserEntity user;

    private LocalDate paymentDate;

    private int paymentAmount;

    private String paymentStatus;

    private String paymentReceipt;

    private String razorpayOrderId;
    
    private String razorpayPaymentId;
    
}

