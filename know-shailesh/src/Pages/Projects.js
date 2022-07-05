import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import "./projects.css";
import projectData from "./projectData";
import Footer from "../components/Footer";
import {UseTheme} from "../utils/context"
function Projects() {
  const {darkMode} = UseTheme()
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" ,backgroundColor:darkMode ? "black" :"" }}>
        <Navbar />
        <div
          style={{
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor:darkMode ? "black" :""
          }}
          className="card__container"
        >
          {projectData.reverse().map((item) => (
            <>
              <Card item={item} blogs={false} />
            </>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
