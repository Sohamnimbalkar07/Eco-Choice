import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';
import LoginService from '../service/LoginService';
import AuthenticateService from '../service/AuthenticateService';

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    role: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const submitUser = (e) => {
    e.preventDefault();
    LoginService.authenticateUser(user).then((res) => {
      if (res.data != null) {
        console.log(res.data.role);

        if (user.role === "Admin") {
          AuthenticateService.adminLogin(res.data.id);
          navigate('/Admin');
        } else if (user.role === "Customer") {
          AuthenticateService.customerLogin(res.data.id);
          navigate('/viewProduct');
        } else if (user.role === "Farmer") {
          AuthenticateService.farmerLogin(res.data.id);
          navigate('/FarmerWelcome');
        } else {
          alert("Invalid role selected");
        }

        setUser({
          email: "",
          password: "",
          role: ""
        });
      } else {
        alert("Invalid username or password");
        setUser({
          email: "",
          password: "",
          role: ""
        });
      }
    });
  };

  return (
    <>
      <form onSubmit={(e) => { submitUser(e); }}>
        <div>
          <div className="container">
            <h1>Login</h1>
            <input
              type="text"
              name="email"
              className="email"
              placeholder="Email..."
              value={user.email}
              onChange={(e) => { handlechange(e); }}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              className="password"
              placeholder="Password..."
              value={user.password}
              onChange={(e) => { handlechange(e); }}
              required
            />
            <br />
            <input type="radio" id="farmer" name="role" value="Farmer" checked={user.role === 'Farmer'} onChange={(e) => { handlechange(e); }} />
            <label htmlFor="farmer" id="farmer" className='far'>Farmer</label>
            <input type="radio" id="customer" name="role" value="Customer" checked={user.role === 'Customer'} onChange={(e) => { handlechange(e); }} />
            <label htmlFor="customer" id="customer">Customer</label>
            <input type="radio" id="admin" name="role" value="Admin" checked={user.role === 'Admin'} onChange={(e) => { handlechange(e); }} />
            <label htmlFor="admin" id="admin">Admin</label>
            <br />
            <button className="btn">Login</button>
          </div>
          <div className="container2">
            <p>Not a member? <a href="/RegistrationForm" className="link">Create Account</a></p>
          </div>
        </div>
      </form>
    </>
  );
}
