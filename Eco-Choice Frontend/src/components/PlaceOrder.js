import React from 'react'
import { useState,useEffect } from 'react';
import "../PlaceOrder.css";
export default function PlaceOrder() {
    const [shippingAddress, setShippingAddress] = useState('');
  const orderData = JSON.parse(localStorage.getItem('orderData'));
  
  useEffect(() => {
    // If you want to initialize shipping address with a value from local storage
    if (orderData && orderData.shippingAddress) {
      setShippingAddress(orderData.shippingAddress);
    }
  }, [orderData]);

  const handlePlaceOrder = () => {
    if (!orderData) {
      console.error('Order data not found in local storage.');
      return;
    }

    if (!shippingAddress) {
      alert('Please provide a shipping address.');
      return;
    }

    // Update the shipping address in the order data
    orderData.shippingAddress = shippingAddress;

    // Send the order data to the backend
    fetch('http://localhost:9090/customer/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert('Order placed successfully');

        localStorage.removeItem('orderData');
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        // Handle error here, e.g., show an error message
      });
  };

  return (
    <div>
      <center>
      <h2>Enter Shipping Address</h2>
      </center>
      <center>
      <textarea className="container" cols={1} rows={1}
        value={shippingAddress}
        onChange={(e) => setShippingAddress(e.target.value)}
      />
      <br/>
      
      <button className="btn btn-info"  onClick={handlePlaceOrder}>Place Order</button>
      </center>
    </div>
  )
}
