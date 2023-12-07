package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "orders")
public class Order {

	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int orderId;
	    
	    @ManyToOne
	    @JsonIgnore
	    @JoinColumn(name = "user_id")
		private UserEntity user;
	    
	    @OneToMany(mappedBy = "order")
	    @Column(length = 20, nullable = false)
	    private List<OrderItem> orderItems = new ArrayList<>();
	    
	    @Column(length = 60, nullable = false)
	    private String shippingAddress;
	    
	    private LocalDate date;
	    
	    private int total;
	

}
