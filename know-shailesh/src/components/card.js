import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import {UseTheme} from "../utils/context"



function Card({ item, blogs  }) {
 const {darkMode} = UseTheme()
  return (
    <>
      <div className="card">
        {blogs === false ? (
          <>
            <div className="card__heading"  >
              {item.id}. {item.projectName}
            </div>

            <div className="card__desc" style={{
              color:darkMode ? "#767579" :""
            }}>{item.projectDescription}</div>
            <div className="buttons__container">
              <a href={item.previewLink}>
                <button className="button__items">Preview </button>
              </a>
              <a href={item.githubLink}>
                <button className="button__items">Github link</button>
              </a>
            </div>
          </>
        ) : (
          <>
          <div className="card__heading" >
            {item.id}. {item.blogTitle}
          </div>

          <div className="card__desc" style={{
              color:darkMode ? "white" :""
            }}>{item.blogDescription}</div>
          <div className="buttons__container">
            <a href={item.previewLink}>
              <button className="button__items">Preview </button>
            </a>
            
          </div>
        </>
        )}
      </div>
    </>
  );
}

export default Card;
