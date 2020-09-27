import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';

export default (
  <Router>
    <Switch>
      <Route exact path="/" />
      <Route path="/about" />
      <Route path={"/our-work"} />
      <Route path={"/contact-us"} />
    </Switch>
  </Router>
)
