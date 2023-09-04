package com.app.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Product;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product,Integer> {

	List<Product> findByFarmerId(int farmer_id);
	
	List<Product> findAllByFarmerId(int farmer_id);

	Product findById(int id);
	
	List<Product> findByNameIgnoreCase(String name);
	
	@Modifying
	@Query(value="update product set picture = :file where id = :pid",nativeQuery = true)
	public int uploadPhoto(int pid, byte[] file);

}
