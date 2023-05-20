import React from "react";
import styles from "./styles.module.css";

const Brand = () => {
  const { brand, title, slogan } = styles;
  return (
    <div className={brand}>
      <h1 className={title}>Brand Title</h1>
      <p className={slogan}>
        suspendisse potenti nullam ac tortor vitae purus faucibus ornare
        suspendisse.
      </p>
    </div>
  );
};

export default Brand;
