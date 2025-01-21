import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./Context/ContextProvider";
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ContextProvider>
);
