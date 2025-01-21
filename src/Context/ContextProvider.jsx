import React, { createContext, useContext, useEffect, useState } from "react";
import axiosService from "../Services/api";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [activeContactSection, setActiveContactionSection] = useState(false);
  const [height, setHeight] = useState(null);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const currentDateTime = new Date();
      const hour = currentDateTime.getHours();

      if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
      } else if (hour < 21) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }
    };
    updateGreeting(); // Set the initial greeting
    const intervalId = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);
  return (
    <StateContext.Provider
      value={{
        activeSidebar,
        setActiveSidebar,
        activeContactSection,
        setActiveContactionSection,
        height,
        setHeight,
        greeting,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
