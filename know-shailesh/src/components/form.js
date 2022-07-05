import React from "react";
import "./form.css";
import EmailIcon from "./comment-alt.svg";
import EmailIconWhite from "./whiteEmail.png"
import {UseTheme} from "../utils/context"
function Form() {
  const {darkMode} = UseTheme()
  return (
    <>
      <div className={darkMode ? "form__container__section__dark" : "form__container__section"}>
        <div className={darkMode ? "form__container__dark" : "form__container"}>
          <div>
            <div style={{color:darkMode? "#767579":""}} className="hire__text">LOOKING TO HIRE .</div>
            <div className="email__text__container">
              <a
                className="email__link"
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shailesh.dev296@gmail.com"
                target="_blank"
              >
                Let's Connect
              </a>
            {darkMode ?  <img className="icon__email__dark" src={EmailIconWhite} /> :  <img className="icon__email" src={EmailIcon} /> } 
            </div>
            <div style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center",
              padding:"0px 10px"
            }}>
              <div style={{color:darkMode? "white":""}} className="phone__number">8095117793</div>
              <div style={{color:darkMode? "white":""}} className="email__id">shailesh.dev296@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
