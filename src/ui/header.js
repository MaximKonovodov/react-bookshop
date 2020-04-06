import React from 'react';
import logo from '.././media/logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logo" src={logo} alt="Logo" />
      </header>
    )
  }
}