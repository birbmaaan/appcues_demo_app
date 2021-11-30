import React from "react";

const setTimestamp = () => { // sets user's signup date to current time;
  const currentTime = Date.now();
  window.localStorage.setItem("timestamp", currentTime);
  window.Appcues.identify(window.localStorage.currentUser, {
    signupDate: currentTime
  })
}

const setCustomTime = () => {
  const inputTime = document.getElementById("set-timestamp").value;
  const customTime = parseInt(inputTime);
  window.localStorage.setItem("timestamp", customTime);
  window.Appcues.identify(window.localStorage.currentUser, {
    signupDate: customTime
  })
}

const SetProperties = () => {
  return (
    <div className="property-setter">
      <p>If you'd like to set the user's signupDate property to current time, you can use this button:</p>
      <button onClick={setTimestamp}>Set New Signup Date</button>
      <p>If you'd like to set a custom signup date, enter below. Make sure you use a UNIX timestamp. 
        <br/>
        <a href="https://www.epochconverter.com/">Epoch Converter</a> can help you generate one.</p>
      <input id="set-timestamp" type="text"/>
      <button onClick={setCustomTime}>Set custom signup date</button>
    </div>
  )
}

export default SetProperties;