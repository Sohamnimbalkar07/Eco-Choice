import React, { useState, useEffect } from 'react';

const Payment = () => {
  const amount = localStorage.getItem('amount');
  const orderId = localStorage.getItem('orderId');
  const userId = localStorage.getItem('userId');
  const jwtToken = sessionStorage.getItem('jwtToken');
  const razorpayKey = 'rzp_test_X4nvBo6sMDW4ni';

  const [order, setOrder] = useState({
    amount: amount,
    orderid: orderId,
    userid: userId,
  });

  useEffect(() => {
    const initiatePayment = async () => {
      try {
        const response = await fetch('http://localhost:9090/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`,
          },
          body: JSON.stringify(order),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const razorpayId = data.id;

        const options = {
          description: 'Online Payment',
          image: 'https://www.vectorstock.com/royalty-free-vector/organic-symbol-doodle-icon-vector-31288971',
          currency: 'INR',
          key: razorpayKey,
          amount: data.amount,
          name: 'Eco-Choice',
          prefill: {
            email: '',
            contact: '',
            name: '',
          },
          theme: { color: '#F37254' },
        };

        if (window.Razorpay) {
          const rzp = new window.Razorpay(options);
          rzp.open().then((data) => {
            // handle success
            console.data("payment Successfull");
            alert(`Success: ${data.razorpay_payment_id}`);
            
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
        } else {
          console.error('Razorpay library not loaded.');
        }
      } catch (error) {
        console.error('Error initiating payment:', error);
      }
    };

    initiatePayment();
  }, [amount, orderId, userId, jwtToken, order]);

  return (
    <div>
      <h1>Payment</h1>
      {/* Additional payment-related UI or messages can be added here */}
    </div>
  );
};

export default Payment;
