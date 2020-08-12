import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { AuthPage } from "../Auth/AuthPage.js";
// import AddBook from './addBook'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false    
    };
  }
   
  render() {
    if (this.state.isAuthenticated) {
      return (
        <Switch>
          {/* <Route path="/addBook" exact component={AddBook} /> */}
          {/* <Route path="/myBooks" exact component={MyBooks} /> */}
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path="/" exact component={AuthPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
