package com.app.dao;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Farmer;

@Repository
@Transactional
public interface FarmerRepository extends JpaRepository<Farmer,Integer> {

	Optional<Farmer> findByEmailAndPassword(String email, String password);
}
