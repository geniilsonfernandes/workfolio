import React from "react";
import {  Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";

import HomePage from "./pages/HomePage/HomePage";

import ProjectPage from "./pages/ProjectPage/ProjectPage";

const router = () => {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="projeto/:id" element={<ProjectPage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
};

export default router;
