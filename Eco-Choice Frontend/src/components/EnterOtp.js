

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Login.css';

const EnterOtp = () => {
  const [otp, setOtp] = useState('');
  const email = localStorage.getItem('email');
  const navigate = useNavigate();

  const sendOtp = async () => {
    localStorage.setItem('email', email);
    const apiUrl = `http://localhost:9090/forgotpassword/verifyotp?email=${email}&otp=${otp}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'post',
      });

      if (response.ok) {
        navigate('/resetpassword');
        console.log('in reset password');
      }
       else {
  
        alert('Incorrect OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <div className="container">
      <label htmlFor="otp" className='far'>Enter OTP</label>
      <input
        type="text"
        id="otp"
        name="otp"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button className="btn" onClick={sendOtp}>Submit</button>
    </div>
  );
};

export default EnterOtp;
