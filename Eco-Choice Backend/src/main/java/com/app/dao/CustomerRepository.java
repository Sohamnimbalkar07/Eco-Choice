package com.app.dao;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Customer;

@Repository
@Transactional
public interface CustomerRepository extends JpaRepository<Customer,Integer>
{

	Optional<Customer> findByEmailAndPassword(String email, String password );
	
    
}
