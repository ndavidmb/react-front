import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthGuard } from "../components/pages/AuthGuard";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={AuthGuard} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};
