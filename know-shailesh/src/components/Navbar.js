import React from "react";
import Logo from "../Shailesh_logo.png";
import "./Navbar.css"
function Navbar() {
  return (
    <>
      <div className="navbar__container">
        <div className="logo__container">
          Shailesh Pandey
        </div>
        <div className="nav__list__items">
          <div className="home__container">Home</div>
          <div className="home__container">About</div>
          <div className="home__container">Settings</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
