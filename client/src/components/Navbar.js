import React from "react";
import { Link } from 'react-router-dom';

//styling stuff here

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/restaurants">Restaurants</Link>
    </nav>
  );
}

export default Navbar;
