import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
function ManagingRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/projects" exact element={<Projects />}></Route>
        <Route path="/blogs" exact element={<Blogs />}></Route>
      </Routes>
    </div>
  );
}

export default ManagingRoutes;
