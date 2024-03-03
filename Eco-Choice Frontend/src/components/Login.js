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
    LoginService.authenticateUser({ email: user.email, password: user.password }).then((res) => {
      if (res.data != null) {
        const selectedRole = user.role; 
        const userId = res.data.userId;
        const jwtToken = res.data.jwt;
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('jwtToken',jwtToken);
        const userRoles = res.data.userRoles.map((role) => role.roleName);
        if (userRoles.includes(selectedRole)) {
          if (selectedRole === "ROLE_FARMER") {
            AuthenticateService.farmerLogin(res.data);
            navigate('/FarmerWelcome');
          } else if (selectedRole === "ROLE_CUSTOMER") {
            AuthenticateService.customerLogin(res.data);
            navigate('/viewProduct');
          } else {
            alert("Invalid role selected");
          }
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
            <input type="radio" id="farmer" name="role" value="ROLE_FARMER" checked={user.role === 'ROLE_FARMER'} onChange={(e) => { handlechange(e); }} />
            <label htmlFor="farmer" id="farmer" className='far'>Farmer</label>
            <input type="radio" id="customer" name="role" value="ROLE_CUSTOMER" checked={user.role === 'ROLE_CUSTOMER'} onChange={(e) => { handlechange(e); }} />
            <label htmlFor="customer" id="customer">Customer</label>
            <input type="radio" id="admin" name="role" value="ROLE_ADMIN" checked={user.role === 'ROLE_ADMIN'} onChange={(e) => { handlechange(e); }} />
            <label htmlFor="admin" id="admin">Admin</label>
            <br />
            <button className="btn">Login</button>
          </div>
          <div className="container2">
            <p>Not a member? <a href="/RegistrationForm" className="link">Create Account</a></p>
            <p>Forgot Password? <a href="/forgotpassword" className="link">forgot password</a></p>
          </div>
        </div>
      </form>
    </>
  );
}