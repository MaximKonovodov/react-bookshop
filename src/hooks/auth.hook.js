import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState(null);

  const login = useCallback((jwtToken, id, email) => {
    setToken(jwtToken);
    setEmail(email);
    localStorage.setItem(
      storageName,
      JSON.stringify({
        email: email,
        token: jwtToken,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.email);
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, email, ready };
};
