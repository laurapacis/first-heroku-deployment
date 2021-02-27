import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from "./components/Login"
import { Signup } from "./components/Signup"

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};