import React, { useState, useEffect } from 'react';

function OrderDetails() {
  const [orderData, setOrderData] = useState([]);
  const customerId = sessionStorage.getItem('authenticatedUser');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:9090/customer/order/${customerId}`);
        const data = await response.json();
        setOrderData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [customerId]);

  return (
    <center>
      <div className='container'>
        <h1 > Your Order Details</h1>
        {orderData.map((order, index) => (
          <div key={index} className="card mb-4 order-card">
            <div >
              {/* <h2 className="card-title">Order ID: {order.orderId}</h2> */}
              <table className="table table-stripped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td>
                        <p className="product-name">{item.product.name}</p>
                        <p className="product-desc">{item.product.description}</p>
                      </td>
                      <td>{item.product.price_per_unit}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" className="text-start"><strong>Total:</strong></td>
                    <td className="text-start" style={{ paddingLeft: '20px' }}><strong>{order.total}</strong></td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-start"><strong>Shipping Address:</strong></td>
                    <td colSpan="3" className="text-start"><strong>{order.shippingAddress}</strong></td>
                  </tr>
                  <tr>
                  <td colSpan="3" className="text-start"><strong>Date:</strong></td>
                    <td colSpan="3" className="text-start"><strong>{order.date}</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        ))}
      </div>
    </center>
  );
}

export default OrderDetails;

