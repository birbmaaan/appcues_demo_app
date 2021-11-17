import React from "react";
import { BrowserRouter} from "react-router-dom";
import { log_events } from "./appcues_components/EventLog";

import AppcuesRouter from "./Appcues";


const App = () => {

  window.Appcues.identify("testUser", {
    role: "tester",
  })

  window.Appcues.on("all", function(e, a) {
    console.log(e);
    console.log(a);

    log_events(e, a);
  })

  return (
    <BrowserRouter>
      <AppcuesRouter />
    </BrowserRouter>
  )
}

export default App;
