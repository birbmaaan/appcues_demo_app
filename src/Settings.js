import React from "react";
import EventLog from "./appcues_components/EventLog";
import ContentTrigger from "./appcues_components/ContentTrigger";

const Settings = () => {
  return (
    <div>
      <h1>Change your app's settings here</h1>
      <p>Password</p>
      <ContentTrigger />
      <EventLog/>
    </div>
  );
};

export default Settings;