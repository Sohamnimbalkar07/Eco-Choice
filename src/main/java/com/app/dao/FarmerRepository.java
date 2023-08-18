package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.pojos.Farmer;

public interface FarmerRepository extends JpaRepository<Farmer,Integer> {

	Optional<Farmer> findByEmailAndPassword(String email, String password);
}
