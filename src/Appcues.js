import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";

const AppcuesRouter = () => {
    const location = useLocation();

    useEffect(() => {
      window.Appcues.page();
    }, [location]);


  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <div id="appcues_launchpad"></div> 
    </div>
  )
};

export default AppcuesRouter;