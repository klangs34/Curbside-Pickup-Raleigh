import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

//styling stuff here

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  const jwtToken = localStorage.getItem('jwtToken');

  const handleServerCall = (e) => {
    e.preventDefault();
    axios({
      headers: {
        Authorization: `Bearer ${jwtToken}`
      },
      method: 'get',
      url: '/user-profile'
    })
      .then(data => console.log(data))
  }
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/sign-in">Sign In</Link>
      <p onClick={handleServerCall} className="nav-item">My Profile</p>
      <Link to="/restaurants">Restaurants</Link>
    </nav>
  );
}

export default Navbar;
