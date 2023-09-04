package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminRepository;
import com.app.pojos.Admin;

@Service
public class AdminServiceImpl implements IAdminService {

	@Autowired
	AdminRepository adminRepo;

	@Override
	public Admin addAdmin(Admin admin) {
	
		return adminRepo.save(admin);
	}
	
	
}
