package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ErrorResponse;
import com.app.dto.ProductDTO;
import com.app.dto.ResponseDTO;
import com.app.pojos.Product;
import com.app.service.IFarmerService;



@RestController
@CrossOrigin
@RequestMapping("/farmer")
public class FarmerController {

	
	
	public FarmerController() {
		super();
		System.out.println("in farmer controller");
	}


	@Autowired
	IFarmerService FarmerService;
	
	
	
	@GetMapping("/{farmer_id}")
	public ResponseEntity<?> getproduct(@PathVariable int farmer_id)
	{
		System.out.println("in get all product details get product");
		//invoke service method to get details
		try {
			
			return ResponseEntity.ok(FarmerService.getProduct(farmer_id));
			} catch(RuntimeException e)
			{
				System.out.println("err in get" + e);
				return new ResponseEntity<>(new ErrorResponse("unable to get products",e.getMessage()),HttpStatus.BAD_REQUEST);
			}
	}
	
	
	@PostMapping("/addproduct")
	public ResponseEntity<?> addProduct(@RequestBody ProductDTO productdto)
	{
		
		System.out.println("in add product   " + productdto);
		try {
			System.out.println("in add product");
		Product product1 = FarmerService.addProduct(productdto);
		return ResponseEntity.ok(product1);
		}
		catch(RuntimeException e)
		{
			System.out.println("err in get" + e);
			return new ResponseEntity<>(new ErrorResponse("Product not added, please try again",e.getMessage()),HttpStatus.BAD_REQUEST);
		}
		
	}
	
	//this method is used to consuming multipart/form-data
	@PostMapping(value="/uploadimage/{pid}",consumes = "multipart/form-data")
	public boolean uploadImage(@PathVariable int pid,@RequestBody MultipartFile file)
	{   System.out.println(file);
		boolean flag = true;
		try
		{
			flag = FarmerService.upload(pid, file.getBytes());
		}
		catch(Exception e)
		{
			flag = false;
		}
		return flag;
	}
	
	
	@DeleteMapping("/{productId}")
	public ResponseEntity<ResponseDTO> deleteProduct(@PathVariable int productId)
	{
		System.out.println("in delete user details" + productId);
	
		return ResponseEntity.ok(new ResponseDTO(FarmerService.deleteProduct(productId)));
	}
	
	@GetMapping("/getproduct/{id}")
	public ResponseEntity<?> getProductDetails(@PathVariable int id)
	{
		System.out.println("in get user details" + id);
		//invoke service method to get details
		try {
			
			return ResponseEntity.ok(FarmerService.getProductDetails(id));
			} catch(RuntimeException e)
			{
				System.out.println("err in get" + e);
				return new ResponseEntity<>(new ErrorResponse("Fetching USer details failed ",e.getMessage()),HttpStatus.BAD_REQUEST);
			}
	}
    //add REST API to update existing user details
	@PutMapping
	public ResponseEntity<?> updateProductDetails(@RequestBody ProductDTO productdto)
	{
		System.out.println(productdto);
		
		try {
		
		return ResponseEntity.ok(FarmerService.updateProductDetails(productdto));
		}
		catch(RuntimeException e)
		{
			System.out.println("err in get" + e);
			return new ResponseEntity<>(new ErrorResponse("updating USer details failed ",e.getMessage()),HttpStatus.BAD_REQUEST);
		}
		
	}
	@GetMapping("/getcategory")
	public ResponseEntity<?> getCategories()
	{
		System.out.println("in get category");
	    return ResponseEntity.ok(FarmerService.getCategories()); 
	}
}
