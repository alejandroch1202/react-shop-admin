import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
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
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: access_token } = await axios.post(
      endpoints.auth.login,
      {
        email,
        password,
      },
      options
    );
    if (access_token) {
      const token = access_token.access_token;
      Cookie.set('token', token, { expires: 5 });
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await axios.get(endpoints.auth.profile);
      setUser(user);
    }
  };

  return {
    user,
    signIn,
  };
}
