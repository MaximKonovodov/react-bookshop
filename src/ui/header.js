import React from 'react';
import { Link } from 'react-router-dom'

import logo from '.././media/logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <Link to={'/books'}>
              <img className="logo" src={logo} alt="Logo" />
            </Link>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to='/books'>
                    <span className="nav-link">Каталог</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/profile'>
                    <span className="nav-link">Профиль</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="mt-2 mt-md-0 profile">
              <svg className="bd-placeholder-img mr-3 align-self-center" width="70" height="70"
                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                role="img" aria-label="Placeholder: 64x64"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="18%" y="50%" fill="#dee2e6" dy=".3em">64x64</text>
              </svg>
            </div> */}
          </div>
        </nav>

      </header>
    )
  }
}