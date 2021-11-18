import React from "react";
import ContentTrigger from "./appcues_components/ContentTrigger";
// import EventLog from "./appcues_components/EventLog";

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

      <ContentTrigger/>
      {/* <EventLog/> */}
    </div>
  );
};

export default About;
