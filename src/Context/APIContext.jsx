import React, { createContext, useContext, useEffect, useState } from "react";
import axiosService from "../Services/api";

const APIContext = createContext();

export const GloablDataProvider = ({ children }) => {
  // const [apiGPTypeData, setApiGPTypeData] = useState({});
  const [apiData, setApiData] = useState({
    apiGPTypeData: {},
    sidebarData: {},
    sidebarDatas: {},

    // Add more properties for additional API data if needed
  });


  const fetchGlobalData = async () => {
    try {
      const gpTypeResponse = await axiosService.get("api/GpType");
      const sidebarResponse = await axiosService.get("api/menu/sidebarmenu");
      setApiData({
        apiGPTypeData: gpTypeResponse.gpTypeCollection,
        sidebarData: sidebarResponse,
        sidebarDatas: sidebarResponse,
        // Add more properties for additional API data if needed
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch the data initially
  useEffect(() => {
    fetchGlobalData();
  }, []);

  return (
    <APIContext.Provider value={{ ...apiData, fetchGlobalData }}>
      {children}
    </APIContext.Provider>
  );
};

export const GlobalAPIContext = () => {
  return useContext(APIContext);
};
