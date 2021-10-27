import React from "react";
import ContentTrigger from "./appcues_components/ContentTrigger";
import EventLog from "./appcues_components/EventLog";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a great company!</p>
      <p>History of the company: humble beginnings</p>
      <p>Staff profile</p>
      <ul>Company Values
        <li>1. be yourself</li>
        <li>2. start company</li>
        <li>3. ???</li>
        <li>4. profit</li>
      </ul>

      <ContentTrigger/>
      <EventLog/>
    </div>
  );
};

export default About;
