import React from "react";

const Settings = () => {
  return (
    <div>
      <h1>Change your app's settings here</h1>
      <p>Password</p>
      <select>
        <option selected value='Select one' disabled='disabled'>Select one</option>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
    </div>
  );
};

export default Settings;