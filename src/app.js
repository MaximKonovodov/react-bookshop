import React from 'react';
import { Route } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './pages';

import Header from './ui/header.js';

function App() {
  const { login, logout, token, email, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  // if (!ready) {
  //   return <Loader />
  // }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        email,
        isAuthenticated,
      }}
    >
      <Route>
        {isAuthenticated && <Header />}
        <div className='container'>{routes}</div>
      </Route>
    </AuthContext.Provider>
  );
}

export default App;
