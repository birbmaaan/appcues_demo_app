import React from "react";
import ContentTrigger from "./appcues_components/ContentTrigger";
import EventLog from "./appcues_components/EventLog";
import Toolbar from "./appcues_components/Toolbar";

const Home = () => {
  return (
    <div>
      <h1>Welcome to this feature-rich test application.</h1>
      <p>Photo gallery</p>
      <ContentTrigger/>
      <EventLog/>

      <Toolbar/>
    </div>
  );
};

export default Home;


