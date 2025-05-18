import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SelectedCityProvider } from "./context/SelectedCityContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectedCityProvider>
      <App />
    </SelectedCityProvider>
  </React.StrictMode>
);
