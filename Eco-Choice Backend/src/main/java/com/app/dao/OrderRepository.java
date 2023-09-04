package com.app.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Order;


@Repository
@Transactional
public interface OrderRepository extends JpaRepository<Order, Integer> {

	List<Order> findByCustomerId(int customerId);
	
}
