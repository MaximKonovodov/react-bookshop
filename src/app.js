import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./pages";

import Header from "./ui/header.js";


function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(false);

  // if (!ready) {
  //   return <Loader />
  // }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Route>
        <Header />
        {/* { isAuthenticated && <Navbar /> } */}
        <div className="container">
          {routes}
        </div>
      </Route>
    </AuthContext.Provider >
  );
}

export default App;