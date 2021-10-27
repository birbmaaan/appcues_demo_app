import React from "react";
import ContentTrigger from "./appcues_components/ContentTrigger";
import EventLog from "./appcues_components/EventLog";
import AppcuesIdentifier from "./appcues_components/Identifier";


const Login = () => {
  return (
    <div>
      <h1>Login your user here</h1>
      <p>Login Info</p>
      <AppcuesIdentifier/>
      <ContentTrigger/>
      <EventLog/>
    </div>
  );
};

export default Login;