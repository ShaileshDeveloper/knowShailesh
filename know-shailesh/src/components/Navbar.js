import React, { useState } from "react";
import Rectangle from "./reactangle.png";
import "./Navbar.css";
import Hamburger from "./hamburger.png";
import Cross from "./cross.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  let { pathname } = useLocation();
  let path = pathname.split("/")[1];
  return (
    <>
      <div className="navbar__container">
        <div className="logo__container">
          <img className="rectangle__icon" src={Rectangle} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Shailesh Pandey
          </div>
        </div>
        <div className="nav__list__items">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/"
          >
            <div
              className="home__container"
              style={{
                color: path === "" ? "#228be6" : "#767579",
                fontSize: path === "" ? "1.2vw" : "1.1vw",
              }}
            >
              HOME
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/projects">
            <div
              className="home__container"
              style={{
                color: path === "projects" ? "#228be6" : "#767579",
                fontSize: path === "projects" ? "1.2vw" : "1.1vw",
              }}
            >
              PROJECTS
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/blogs">
            <div
              className="home__container"
              style={{
                color: path === "blogs" ? "#228be6" : "#767579",
                fontSize: path === "blogs" ? "1.2vw" : "1.1vw",
              }}
            >
              BLOGS
            </div>
          </Link>
        </div>
        <div className="hamburger__icon" onClick={() => setClicked(true)}>
          <img src={Hamburger} alt="menu" />
        </div>
      </div>
      <div
        style={{
          transition: clicked ? "0.3s ease" : "0.3s ease",
          height: clicked ? "280px" : "0px",
          opacity: clicked ? "1" : "0",
          overflow: clicked ? "visible" : "hidden",
        }}
        className="mobile__navbar"
      >
        <div
          style={{
            position: "absolute",
            right: "15px",
            top: "10px",
          }}
          onClick={() => setClicked(false)}
        >
          <img style={{ width: "40px", height: "40px" }} src={Cross} alt="" />
        </div>
        <div>
          <div className="mobile__navbar__items">HOME</div>
          <div className="mobile__navbar__items">PROJECTS</div>
          <div className="mobile__navbar__items">BLOGS</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

// function Navbar() {
//   return (

//     <div>
//       <div class="navbar">
//         <div class="container nav-container">
//             <input class="checkbox" type="checkbox" name="" id="" />
//             <div class="hamburger-lines">
//               <span class="line line1"></span>
//               <span class="line line2"></span>
//               <span class="line line3"></span>
//             </div>
//
//           <div class="menu-items">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">about</a></li>
//             <li><a href="#">blogs</a></li>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Navbar
