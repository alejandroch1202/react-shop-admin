import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import endpoints from '@services/api';

const authContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const response = await fetch(endpoints.auth.login, {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (data.access_token) {
      const token = data.access_token;
      Cookie.set('token', token, { expires: 5 });
      const res = await fetch(endpoints.auth.profile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = await res.json();
      setUser(userData);
    } else {
      throw 'Login error';
    }
  };

  const logout = async () => {
    Cookie.remove('token');
    setUser(null);
    window.location.href = '/login';
  };

  return {
    user,
    signIn,
    logout,
  };
}
