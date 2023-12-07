package com.app.repository;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Cart_Items;

@Transactional
@Repository
public interface Cart_ItemsRepository extends CrudRepository<Cart_Items,Integer>,JpaRepository<Cart_Items,Integer>{

	@Procedure(procedureName = "addToCart")
	public void addToCart(Long customerID, Integer productID, Integer quantity);

	
	public List<Cart_Items> findAllByCartUserUserId(long user_id);
	
	void deleteByCartUserUserId(long userId);

	@Modifying
	@Query(value="update cart_items set quantity = :quantity where cart_items_id = :cartItemId",nativeQuery = true)
	public  int updatequantity(int cartItemId,int quantity);
	
}
