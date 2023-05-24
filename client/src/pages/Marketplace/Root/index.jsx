import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css"

const Root = () => {
  const { container } = styles
  return (
    <div className={container}>
      <Outlet />
    </div>
  );
};

export default Root;
