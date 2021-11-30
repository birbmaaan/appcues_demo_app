import React from "react";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const About = () => {
  return (
    <div className="app-content">
      <h1>About Us</h1>
      <p>This is a simple demo app for testing Appcues.</p>
      <p>Check out <a href="https://github.com/birbmaaan/appcues_demo_app">the Github repo</a> for directions on how to set up your own.</p>
      <p>The Appcues Toolbox on the right gives you some helpful tools for testing</p>
      <ol>Steps for testing:
        <li>make a flow</li>
        <li>test it out</li>
        <li>???</li>
        <li>profit</li>
      </ol>
    </div>
  );
};

export default About;
