import React from "react";
import { BsCart } from "react-icons/bs";
import styles from "./styles.module.css";

const HeaderCart = () => {
  const { container, icon, title } = styles
  return (
    <div className={container}>
      <BsCart className={icon}/>
      <p className={title}>Cart</p>
    </div>
  );
};

export default HeaderCart;
