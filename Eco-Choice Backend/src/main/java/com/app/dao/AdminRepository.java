package com.app.dao;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Admin;


@Repository
@Transactional
public interface AdminRepository extends JpaRepository<Admin,Integer> 
{
	
	//Use : inherited method : List<User> findAll() 
	//user inherited method : 	<s extends T> S save(S entity)
	Optional<Admin> findByEmailAndPassword(String email, String password );
}
