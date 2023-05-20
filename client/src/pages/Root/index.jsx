import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Box from "../../components/Box"

const Root = () => {
  return (
    <div>
        <Header />
      <Outlet />
    </div>
  );
};

export default Root;
