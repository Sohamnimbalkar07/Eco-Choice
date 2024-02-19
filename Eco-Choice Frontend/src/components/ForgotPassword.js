import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const sendEmail = async () => {
    localStorage.setItem('email', email);
    const apiUrl = `http://localhost:9090/forgotpassword?email=${email}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'post',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Email sent successfully');
      navigate('/enterotp');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <div className="container">
      <label htmlFor="email" className='far'>Enter email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" onClick={() => sendEmail()}>Send Email</button>
      <div>      Wait for some time after clicking on send otp
      </div>
    </div>
  );
};

export default ForgotPassword;
