import React from "react";
import AppcuesIdentifier from "./appcues_components/Identifier";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Login = () => {
  return (
    <div className="app-content">
      <h1>Login your user here</h1>
      <AppcuesIdentifier/>
    </div>
  );
};

export default Login;