import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Login.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const email = localStorage.getItem('email');
  const navigate = useNavigate();

  const resetPassword = async () => {
    localStorage.setItem('email', email);
    const apiUrl = `http://localhost:9090/forgotpassword/resetpassword?email=${email}&newpassword=${password}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'post',
      });

      if (response.ok) {
        alert("password Reset Successfully! Login again ");
        navigate('/login');
        console.log('in reset password');
      }
       else {
        // OTP is incorrect, display an alert
        alert('Incorrect OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <div className="container">
      <label htmlFor="Password" className='far'>Enter New Password</label>
      <input
        type="text"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn" onClick={resetPassword}>Submit</button>
    </div>
  );
};

export default ResetPassword;
