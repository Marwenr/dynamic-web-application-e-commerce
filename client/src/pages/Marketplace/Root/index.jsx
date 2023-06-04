import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css"
import withGuardAdmin from "../../../util/WithGuardAdmin"

const Root = () => {
  const { container } = styles
  return (
    <div className={container}>
      <Outlet />
    </div>
  );
};

export default withGuardAdmin(Root) ;
