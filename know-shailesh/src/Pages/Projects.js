import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import "./projects.css";
import projectData from "./projectData";
import Footer from "../components/Footer";
function Projects() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div
          style={{
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="card__container"
        >
          {projectData.reverse().map((item) => (
            <>
              <Card item={item} />
            </>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
