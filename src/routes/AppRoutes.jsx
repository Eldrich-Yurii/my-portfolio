import { Routes, Route } from "react-router";
import React from "react";
import LandingPage from "../pages/landingPage/LandingPage";
import Cenro from "../pages/projects/cenro/Cenro";
import SimplyBamboo from "../pages/projects/simplyBamboo/SimplyBamboo"
import Weatheria from "../pages/projects/weatheria/Weatheria"
import NeighborsChef from "../pages/projects/neighborsChef/neighborsChef"

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cenro" element={<Cenro />} />
        <Route path="/simply-bamboo" element={<SimplyBamboo />} />
        <Route path="/weatheria" element={<Weatheria />} />
        <Route path="/neighbors-chef" element={<NeighborsChef />} />
      </Routes>
    </>
  );
}
