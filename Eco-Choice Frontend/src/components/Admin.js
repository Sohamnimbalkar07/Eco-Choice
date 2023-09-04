import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Admin() {
  const navigate=useNavigate();
  const [adminData, setAdminData] = useState({
    first_Name: '',
    last_Name: '',
    user_Name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    
    const { name, value } = event.target;
    console.log(name, value); 
    setAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:9090/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

        setAdminData({
        first_Name: '',
        last_Name: '',
        user_Name: '',
        email: '',
        password: '',
      });
      navigate("/AdminWelcome");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Admin</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label>First Name</label>
          <input type="text" name="first_Name" value={adminData.first_Name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" name="last_Name" value={adminData.last_Name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label>User Name</label>
          <input type="text" name="user_Name" value={adminData.user_Name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" value={adminData.email} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" name="password" value={adminData.password} onChange={handleInputChange} />
        </div>
        <button type="submit" >Add Admin</button>
      </form>
    </div>
  );
}

export default Admin;
