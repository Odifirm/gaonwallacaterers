// AuthContext.js
import React from "react";
import { createContext, useContext, useState } from "react";
import notificationService from "../Services/notificationService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken") || null
  );
  const [authUser, setauthUser] = useState({
    userName: localStorage.getItem("UserName"),
    userId: localStorage.getItem("UserId"),
  });

  const login = (token, username, userId) => {
    setAuthToken(token);
    setauthUser({
      userName: username,
      userId: userId,
    });
    localStorage.setItem("authToken", token);
    localStorage.setItem("UserName", username.toUpperCase());
    localStorage.setItem("UserId", userId);
    isUser();
  };

  const logout = () => {
    notificationService.error("User logout successfully..");
    localStorage.removeItem("UserName");
    localStorage.removeItem("authToken");
    localStorage.removeItem("UserId");
  };

  const isAuthenticated = () => {
    return !!authToken;
  };
  const isUser = () => {
    return authUser;
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated, isUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
