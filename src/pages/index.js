import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Bookcase from './Bookcase/Bookcase';
import BookPage from './Book/BookPage';
// import Profile from './Profile/Profile';
// import Auth from './Auth/Auth';
import ProfileContainer from '../containers/ProfileContainer';
import AuthContainer from '../containers/AuthContainer';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path='/books' component={Bookcase} />
        <Route path='/book/:id' component={BookPage} />
        <Route path='/profile' component={ProfileContainer} />
        <Redirect to='/profile' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/auth' exact>
        <AuthContainer />
      </Route>
      <Redirect to='/auth' />
    </Switch>
  );
};
