import React from "react";
import styles from "./styles.module.css";

const CategoryShapeOne = ({ el, onClick }) => {
  const { container } = styles;
  return (
    <div className={container} onClick={onClick}>
      {el.name}
    </div>
  );
};

export default CategoryShapeOne;
