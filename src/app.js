import React from "react";
import { Route } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./pages";

import Header from "./ui/header.js";

function App() {
  const { token, login, logout, userId, email, ready } = useAuth();
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
        userId,
        isAuthenticated,
      }}
    >
      <Route>
        {isAuthenticated && <Header />}
        <div className="container">{routes}</div>
      </Route>
    </AuthContext.Provider>
  );
}

export default App;
