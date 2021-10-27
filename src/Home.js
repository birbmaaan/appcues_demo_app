import React from "react";
import ContentTrigger from "./appcues_components/ContentTrigger";
import EventLog from "./appcues_components/EventLog";

const Home = () => {
  return (
    <div>
      <h1>Welcome to this feature-rich test application.</h1>
      <p>Photo gallery</p>
      <ContentTrigger/>
      <EventLog/>

    </div>
  );
};

export default Home;


