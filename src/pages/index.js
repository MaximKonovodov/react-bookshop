import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Bookcase from './Bookcase/Bookcase';
import BookPage from './Book/BookPage';
import Profile from './Profile/Profile';
import Auth from './Auth/Auth';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path='/books' component={Bookcase} />
        <Route path='/book/:id' component={BookPage} />
        <Route path='/profile' component={Profile} />
        <Redirect to='/profile' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/auth' exact>
        <Auth />
      </Route>
      <Redirect to='/auth' />
    </Switch>
  );
};
