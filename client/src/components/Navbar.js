import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../pages/logo.jpg"; // How get image to load

function Navbar({ isLogged, setIsLoggedToFalse, ...props }) {
  console.log(props);
  const handleLogout = () => {
    localStorage.setItem("jwtToken", "");
    setIsLoggedToFalse();
    props.history.push("/");
  };

  const toggleOpen = () => setDropDown(!dropDown);

  const [dropDown, setDropDown] = useState(false);
  const menuClass = `dropdown-menu${dropDown ? " show" : ""}`;
  return (
    <nav className="navbar d-flex align-items-stretch justify-content-between bg-info">
      <div className="logo text-white align-middle d-flex justify-content-start">
        <img
          alt=""
          src={logo}
          style={({ width: "30px" }, { height: "30px" })}
          className="d-inline-block align-middle"
        />{" "}
        <div className="p-2">Restaurant Pick-up</div>
      </div>

      <div className="home text-white p-2">
        <Link to="/" className="text-white align-middle">
          Home
        </Link>
      </div>

      <div className="forRestaurant nav-item dropdown" onClick={toggleOpen}>
        <a
          className="nav-link dropdown-toggle text-white align-middle"
          href="#"
          id="dropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={dropDown}
        >
          Update Restaurant Information
        </a>
        <div className={menuClass} aria-labelledby="dropdown">
          {!isLogged && (
            <Link to="/create-account" className="dropdown-item">
              Create Account
            </Link>
          )}
          {!isLogged ? (
            <Link to="/sign-in" className="dropdown-item">
              Sign In
            </Link>
          ) : (
            // <div onClick={handleLogout} className="btn btn-link">
            <div onClick={() => handleLogout()} className="btn btn-link">
              Logout
            </div>
          )}
          {isLogged && (
            <Link to="/restaurant-profile" className="dropdown-item">
              Restaurant Profile
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
