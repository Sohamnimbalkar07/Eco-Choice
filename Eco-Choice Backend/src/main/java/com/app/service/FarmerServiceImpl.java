package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CategoryRepository;
import com.app.dao.FarmerRepository;
import com.app.dao.ProductRepository;
import com.app.dto.ProductDTO;
import com.app.pojos.Category;
import com.app.pojos.Farmer;
import com.app.pojos.Product;

@Service
public class FarmerServiceImpl implements IFarmerService {
    
	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private FarmerRepository farmerRepo;
	
	@Autowired
	private CategoryRepository categoryRepo;
	
	@Override
	public Product addProduct(ProductDTO productdto) {
		

		Product product = new Product(productdto.getProductName(),productdto.getDescription(),productdto.getPricePerUnit(),
				productdto.getTotalUnits(),categoryRepo.findById(productdto.getCategoryId()).get(),farmerRepo.findById(productdto.getFarmerId()).get());
		return productRepo.save(product) ;
	}

	@Override
	public String deleteProduct(int productId) {
		
		productRepo.deleteById(productId);
		return "product deleted successfully";
	}

	@Override
	public List<Product> getProduct(int farmer_id) {
		
		
		return productRepo.findAllByFarmerId(farmer_id);
	}

	@Override
	public Product getProductDetails(int Id)
	{   
		System.out.println(productRepo.findById(Id));
		return productRepo.findById(Id);
		 
	}
	
	@Override
	public String updateProductDetails(ProductDTO productdto) {
		
		Product product = new Product(productdto.getId(),productdto.getProductName(),productdto.getDescription(),productdto.getPricePerUnit(),
				productdto.getTotalUnits(),categoryRepo.findById(productdto.getCategoryId()).get(),farmerRepo.findById(productdto.getFarmerId()).get());
		productRepo.save(product);
		return "Product Updated Sucessfully";
	}

	@Override
	public boolean upload(int pid, byte[] photo) {
		
		if(productRepo.uploadPhoto(pid, photo) == 1)
             return true;
        else
		     return false;
	}

	@Override
	public List<Category> getCategories() {
		
		return categoryRepo.findAll();
	}
	
	
}

