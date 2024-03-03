import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrderFromCart() {
  const userId = sessionStorage.getItem('userId');
  const total = parseFloat(localStorage.getItem('totalPrice'));
  const jwtToken = sessionStorage.getItem('jwtToken');
  console.log(userId);
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const submitOrder = async () => {
    const orderData = {
      userid: userId,
      address: address,
      total: total,
    };
    console.log(userId , "user id is " );
    
    fetch("http://localhost:9090/customer/orderfromcart", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwtToken}`
      },
      body: JSON.stringify(orderData),
    })
      .then(resp => {
        console.log('Response:', resp);
        return resp.json();
      })
      .then(response => {
        console.log('JSON Response:', response);
        localStorage.setItem('orderId',response);
        console.log(response);
        if (response.success) {
          console.log('Order submitted successfully');
          localStorage.removeItem('totalPrice');
         
        } else {
          console.error('Failed to submit order');
        
          navigate('/payment');

        }
      })
      .catch(error => {
        console.error('Error submitting order:', error);
      
      });
  };

  return (
    <div className="container mt-5 col-8  ">
      <h2 style={{color:"black"}} className="text-center"><b>Shipping Address Details</b></h2>
      <div className="text-center">
        <textarea
          rows="4"
          cols="50"
          className="form-control"
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="Enter your shipping address..."
        />
      </div>
      <div className="text-center mt-3">
      <button
  onClick={submitOrder}
  className="btn btn-info"
  style={{ width: '150px' }} 
>
  Place Order
</button>
      </div>
    </div>
  );
}
