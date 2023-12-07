package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Role;
import com.app.entities.UserRole;

public interface RoleRepository extends JpaRepository<Role,Long>{
 //find by role : enum
	Optional<Role> findByRoleName(UserRole role);
}
