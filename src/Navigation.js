import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div id="navigation">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/settings">Settings</Link>
    <Link to="/login">Login</Link>
    <div id="launchpad"></div> 
  </div>
);

export default Navigation;
