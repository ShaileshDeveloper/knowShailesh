import React from "react";
import "./blogs.css";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import blogsData from "./blogsData";
function Blogs() {
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
        {blogsData.map((item) => (
          <>
            <Card item={item} blogs={true} />
          </>
        ))}
      </div>
      </div>
    </>
  );
}

export default Blogs;
