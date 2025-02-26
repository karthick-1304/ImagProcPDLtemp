import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadCertificate from "./components/UploadCertificate";
import TutorPage from "./components/TutorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadCertificate />} />
        <Route path="/TutorPage" element={<TutorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
