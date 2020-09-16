import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

import logo from '.././media/logo.png';

const Header = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
        <div className='container-fluid'>
          <Link to={'/books'}>
            <img className='logo' src={logo} alt='Logo' />
          </Link>

          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/books'>
                  <span className='nav-link'>Каталог</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/profile'>
                  <span className='nav-link'>Профиль</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' onClick={logoutHandler}>
                  <span className='nav-link'>Выйти</span>
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
                <text x="19%" y="53%" fill="#dee2e6" dy=".3em">64x64</text>
              </svg>
            </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
