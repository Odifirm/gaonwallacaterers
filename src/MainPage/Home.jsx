import React from "react";
import { Outlet } from "react-router-dom";

import { ContactWidget, Footer, Navbar, Sidenavbar } from "../Components";

import { useStateContext } from "../Context/ContextProvider";

const Home = () => {
  const { activeSidebar, activeProfile, setActiveProfile } = useStateContext();

  const handletoggleProfile = () => {
    setActiveProfile(!activeProfile);
  };

  return (
    <div className="bg-primary relative">
      <ContactWidget />
      <Sidenavbar />
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
