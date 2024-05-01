import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Contact from "./component/pages/Contact";

const MainRoutes = () => {
  return (
    <Routes basename={"/liv-properties"}>
      <Route path="/liv-properties" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      {/* Add a 404 page for routes that don't match */}
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  );
};

export default MainRoutes;