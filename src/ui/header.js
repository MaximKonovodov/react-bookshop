import React from 'react';
import logo from '.././images/logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logo" src={logo} alt="Logo" />
      </header>
    )
  }
}