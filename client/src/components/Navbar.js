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
      {/* <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Restaurants
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Login
              </a>
              <a class="dropdown-item" href="#">
                Create Account
              </a>
            </div>
          </li>
        </ul>
      </div> */}

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
