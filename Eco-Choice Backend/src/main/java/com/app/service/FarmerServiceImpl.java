package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repository.CategoryRepository;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;
import com.app.dto.ProductDTO;
import com.app.entities.Category;
import com.app.entities.UserEntity;
import com.app.entities.Product;

@Service
public class FarmerServiceImpl implements IFarmerService {
    
	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private CategoryRepository categoryRepo;
	
	@Override
	public Product addProduct(ProductDTO productdto) {
		

		Product product = new Product(productdto.getProductName(),productdto.getDescription(),productdto.getPricePerUnit(),
				productdto.getTotalUnits(),categoryRepo.findById(productdto.getCategoryId()).get(),userRepo.findByUserId(productdto.getUserId()).get());
		return productRepo.save(product) ;
	}

	@Override
	public String deleteProduct(int productId) {
		
		productRepo.deleteById(productId);
		return "product deleted successfully";
	}
//
	@Override
	public List<Product> getProduct(long user_id) {
		
		
		return productRepo.findAllByUserUserId(user_id);
	}

	@Override
	public Optional<Product> getProductDetails(int Id)
	{   
		System.out.println(productRepo.findById(Id));
		return productRepo.findById(Id);
		 
	}
	
	@Override
	public String updateProductDetails(ProductDTO productdto) {
		
		Product product = new Product(productdto.getId(),productdto.getProductName(),productdto.getDescription(),productdto.getPricePerUnit(),
				productdto.getTotalUnits(),categoryRepo.findById(productdto.getCategoryId()).get(),userRepo.findByUserId(productdto.getUserId()).get());
		productRepo.save(product);
		return "Product Updated Sucessfully";
	}

	@Override
	public boolean upload(int pid, byte[] photo) {
		System.out.println("in upload service method");
		if(productRepo.uploadPhoto(pid, photo) == 1)
             return true;
        else
		     return false;
	}
//
	@Override
	public List<Category> getCategories() {
		
		return categoryRepo.findAll();
	}
	
	
}

