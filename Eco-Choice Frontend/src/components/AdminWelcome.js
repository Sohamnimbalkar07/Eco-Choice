import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function AdminWelcome() {
 const navigate=useNavigate();
  return (
    <div>
      <h1>Welcome to admin</h1>

      <button onClick={()=>navigate("/Admin")}>Add Admin</button>
    </div>
  )
}
