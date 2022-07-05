import React from "react";
import ProfilePicture from "./profilepicture.png";
import "./imageContainer.css";
import { NavLink } from "react-router-dom";

function ImageContainer() {
  return (
    <>
      <div className="image__text__container">
        <div className="image__container">
          <div className="image"></div>
          <img className="image1" src={ProfilePicture} />
        </div>
        <div className="text__container">
          <div className="heading__name">
            Hey There <br className="only-phone" /> I'm Shailesh
          </div>
          <div className="shailesh__description">
            <p className="heading__subtext">
              I build beautiful, scalable, <br className="only-phone" /> and
              high performance
              <br /> full-stack applications.
            </p>
            <p className="only-desktop subtext">
              I am specialized in creating and designing sleek and <br />{" "}
              premium user interfaces with help of React . 
            </p>
            <p className="only-desktop subtext">
              Read my blogs around web-technologies.
            </p>
          </div>
          <div className="button__container">
            <a
              style={{ textDecoration: "none" }}
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shailesh.dev296@gmail.com"
              target="_blank"
            >
              <button className="chat__button">LET'S CHAT</button>
            </a>
            <NavLink style={{ textDecoration: "none" }} to="/projects">
              <button className="about__button">SEE PROJECTS</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageContainer;
