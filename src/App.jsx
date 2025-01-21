import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import { SpinLoader } from "./Components";

import Routing from "./Routes/Routing";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen bg-primary">
      {loading ? (
        <SpinLoader /> // Render loading indicator if loading is true
      ) : (
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
