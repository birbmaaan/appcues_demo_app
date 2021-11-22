import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Login from "./Login";
import Settings from "./Settings";
import Toolbar from "./appcues_components/Toolbar";

/* 
This component is wrapped around all the path changes in the app, which then
allows Appcues.page to be called every time the path changes. If you want to add any 
new components to the app, you'll want to include them as a <Route> as seen below.
*/

const AppcuesRouter = () => {
  const location = useLocation(); // installation using React hooks

  useEffect(() => {
    window.Appcues.page();
  }, [location]);

  return (
    <div id="main-app">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/settings" component={Settings} />
      </Switch>
      <Toolbar />
    </div>
  )
};

export default AppcuesRouter; // This needs to be wrapped by an additional router to function properly. In this app, this is done in App.js