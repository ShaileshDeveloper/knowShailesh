import React from "react";
import "./form.css";
import EmailIcon from "./comment-alt.svg";
import Hiring from "./hire.jpg"
function Form() {
  return (
    <>
      <div className="form__container__section">
        <div className="form__container">
          <div>
            <p className="hire__text">LOOKING  TO HIRE .</p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
