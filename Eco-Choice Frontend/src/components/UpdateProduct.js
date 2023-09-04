import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../UpdateProduct.css"

function UpdateProduct() {
  const navigate=useNavigate();
  const { productId } = useParams();
  const farmerId = sessionStorage.getItem('authenticatedUser');
  const [productDetails, setProductDetails] = useState({
    id:"",
    productName: '',
    description: '',
    pricePerUnit: 0, // Corrected property name
    totalUnits: 0,
    categoryId:'',
    farmerId: farmerId,
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9090/farmer/getproduct/${productId}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Map API response properties to your state properties
        setProductDetails({
          id:data.id ,
          productName: data.name,
          description: data.description,
          pricePerUnit: data.price_per_unit,
          totalUnits: data.totalUnits,
          categoryId: data.category.id,
          farmerId: farmerId,
        });

        console.log(productDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductDetails();
  }, [productId, farmerId]); // Added farmerId dependency

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:9090/farmer`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      navigate("/FarmerWelcome");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5 border p-4">
      <h2>Update Product</h2>
      <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
          <label className="form-label">Id</label>
          <input type="text" className="form-control" name="id" value={productDetails.id} onChange={handleInputChange}readOnly />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="productName"
            value={productDetails.productName}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" name="description" value={productDetails.description} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Price Per Unit</label>
          <input type="number" className="form-control" name="pricePerUnit" value={productDetails.pricePerUnit} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Total Units</label>
          <input type="number" className="form-control" name="totalUnits" value={productDetails.totalUnits} onChange={handleInputChange} />
        </div>

        
        <div>
        <input type="hidden" name="categoryId" value={productDetails.categoryId} onChange={handleInputChange} />
        </div>
        <div>
        <input type="hidden" name="farmerId" value={productDetails.farmerId} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
