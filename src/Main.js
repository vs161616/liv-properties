import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Component/Pages/Home";

const Main = () => {
  return (
    <>
      <Router basename={"/liv-properties"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
      </Router>
    </>
  );
};
export default Main;