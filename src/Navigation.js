import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <div id="left_nav">
      <Link to="/">Home</Link>
      {" - "}
      <Link to="/about">About</Link>
      {" - "}
      <Link to="/contact">Contact Us</Link>
    </div>
    <div id="right_nav">
      <Link to="/settings">Settings</Link>
      {" - "}
      <Link to="/login">Login</Link>
    </div>
  </div>
);

export default Navigation;
