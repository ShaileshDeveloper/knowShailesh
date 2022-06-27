import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImageContainer from "../components/imageContainer";
function Home() {
  return (
    <div>
      <Navbar />
      <ImageContainer />
    </div>
  );
}

export default Home;
