import { createContext, useContext } from 'react';

export const AuthContext = createContext({
    authToken: null,
    setAuthToken:null
});

export function useAuth() {
  return useContext(AuthContext);
}