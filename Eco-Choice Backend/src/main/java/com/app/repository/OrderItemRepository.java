package com.app.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.OrderItem;

@Transactional
@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

}
