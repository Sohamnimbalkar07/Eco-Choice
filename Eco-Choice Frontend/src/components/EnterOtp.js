// import React, { useState } from "react";
// import '../Login.css';
// import { Navigate } from "react-router-dom";
// const EnterOtp = ()=>
// {
//     const [otp, setotp] = useState('');
//     const email = localStorage.getItem('email');
    
//     const sendotp = async () => {
//         localStorage.setItem('email',email);
//         const apiUrl = `http://localhost:9090/verifyotp/forgotpassword?email=${email}&otp=${otp}`;
    
//         fetch(apiUrl, {
//           method: 'post', 
//         })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           console.log('otp sent successfully');
//         })
//         .catch(error => {
//           console.error('Error sending otp:', error);
//         });
//         Navigate('/resetpassword');

//       }
    
//     return(
//      <div className="container">
//         <label htmlFor="otp" className='far'>Enter Otp</label>
//       <input
//         type="text"
//         id="otp"
//         name="otp"
//         value={otp}
//         onChange={(e) => setotp(e.target.value)}
//       />
//       <button className="btn" onClick={sendotp}>submit</button>
//     </div>
//     )
// }

// export default EnterOtp;

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
        // OTP is incorrect, display an alert
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
