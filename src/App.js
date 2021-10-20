import React from "react";
import { BrowserRouter} from "react-router-dom";

import AppcuesRouter from "./Appcues";


const App = () => {

  window.Appcues.identify("testUser", {
    role: "tester",
  })

  return (
    <BrowserRouter>
      <AppcuesRouter />
    </BrowserRouter>
  )
}

export default App;
