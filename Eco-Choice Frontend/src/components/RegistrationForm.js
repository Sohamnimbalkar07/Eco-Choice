import React, { useState } from 'react';
import '../RegistrationForm.css';
import RegistrationService from '../service/RegistrationService';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate = useNavigate();
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: '', // Add confirm_password field
    username: '',
    address: '',
    mobileNo: '',
    role: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setPasswordMismatch(true);
      return;
    }

    RegistrationService.addUserDetails(formData)
      .then((res) => {
        setFormData({
          email: '',
          first_name: '',
          last_name: '',
          password: '',
          confirm_password: '', // Clear confirm password
          username: '',
          address: '',
          mobileNo: '',
          role: '',
        });
        setPasswordMismatch(false); // Reset password mismatch status
        navigate('/Login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className='container1'>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <input
           type="email"
             id="email"
             name="email"
            placeholder='Email...'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
         <input
            type="text"
            id="firstName"
            name="first_name"
            placeholder='First name...'
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            name="last_name"
            placeholder='Last name...'
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
        <input
            type="text"
            id="username"
            name="username"
            placeholder='Username...'
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
         <div>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password...'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              type='password'
              id='confirmPassword'
              name='confirm_password'
              placeholder='Confirm Password...'
              value={formData.confirm_password}
              onChange={handleInputChange}
              required
            />
            {passwordMismatch && (
              <p style={{ color: 'red' }}>Passwords do not match.</p>
            )}
          </div>
          <div>
        <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            placeholder='MobileNo...'
            value={formData.mobileNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
        <input
            type="text"
            id="Address"
            placeholder='Address...'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='role'>
     
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option>Select a role</option>
            <option value="customer" onSelect={handleInputChange}>Customer</option>
            <option value="farmer"onSelect={handleInputChange}>Farmer</option>
          </select>
        </div>
        <br></br>
             <button type='submit' className='btn1'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
