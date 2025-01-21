import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Home from "../MainPage/Home";
import { AccessDenied, Contact, About } from "../Components";
import OutletContent from "../MainPage/OutletContent";

// import { useAuth } from "../Context/authContext";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const location = useLocation();
  const permission = "ShowMenu";
  const path = location.pathname;
  const { isAuthenticated } = useAuth(); // Access isAuthenticated from AuthProvider
  const navigate = useNavigate();
  // const isAllowed = checkAccess("ShowMenu", path);
  // console.log(isAllowed);
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
    // const checkPermission = async () => {
    //   let isAllowed = await checkAccess(permission, path);
    //   // console.log(isAllowed);
    //   if (!isAuthenticated()) {
    //     navigate("/login");
    //   } else if (!isAllowed) {
    //     navigate("/access"); // or handle as needed, e.g., navigate("/not-allowed")
    //   }
    // };
    // checkPermission(); // If you want to check rolebase route then enable it
  }, [permission, path, isAuthenticated, navigate]);

  return isAuthenticated ? <Component /> : null;
};

const Routing = () => {
  return (
    <Routes>
      {/* Dashboard  */}
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/SearchBar" element={<SearchBar />} /> */}

      <Route element={<Home />}>
        {/* HRMS  */}
        <Route path="/" element={<OutletContent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/" element={<ProtectedRoute Component={Dashboard} />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute Component={Dashboard} />}
        />

        <Route
          path="/hrms/dashboard"
          element={<ProtectedRoute Component={Dashboard} />}
        />
        <Route path="/loader" element={<SpinLoader />} /> */}

        <Route path="*" element={<AccessDenied />} />
      </Route>
    </Routes>
  );
};

export default Routing;
