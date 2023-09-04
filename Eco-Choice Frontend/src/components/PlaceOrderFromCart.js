import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrderFromCart() {
  const customerid = sessionStorage.getItem('authenticatedUser');
  const total = parseFloat(localStorage.getItem('totalPrice'));

  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const submitOrder = () => {
    const orderData = {
      customerid: customerid,
      address: address,
      total: total,
    };

    // Send the data to the backend
    fetch("http://localhost:9090/customer/orderfromcart", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then(resp => {
        console.log('Response:', resp);
        return resp.json();
      })
      .then(response => {
        console.log('JSON Response:', response);

        if (response.success) {
          console.log('Order submitted successfully');
    
          localStorage.removeItem('totalPrice');
         
        } else {
          console.error('Failed to submit order');
          // Handle failure if needed
          navigate('/orderdetails');
        }
      })
      .catch(error => {
        console.error('Error submitting order:', error);
        // Handle error if needed
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
  style={{ width: '150px' }} // Adjust the height value as needed
>
  Place Order
</button>
      </div>
    </div>
  );
}
