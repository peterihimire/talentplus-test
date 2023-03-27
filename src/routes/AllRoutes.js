import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/landing";
import { HomePage } from "../pages/home";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* LANDING LAYOUT */}
        <Route element={<LandingLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<h2>error 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
