import React from 'react';
import Header from './ui/header.js'
import Bookcase from './pages/bookcase.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Bookcase />
      </div>
    );
  }
}