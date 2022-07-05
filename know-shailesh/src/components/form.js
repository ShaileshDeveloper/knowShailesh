import React from "react";
import "./form.css";
import EmailIcon from "./comment-alt.svg";
function Form() {
  return (
    <>
      <div className="form__container__section">
        <div className="form__container">
          <div>
            <div className="hire__text">LOOKING TO HIRE .</div>
            <div className="email__text__container">
              <a
                className="email__link"
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shailesh.dev296@gmail.com"
                target="_blank"
              >
                Let's Connect
              </a>
              <img className="icon__email" src={EmailIcon} />
            </div>
            <div style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center",
              padding:"0px 10px"
            }}>
              <div className="phone__number">8095117793</div>
              <div className="email__id">shailesh.dev296@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
