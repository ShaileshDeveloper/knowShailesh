import React from "react";
import "./Footer.css";
import Github from "./github.png";
import Twitter from "./twitter.png";
import Linkedin from "./linkedin.png";
import Hashnode from "./hashnode.png";
import Rectangle from "./reactangle.png";
import { NavLink, Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="">
          <div className="footer__name__container">
            <img className="rectangle" src={Rectangle} />
            <div className="footer__name"> Shailesh Pandey</div>
          </div>

          <div className="footer__rights">
            @2022 Shailesh Pandey. All Rights Reserved{" "}
          </div>
          <div className="icons__footer">
            <a
              href="
            https://www.linkedin.com/in/shailesh-pandey-980448201/
            "
              target="blank"
            >
              <img className="icons" src={Linkedin}></img>
            </a>
            <a href="https://twitter.com/theshailesh_" target="blank">
              <img className="icons" src={Twitter}></img>
            </a>

            <a
              href="https://github.com/ShaileshDeveloper?tab=repositories"
              target="blank"
            >
              <img className="icons" src={Github}></img>
            </a>
            <a href="https://shailesh-blogs.hashnode.dev/" target="blank">
              <img className="icons" src={Hashnode}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
