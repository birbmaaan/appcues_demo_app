import React from "react";
import AppcuesIdentifier from "./appcues_components/Identifier";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const setTimestamp = () => { // sets user's signup date to current time;
  const currentTime = Date.now();
  window.localStorage.setItem("timestamp", currentTime);
  window.Appcues.identify(window.localStorage.currentUser, {
    signupDate: currentTime
  })
}

const setCustomTime = () => {

}

const Login = () => {
  return (
    <div className="app-content">
      <h1>Login your user here</h1>
      <p>Login Info</p>
      <AppcuesIdentifier/>
      <button onClick={setTimestamp}>Set Signup Date</button>
    </div>
  );
};

export default Login;