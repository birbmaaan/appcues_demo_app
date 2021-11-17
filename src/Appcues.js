import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Login from "./Login";
import Settings from "./Settings";
import Toolbar from "./appcues_components/Toolbar";


const AppcuesRouter = () => {
  const location = useLocation();

  useEffect(() => {
    window.Appcues.page();
  }, [location]);

  return (
    <div>
      <Navigation />
      <div id="launchpad"></div> 
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

export default AppcuesRouter;