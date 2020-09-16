import { useState, useCallback, useEffect } from 'react';

import { setItem, getItem, cleanStorage } from '../utils/localStorage';

const TOKEN = 'TOKEN';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);

  const login = useCallback((jwtToken) => {
    setToken(jwtToken);
    setItem(TOKEN, jwtToken);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    cleanStorage(TOKEN);
  }, []);

  useEffect(() => {
    const token = getItem(TOKEN);

    if (token) {
      login(token);
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, ready };
};
