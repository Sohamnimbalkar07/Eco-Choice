import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../TestViewOrder.css"
export default function TestViewOrder() {
  const customer_id = sessionStorage.getItem('authenticatedUser');
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    fetch(`http://localhost:9090/customer/${customer_id}`)
      .then(resp => resp.json())
      .then(obj => {
        if (obj) {
          setData(obj);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [customer_id]);
   
  const updateQuantity = (index, newQuantity, cartItemId) => {
    const updatedData = [...data];
    cartItemId = updatedData[index].cart_Items_id;

    if (newQuantity <= 0) {
        removeItem(index, cartItemId);
      } else {
        updatedData[index].quantity = newQuantity;
        setData(updatedData);
      }

    updatedData[index].quantity = newQuantity;
    setData(updatedData);

    
    // Prepare the updated cart item data to send to the backend
    const updatedCartItem = {
      cartItemId: cartItemId,
      quantity: newQuantity,
    };

    // Send the updated cart item data to the backend
    fetch("http://localhost:9090/customer/update", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCartItem),
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.success) {
          console.log('Quantity updated on the backend');
        } else {
          console.error('Failed to update quantity on the backend');
          // Revert the local state back to the original quantity
          updatedData[index].quantity = data[index].quantity;
          setData(updatedData);
        }
      })
      .catch(error => {
        console.error('Error updating quantity on the backend:', error);
        // Revert the local state back to the original quantity
        updatedData[index].quantity = data[index].quantity;
        setData(updatedData);
      });
  };       

  const removeItem = (index, cartItemId) => {
    // Send request to backend to remove item based on cartItemId
    fetch(`http://localhost:9090/customer/${cartItemId}`, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.success) {
          const updatedData = [...data];
          updatedData.splice(index, 1);
          setData(updatedData);
          console.log('Item removed on the backend');
          navigate('/TestViewOrder');
        } else {
          console.error('Failed to remove item on the backend');
        }
      })
      .catch(error => {
        console.error('Error removing item on the backend:', error);
      });
  };
   const calculateTotalPrice = () => {
        let total = 0;
        data.forEach(v => {
          total += v.product.price_per_unit * v.quantity;
        });
        return total;
      };
    localStorage.setItem('totalPrice', calculateTotalPrice());
  return (
    <div className="container-fluid mt-5 col-8   ">
      <h2 style={{color:'white'}} className="text-center"><b>Cart Details</b></h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">Product Name</th>
            <th className="text-center">Description</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Price Per Product</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, index) => (
            <tr key={index}>
              <td className="text-center">{v.product.name}</td>
              <td className="text-center">{v.product.description}</td>
              <td className="text-center">
                <button onClick={() => updateQuantity(index, v.quantity - 1)}>-</button>
                {v.quantity}
                <button onClick={() => updateQuantity(index, v.quantity + 1)}>+</button>
              </td>
              <td>₹{v.product.price_per_unit.toFixed(2)}</td>
              <td>
              <button
  className='btn btn-danger'
  onClick={() => removeItem(index, v.cart_Items_id)}
  style={{ width: '150px' }} // Adjust the width value as needed
>
  Remove Item
</button>
            </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3"></td>
            <td className="text-right">
              <strong style={{color:"black"}}>Total Price: ₹{calculateTotalPrice().toFixed(2)}</strong>
            </td>
            
          </tr>
        </tfoot>
      </table>
        <div className="text-center mt-3">
        <button
          onClick={() => navigate('/placeorderfromcart')} // Redirect to PlaceOrderFromCart component
          className="btn btn-info "  >
          Place Order
        </button>
      </div>
      <div className="text-center mt-3">
        
      <button  onClick={()=>{navigate('/viewProduct')}} className="btn btn-info"  >
        ViewProducts
      </button>
      </div>
    </div>
  );
}

