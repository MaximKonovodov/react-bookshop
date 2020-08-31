import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Bookcase from "./Bookcase/index.js";
import BookPage from "./Book/index.js";
import Profile from "./Profile/index.js";

import { AuthPage } from "./Auth/AuthPage.js";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/books" component={Bookcase} />
        <Route path="/book/:id" component={BookPage} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/profile" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  );
};
