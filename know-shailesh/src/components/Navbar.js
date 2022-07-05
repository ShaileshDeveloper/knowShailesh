import React, { useState } from "react";
import Rectangle from "./reactangle.png";
import "./Navbar.css";
import Hamburger from "./hamburger.png";
import Cross from "./cross.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UseTheme } from "../utils/context";
import LightMode from "./lightMode.png"
import DarkMode from "./darkMode.png"

function Navbar() {
  const [clicked, setClicked] = useState(false);
  let { pathname } = useLocation();
  let path = pathname.split("/")[1];
  const { darkMode, setDarkMode } = UseTheme();
  return (
    <>
      <div
        className={darkMode ? "navbar__container__dark" : "navbar__container"}
      >
        <div className={darkMode ? "logo__container__dark" : "logo__container"}>
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
              className={darkMode ? "home__container__dark" : "home__container"}
              style={{
                fontSize: path === "" ? "1.2vw" : "1.1vw",
                color:path === "" && darkMode === false ? "#228be6" : path === "" && darkMode ? "#228be6" :""
              }}
            >
              HOME
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/projects">
            <div
              className={darkMode ? "home__container__dark" : "home__container"}
              style={{
                fontSize: path === "projects" ? "1.2vw" : "1.1vw",
                color:path === "projects" && darkMode === false ? "#228be6" : path === "projects" && darkMode ? "#228be6" :""
              }}
            >
              PROJECTS
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/blogs">
            <div
              className={darkMode ? "home__container__dark" : "home__container"}
              style={{
                fontSize: path === "blogs" ? "1.2vw" : "1.1vw",
                color:path === "blogs" && darkMode === false ? "#228be6" : path === "blogs" && darkMode ? "#228be6" :""
              }}
            >
              BLOGS
            </div>
          </Link>
          <button
            style={{ position: "absolute", right: "20px" }}
            onClick={() => setDarkMode((value) => !value)}
            className="dark__mode__button"

          >
             <img style={{height:"28px",width:"auto"}} src={darkMode ? LightMode : DarkMode}/>
          </button>
        </div>

        <div className="hamburger__icon" onClick={() => setClicked(true)}>
          <img src={Hamburger} alt="menu" />
        </div>
      </div>
      <div
        style={{
          transition: clicked ? "0.3s ease" : "0.3s ease",
          height: clicked ? "270px" : "0px",
          opacity: clicked ? "1" : "0",
          overflow: clicked ? "visible" : "hidden",
          backgroundColor: darkMode ? "black" : "#f5f5f5",
          
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
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="mobile__navbar__items">HOME</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/projects">
            <div className="mobile__navbar__items">PROJECTS</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/blogs">
            <div className="mobile__navbar__items">BLOGS</div>
          </Link>
          <button
            style={{ position: "absolute", right: "20px" }}
            onClick={() => setDarkMode((value) => !value)}
            className="dark__mode__button"
          >
             <img style={{height:"28px",width:"auto"}} src={darkMode ? LightMode : DarkMode}/>
           
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
