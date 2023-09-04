package com.app.pojos;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Customer {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(length = 20, nullable = false)
	private String first_name;
	
	@Column(length = 20, nullable = false)
	private String last_name;
	
    @Column(length = 35, nullable = false)
	private String email;
    
    @Column(length = 20, nullable = false)
    @JsonIgnore
	private String  password;
    
    @Column(length = 20, nullable = false)
	private String username;
    
    @Column(length = 10, nullable = false)
	private String mobileNo;
	
    @OneToMany(mappedBy= "customer")
    private Set<Address> address;
    
	@OneToOne(mappedBy= "customer")
	@JsonIgnore
	private Cart cart;

	public Customer(String first_name, String last_name, String email, String password, String username,
			String mobileNo) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.password = password;
		this.username = username;
		this.mobileNo = mobileNo;
		this.address = address;
	}
	
	
	 
	
}
