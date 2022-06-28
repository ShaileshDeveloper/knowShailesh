import React from "react";
import "./AboutMe.css";
import Image1 from "./image1.svg";
import Image2 from "./image2.svg";
import Image3 from "./image3.svg";
import Form from "./form";

function AboutMe() {
  return (
    <>
      <div className="about__me__details">
        <div className="about__me__text__container">
          <div className="about__me__text">
            <p className="heading__text__about">A bit about me</p>
            <p>
              I am a full-stack developer , who loves to build great user
              interfaces <br /> and built scalable applications. I write blogs
              around web-techno <br />logies  and productivity .
            </p>
            <p>
              Most of the time of my day goes in exploring new technologies and
              <br /> tinkering around new project ideas.
            </p>
            <p>
              The current technologies I work with mostly are React, Redux for
              <br /> Frontend , Node.js, Express.js for Backend and MongoDB for  <br />
              managing Database .
            </p>
          </div>
        </div>
        <div className="about__me__images__container">
          <img className="vector__image1" src={Image1} />
          <img className="vector__image2" src={Image2} />
          <img className="vector__image3" src={Image3} />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
