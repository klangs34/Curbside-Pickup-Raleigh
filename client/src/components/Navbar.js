import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLogged, setIsLoggedToFalse }) {
  const handleLogout = () => {
    localStorage.setItem("jwtToken", "");
    setIsLoggedToFalse();
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/restaurants">Restaurants</Link>
      {!isLogged && <Link to="/sign-up">Create Account</Link>}
      {!isLogged ? (
        <Link to="/sign-in">Sign In</Link>
      ) : (
        <div onClick={handleLogout} className="btn btn-link">
          Logout
        </div>
      )}
      {isLogged && (
        <Link to="/my-profile" className="nav-item">
          Restaurant Profile
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
