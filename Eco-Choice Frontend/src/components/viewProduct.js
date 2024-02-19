import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../viewProduct.css';
import { Link } from 'react-router-dom';

export default function ViewProduct() {
  const [data, setData] = useState([]);
  const userId = sessionStorage.getItem('userId');
  const jwtToken = sessionStorage.getItem('jwtToken');
  console.log("jwt token", jwtToken);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    fetch("http://localhost:9090/customer/products",
    {
      method : "get",
      headers :
      {
        "content-type" : "application/json",
        "Authorization": `Bearer ${jwtToken}`
      }
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddToCart = (productId) => {
    const user_id = userId;
    console.log(selectedOption);
    const cartItem = {
      user_id: parseInt(user_id),
      product_id: productId,
      quantity: selectedOption,
    };
   
    fetch('http://localhost:9090/customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwtToken}`
      },
      body: JSON.stringify(cartItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert("Product added to cart");
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
        
      });
  };
   
  const handlePlaceOrder=(productId,price_per_unit)=>{
     const Total=parseInt(selectedOption) * price_per_unit ;
     localStorage.setItem('amount',Total);
    const orderData = {
      userId: userId,
      product_id: productId,
      quantity: selectedOption,
      total:Total
    };
    localStorage.setItem('orderData', JSON.stringify(orderData));
    console.log(orderData);
    navigate('/PlaceOrder')
  };
  return (
    <div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v) => (
              <tr key={v.id}>
                <td>
                  <img
                    src={`data:image/png;base64,${v.picture}`}
                    alt="Product"
                    className="img-fluid product-image"
                  />
                </td>
                <td>
                  <h5 className="product-title">{v.name}</h5>
                  <p className="product-description">{v.description}</p>
                </td>
                <td>₹{v.price_per_unit}.00</td>
                <td>
                  <select
                    className="form-select"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    {/* <option>Select Quantity</option> */}
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(v.id)}
                  >
                    Add to Cart
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" onClick={()=>handlePlaceOrder(v.id,v.price_per_unit)}>
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-3">
        <Link to="/TestViewOrder" className="btn btn-info">
          View Cart
        </Link>
      </div>
      <div className="text-center mt-3">
        <Link to="/orderdetails" className="btn btn-info">
          View Orders
        </Link>
      </div>
    </div>
  );
}
