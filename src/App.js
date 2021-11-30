import React from "react";
import { BrowserRouter} from "react-router-dom";
import { log_events } from "./appcues_components/EventLog";
import AppcuesRouter from "./Appcues";

/*
The AppcuesRouter contains the Appcues.page call, as well as all the app's page
changes. It needs to be additionally wrapped in BrowserRouter to function properly.

This is also where the Appcues.identify call is made, as well as any event listeners
like Appcues.on so they will be called every time the app is loaded.
*/

const App = () => { 
  const user_id = window.localStorage.current_user || "testUser";

  const current_time = Date.now();

  window.Appcues.identify(user_id, { // feel free to add in any user properties here
    role: "tester",
    test_property: "some value",
    signup_date: current_time
  })

  window.Appcues.on("all", function(name, payload) {
    // console.log(name);     // uncomment these two lines if you'd like to
    // console.log(payload);  // log all events into the dev tools console

    log_events(name, payload); // adds events into the event log on the page
  })

  window.Appcues.loadLaunchpad("#launchpad", { // loads Launchpad on this element
    position: "right"
  })
  
  return ( 
    <BrowserRouter> 
      <AppcuesRouter /> 
    </BrowserRouter>
  )
}

export default App;
