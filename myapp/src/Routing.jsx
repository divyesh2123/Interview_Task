import React from "react";
import { Routes,Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import { Login } from "./Login";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/dashboard" element={<DashBoard></DashBoard>} />
      </Routes>
    </>
  );
};

export default Routing;
