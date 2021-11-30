import React from "react";

/*
  This component allows you to identify with any user ID you would like
*/

const identifyUser = () => {
  const newId = document.getElementById('input-id-field');

  window.localStorage.setItem("currentUser", newId.value); // sets new ID to persist across refresh
  window.Appcues.identify(newId.value); // identifies user with new value

  newId.value = ''; // resets text input field
}

export default function AppcuesIdentifier() {

    return (
        <div>
          <h2>Enter test user ID</h2>
            <input id="input-id-field" type="text"/>
            <button onClick={identifyUser}>Log me in</button>
        </div>
    )
}