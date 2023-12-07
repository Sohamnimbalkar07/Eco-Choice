package com.app.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Cart;

@Transactional
@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

	
}
