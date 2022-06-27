import React from "react";
import ProfilePicture from "./profilepicture.png";
import "./imageContainer.css";

function ImageContainer() {
  return (
    <>
      <div className="image__text__container">
        <div className="image__container">
          <div className="image">
            <img className="image1" src={ProfilePicture} />
          </div>
        </div>
        <div className="text__container">
          <div className="heading__name">Hi,I'm Shailesh</div>
          <div className="shailesh__description">
            <p>I built Applications.</p>
            <p>
              I am a web-developer,skilled in designing responsive <br /> and scalable
              web-applications .
            </p>
            <p>I write blogs around web-technologies.</p>
          </div>
          <div className="button__container">
            <button className="chat__button">LET'S  CHAT</button>
            <button className="about__button">ABOUT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageContainer;
