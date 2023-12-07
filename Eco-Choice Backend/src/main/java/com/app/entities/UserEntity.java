package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString(exclude ="userRoles")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	@Column(length = 20)
	private String first_Name;
	
	@Column(length = 20)
	private String last_Name;
	
	@Column(length = 20)
	private String userName;
	
	@Column(length = 20, unique = true)
	private String email;
	
	@Column(length = 350)
	private String password;
	
	@OneToMany(mappedBy= "user")
    private Set<Address> address;
	
	@Column(length = 10, nullable = false)
	private String mobileNo;
	
	
	@ManyToMany
	@JoinTable(name = "users_roles", 
	joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> userRoles = new HashSet<>();
	

}
