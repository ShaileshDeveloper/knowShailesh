import React from "react";
import Rectangle from "./reactangle.png";
import "./Navbar.css";
import Hamburger from "./hamburger.png"
function Navbar() {
  return (
    <>
      <div className="navbar__container">
        <div className="logo__container">
          <img className="rectangle__icon" src={Rectangle}/>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          Shailesh Pandey
          </div>
        </div>
        <div className="nav__list__items">
          <div className="home__container">HOME</div>
          <div className="home__container">PROJECTS</div>
          <div className="home__container">BLOGS</div>
        </div>
        <div className="hamburger__icon">
              <img src={Hamburger} alt="menu"/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
