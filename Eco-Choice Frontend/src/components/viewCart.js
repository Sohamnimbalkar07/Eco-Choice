import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import "../viewCart.css"
export default function ViewCart() {
  const customerId= sessionStorage.getItem('authenticatedUser');  
  const [cartItems, setCartItems] = useState([]);
 

  const navigate = useNavigate();


  
  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.v.price;
    });
    return total;
  };
 
console.log(customerId);
console.log(calculateTotalPrice());
const tp= calculateTotalPrice();

useEffect(() => {
    fetch(`http://localhost:9090/customer/${customer_id}`).then(resp => resp.json()).then((obj) => {
        if (obj) {
            setData(obj); 
            console.log("in use effect"+data)
            console.log("in use effect of obj"+obj)
        }
    }).catch(error => {
        console.error("Error fetching data:", error);
    });
}, [c_id]);

console.log("in out of use effect"+data)


  return (
    <div className="container py-4">
    <h2 className="mb-3">View Cart</h2>
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.v.name}</td>
            <td>₹{item.v.price_per_unit}.00</td>
            <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(index)}
                >
                  Remove Item
                </button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-3">
      <strong>Total Price: ₹{calculateTotalPrice()}</strong>
    </div>
    <button className="btn btn-primary mt-3" onClick={sendData}>
      Place Order
    </button>
  </div>
  );
        }
