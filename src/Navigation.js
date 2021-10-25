import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <div id="left_nav">
      <Link to="/basic_demo/">Home</Link>
      {" - "}
      <Link to="/basic_demo/about">About</Link>
      {" - "}
      <Link to="/basic_demo/contact">Contact Us</Link>
    </div>
    <div id="right_nav">
      <Link to="/basic_demo/settings">Settings</Link>
      {" - "}
      <Link to="/basic_demo/login">Login</Link>
    </div>
  </div>
);

export default Navigation;
