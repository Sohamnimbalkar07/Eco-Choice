package com.app.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Order;


@Repository
@Transactional
public interface OrderRepository extends JpaRepository<Order, Integer> {

	List<Order> findByUserUserId(long userId);

	Optional<Order> findByOrderId(int orderid);
	
}
