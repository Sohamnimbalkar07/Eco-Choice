class ProductService {
    static BASE_API_URL = "http://localhost:9090/farmer"; 
  
    static async addProduct(product) {
      try {
        const formData = new FormData();
        formData.append('productName', product.productName);
        formData.append('description', product.description);
        formData.append('pricePerUnit', product.pricePerUnit);
        formData.append('totalUnits', product.totalUnits);
        formData.append('picture', product.picture);
        formData.append('category', product.category);
        formData.append('farmerId', product.farmerId);
  
        const response = await fetch(`${ProductService.BASE_API_URL}/addproduct`, 
        {
          method: 'POST',
          body: 'form-data'
        });
  
        const responseData = await response.json();
        if (response.ok) {
          return { success: true, data: responseData };
        } else {
          throw new Error(responseData.error || 'Failed to add product');
        }
      } catch (error) {
        console.error(error);
        return { success: false, error: error.message };
      }
    }
    static async uploadPicture(productId, formData) {
        const uploadUrl = `${ProductService.BASE_API_URL}/uploadimage/${productId}`; // Adjust the endpoint URL according to your API
    
        const response = await fetch(uploadUrl, {
          method: 'POST',
          body: formData,
        });
    
        if (!response.ok) {
          throw new Error('Failed to upload picture');
        }
    
        const data = await response.json();
        return data;
      }
    
  }
  
  export default new ProductService();
  