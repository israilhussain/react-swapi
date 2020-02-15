import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginPage } from "../components/Login/LoginPage";
import PlanetSearch from "../components/Planet/PlanetSearch";
import { PrivateRoute } from "../components/PrivateRoute";

function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/search" component={PlanetSearch} />
        <Route path="/">
          <Redirect to="/login" />
          <Route exaact path="/login" component={LoginPage} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
