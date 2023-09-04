
// import '../NavBar.css';
// import { Link, NavLink } from "react-router-dom";
// import AuthenticateService from '../service/AuthenticateService';

// const NavBar = () => {
//   return (
//     <>
//       <div id="header">
//         <div class="logo">
//           <a href="#">Eco-Choice</a>
//         </div>
//         <nav>
//           <form class="search" action="search.php">
//             <input name="q" placeholder="Search..." type="search" />
//           </form>
//           <ul>
//             <li>
//               <Link to="/HomePage">Home</Link>
//             </li>
//             <li>
//               <Link to="/About">About</Link>
//             </li>
//             <li>
//               <Link to="/RegistrationForm">Sign-up</Link>
//             </li>
//             <li class="dropdown">
//               <Link to="/Login">Sign-in</Link>
//             </li>
           
//             <li>
//               <a href="/Login" onClick={AuthenticateService.logout}>Log-out</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }
// export default NavBar;


import React from 'react';
import '../NavBar.css';
import { Link } from 'react-router-dom';
import AuthenticateService from '../service/AuthenticateService';

const NavBar = () => {
  return (
    <div id="header">
      <div className="logo">
        <a href="#">Eco-Choice</a>
      </div>
      <nav>
        <form className="search" action="search.php">
          <input name="q" placeholder="Search..." type="search" />
        </form>
        <ul>
          <li>
            <Link to="/HomePage">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/RegistrationForm">Sign-up</Link>
          </li>
          <li className="dropdown">
            <Link to="/Login">Sign-in</Link>
          </li>
          
          <li className="cart-icon">
  <Link to="/TestViewOrder">
    <span className="material-icons" style={{ fontSize: '20px',color:'white' }} role="img" aria-label="Cart">
      &#x1F6D2;
    </span>
  </Link>
</li>
<li>
            <a href="/Login" onClick={AuthenticateService.logout}>Log-out</a>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
