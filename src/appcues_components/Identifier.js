import React from "react";

/*
  This component allows you to identify with any user ID you would like
*/


const identify_user = () => {
  const user_id = document.getElementById('input_id_field');
  window.Appcues.identify(user_id.value);
  user_id.value = '';
}

const AppcuesIdentifier = () => {

    return (
        <div>
          <h2>Enter test user ID</h2>
            <input id="input_id_field" type="text"/>
            <button onClick={identify_user}>Log me in</button>
        </div>
    )
}

export default AppcuesIdentifier;