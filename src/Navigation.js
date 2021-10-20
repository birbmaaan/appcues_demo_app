import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <div iid="left_nav">
      <Link to="/">Home</Link>
      {" - "}
      <Link to="/about">About</Link>
      {" - "}
      <Link to="/contact">Contact Us</Link>
    </div>
    <div id="right_nav">
      <p>Settings</p>
    </div>
  </div>
);

export default Navigation;
