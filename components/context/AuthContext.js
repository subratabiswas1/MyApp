import React, { createContext, useEffect, useState } from "react";
import {
  setUser,
  removeUser,
  getUser,
  removeInformation,
  getInformation,
} from "../AsyncStorage/AsyncStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dark, setDark] = useState(false);
  const [info, setInfo] = useState([]);

  const login = (user) => {
    setUserToken(user);
    setUser(user);
    setIsLoading(false);
  };
  const signup = (user) => {
    setUserToken(user);
    setUser(user);
    setInfo([]);
    removeInformation();
    setIsLoading(false);
  };
  const logout = () => {
    setUserToken(null);
    removeUser();
    removeInformation();
    setInfo([]);
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const currentUser = await getUser();
      const currInfo = await getInformation();
      const information = currInfo ? currInfo : [];
      setUserToken(currentUser);
      setInfo(information);
      setIsLoading(false);
    } catch (e) {}
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        dark,
        setDark,
        userToken,
        setUserToken,
        isLoading,
        setIsLoading,
        signup,
        login,
        logout,
        info,
        setInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
