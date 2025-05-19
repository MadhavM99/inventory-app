import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SelectedCityProvider } from "./context/SelectedCityContext";
import { SelectedStackProvider } from "./context/SelectedStackContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectedStackProvider>
      <SelectedCityProvider>
        <App />
      </SelectedCityProvider>
    </SelectedStackProvider>
  </React.StrictMode>
);
