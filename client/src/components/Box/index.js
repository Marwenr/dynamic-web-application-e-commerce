import React from "react";
import styles from "./styles.module.css";

const Box = ({ children }) => {
  const { box } = styles;
  return <div className={box}>{children}</div>;
};

export default Box;
