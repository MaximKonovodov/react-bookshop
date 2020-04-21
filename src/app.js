import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";


import Header from './ui/header.js'
import Bookcase from './pages/bookcase.js'
import BookPage from './pages/BookPage.js'
import Profile from './pages/profile.js'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path='/books' component={Bookcase} />
          <Route path='/book/:id' component={BookPage} />
          <Route path='/profile' component={Profile} />
        </Switch>

      </div>
    );
  }
}