package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Integer>
{

	Optional<Customer> findByEmailAndPassword(String email, String password );
	
}
