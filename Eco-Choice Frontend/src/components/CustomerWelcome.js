import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../CustomerWelcome.css' ;

function CustomerWelcome() {
 const customerId= sessionStorage.getItem('authenticatedUser'); 
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const[selectedOption,setSelectedOption]=useState('');
  useEffect(() => {
    // Make a network request to fetch products from the API
    fetch('http://localhost:9090/customer/products') // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError(error.message); // Set the error message in state
      });
  }, []);
    
   const handleSelectChange=(event)=>{
    setSelectedOption(event.target.value);
   }
     
  const handleAddToCart = (productId) => {
    const customer_id =customerId  // Fetch customer_id from session storage
    const cartItem = {
      customer_id: parseInt(customer_id),
      product_id: productId,
      quantity:selectedOption
    };

    fetch('http://localhost:9090/customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert("product added to cart");
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
        // Handle error here, e.g., show an error message
      });
  };

  return (
    <div className='container mt-4'>
      <h1 className='text-center mb-4'>Welcome to Our Store</h1>
      {error ? (
        <div className='alert alert-danger'>Error: {error}</div>
      ) : (
        <div className='row'>
          {products.map((product) => (
            <div key={product.id} className='col-md-4 mb-4'>
             <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>{product.description}</p>
                <p className='card-text'>Price: ${product.price_per_unit}</p>
                <p className='card-text'>Total Units: {product.totalUnits}</p>
                <div><select value={selectedOption}onChange={handleSelectChange}>
                    <option> select Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select></div>
                <div className='text-center'>
                  <button className='btn btn-primary mr-2'>Purchase</button>
                  <button className='btn btn-success' onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomerWelcome;
