import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImageContainer from "../components/imageContainer";
import AboutMe from "../components/AboutMe";
import Form from "../components/form";
import Footer from "../components/Footer";
import "./home.css"
function Home() {
  return (
    <div className="home__page__container">
      <Navbar />
      <ImageContainer />
      <AboutMe />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
