import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar({ isLogged, setIsLoggedToFalse, ...props }) {
  console.log(props)
  const handleLogout = () => {
    localStorage.setItem("jwtToken", "");
    setIsLoggedToFalse();
    props.history.push('/');
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
      {!isLogged && <Link to="/create-account">Create Account</Link>}
      {!isLogged ? (
        <Link to="/sign-in">Sign In</Link>
      ) : (
        // <div onClick={handleLogout} className="btn btn-link">
        <div onClick={() => handleLogout()} className="btn btn-link">
          Logout
        </div>
      )}
      {isLogged && (
        <Link to="/restaurant-profile" className="nav-item">
          Restaurant Profile
        </Link>
      )}
    </nav>
  );
}

export default withRouter(Navbar);
