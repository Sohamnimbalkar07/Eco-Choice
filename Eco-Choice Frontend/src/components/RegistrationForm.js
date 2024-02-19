import React, { useState } from 'react';
import '../RegistrationForm.css';
import RegistrationService from '../service/RegistrationService';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate = useNavigate();
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    first_Name: '',
    last_Name: '',
    password: '',
    confirm_password: '', // Add confirm_password field
    userName: '',
    mobileNo: '',
    roles: [],
  });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   if(name == role)
  //   {
  //     setFormData({
  //       ...formData,
  //       roles[value],
  //     })
  //   }
  //   else {setFormData({
  //     ...formData,
  //     [name]: value,
  //   }); }
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    if (name === 'role') {
      setFormData({
        ...formData,
        roles: [value], // Assuming 'value' is the role you want to set
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setPasswordMismatch(true);
      return;
    }
    console.log(formData);

    const register = { ...formData };
    delete register.confirm_password;
    console.log(register);
    RegistrationService.addUserDetails(register)
      .then((res) => {
        setFormData({
          email: '',
          first_Name: '',
          last_Name: '',
          password: '',
          confirm_password: '', // Clear confirm password
          userName: '',
          mobileNo: '',
          roles: [],
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
            name="first_Name"
            placeholder='First name...'
            value={formData.first_Name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            name="last_Name"
            placeholder='Last name...'
            value={formData.last_Name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
        <input
            type="text"
            id="username"
            name="userName"
            placeholder='UserName...'
            value={formData.userName}
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
        {/* <input
            type="text"
            id="Address"
            placeholder='Address...'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
            required
          /> */}
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
            <option value="ROLE_CUSTOMER" onSelect={handleInputChange}>Customer</option>
            <option value="ROLE_FARMER"onSelect={handleInputChange}>Farmer</option>
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
