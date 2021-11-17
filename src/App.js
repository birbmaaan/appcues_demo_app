import React from "react";
import { BrowserRouter} from "react-router-dom";
import { log_events } from "./appcues_components/EventLog";

import AppcuesRouter from "./Appcues";


const App = () => {
  window.Appcues.identify("testUser", {
    role: "tester",
  })

  window.Appcues.on("all", function(name, payload) {
    console.log(name);
    console.log(payload);

    log_events(name, payload);
  })

  window.Appcues.loadLaunchpad("#launchpad")
  
  return (
    <BrowserRouter>
      <AppcuesRouter />
    </BrowserRouter>
  )
}

export default App;
