import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <Link to="/">Home</Link>
    {" - "}
    <Link to="/about">About</Link>
    {" - "}
    <Link to="/contact">Contact Us</Link>
  </div>
);

export default Navigation;
