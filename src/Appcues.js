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
      <Switch>
        <Route exact path="/basic_demo/" component={Home} />
        <Route path="/basic_demo/about" component={About} />
        <Route path="/basic_demo/contact" component={Contact} />
        <Route path="/basic_demo/login" component={Login} />
        <Route path="/basic_demo/settings" component={Settings} />
      </Switch>
      <Toolbar />
      <div id="appcues_launchpad"></div> 
    </div>
  )
};

export default AppcuesRouter;