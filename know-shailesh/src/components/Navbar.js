import React from "react";
import Rectangle from "./reactangle.png";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar__container">
        <div className="logo__container">
          <img className="rectangle__icon" src={Rectangle}/>
          <div>
          Shailesh Pandey
          </div>
        </div>
        <div className="nav__list__items">
          <div className="home__container">HOME</div>
          
          <div className="home__container">BLOGS</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;