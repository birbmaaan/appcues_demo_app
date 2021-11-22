import React from "react";
import { Link } from "react-router-dom";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the #navigation div)
*/

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
