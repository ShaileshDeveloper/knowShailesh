import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
function ManagingRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/projects" exact element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default ManagingRoutes;
