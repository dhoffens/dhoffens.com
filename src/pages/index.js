import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Me from "./Me";
import Projects from "./Projects";
import Work from "./Work";
import Education from "./Education";

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="dhoffens.github.io/">
          <Me user={user} />
        </Route>
        <Route path="dhoffens.github.io/projects">
          <Projects user={user} />
        </Route>
        <Route path="dhoffens.github.io/work">
          <Work user={user} />
        </Route>
        <Route path="dhoffens.github.io/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
