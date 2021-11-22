import React from "react";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const About = () => {
  return (
    <div className="app-content">
      <h1>About Us</h1>
      <p>We are a great company!</p>
      <p>History of the company: humble beginnings</p>
      <p>Staff profile</p>
      <ol>Company Values
        <li>be yourself</li>
        <li>start company</li>
        <li>???</li>
        <li>profit</li>
      </ol>
    </div>
  );
};

export default About;
