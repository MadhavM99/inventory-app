// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      {/* Add this wrapper */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details/:city" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
