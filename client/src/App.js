import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import NotificationState from "./context/NotificationState";
import Notification from "./components/Notification"

export const App = () => {
  return (
    <NotificationState>
      <Notification />
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
    </NotificationState>
  );
};