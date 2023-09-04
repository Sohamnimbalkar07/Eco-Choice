package com.app.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Category;

@Transactional
@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

	
}
