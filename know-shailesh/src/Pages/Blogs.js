import React from "react";
import "./blogs.css";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import blogsData from "./blogsData";
import {UseTheme} from "../utils/context"
import Footer from "../components/Footer";

function Blogs() {
  const {darkMode} = UseTheme()

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column",backgroundColor:darkMode ? "black" :"" }}>

      <Navbar />
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor:darkMode ? "black" :"",
        }}
        className="card__container"
      >
        {blogsData.map((item) => (
          <>
            <Card item={item} blogs={true} />
          </>
        ))}
      </div>
      <Footer />
      </div>
    </>
  );
}

export default Blogs;
