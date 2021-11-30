import React from "react";

/*
  This component allows you to identify with any user ID you would like
*/

const identify_user = () => {
  
  const new_id = document.getElementById('input_id_field');
  window.localStorage.setItem("current_user", new_id.value);
  window.Appcues.identify(new_id.value);
  new_id.value = '';
  
}

export default function AppcuesIdentifier() {

  // const [current_user,  setUser] = useState('testUser');

  // useEffect(() => {
  //   setUser(JSON.parse(window.localStorage.getItem('current_user')));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('current_user', current_user);
  // }, [current_user]);


    return (
        <div>
          <h2>Enter test user ID</h2>
            <input id="input_id_field" type="text"/>
            <button onClick={identify_user}>Log me in</button>
        </div>
    )
}

// export default AppcuesIdentifier;