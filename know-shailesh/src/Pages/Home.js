import React from "react";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <NavLink to ="/about">
        <button>Navigate to about sita</button>
      </NavLink>
    </div>
  );
}

export default Home;
