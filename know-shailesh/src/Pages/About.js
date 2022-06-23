import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <NavLink to="/">
        <button>Navigate to Home</button>
      </NavLink>
    </div>
  );
}

export default About;
