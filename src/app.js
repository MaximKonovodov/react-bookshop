import React from 'react';
import { Route } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './pages';

import Header from './ui/header.js';

function App() {
  const { login, logout, token } = useAuth();
  const isAuthenticated = !!token;
  // true;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated,
      }}
    >
      <Route>
        {isAuthenticated && <Header />}
        {routes}
      </Route>
    </AuthContext.Provider>
  );
}

export default App;
