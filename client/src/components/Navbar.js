import React from "react";
import { Link } from 'react-router-dom';

function Navbar({isLogged, setIsLoggedToFalse }) {

  const handleLogout = () => {
    localStorage.setItem('jwtToken', "");
    setIsLoggedToFalse();
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {!isLogged && <Link to="/sign-up">Sign Up</Link>}
      {!isLogged ? <Link to="/sign-in">Sign In</Link> : <div onClick={handleLogout} className="btn btn-link">Logout</div> }
      {isLogged && <Link to="/my-profile" className="nav-item">My Profile</Link> }
      <Link to="/restaurants">Restaurants</Link>
    </nav>
  );
}

export default Navbar;
