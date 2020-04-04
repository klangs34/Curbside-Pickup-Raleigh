import React from "react";

//styling stuff here

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/restaurants">Restaurants</a>
    </nav>
  );
}

export default Navbar;
