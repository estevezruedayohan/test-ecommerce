import React, {useState, useContext, createContext} from "react";
import Cookie from 'js-cookie';
import Axios from 'axios';
import endPoints from '@services/api/';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth(){
  const [user, setUser] = useState(null);

  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  }

  const signIn = async (email, password) => {
    const { data: access_token }  = await Axios.post(endPoints.auth.login, { email, password }, options);
    if(access_token){
      Cookie.set('token', access_token.access_token, { expires: 5 })
    }
  };

  return {
    user,
    signIn,
  };
};

export function ProviderAuth({ children }){
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
};