package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table(name="Admins")
public class Admin {
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
   
    @Column(length = 30, nullable= false)
    private String first_Name;
    
    @Column(length = 30, nullable = false)
	private String last_Name;
    
    @Column(length = 20, nullable = false)
	private String user_Name;
    
    @Column(length = 35, nullable = false)
	private String email;
    
    @Column(length = 20, nullable = false)
    private String password;
	
}
