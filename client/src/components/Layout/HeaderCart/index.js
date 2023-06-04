import React from "react";
import { BsCart } from "react-icons/bs";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const HeaderCart = () => {
  const navigate = useNavigate()
  const { container, icon, title } = styles
  return (
    <div className={container} onClick={() => navigate("cart")}>
      <BsCart className={icon}/>
      <p className={title}>Cart</p>
    </div>
  );
};

export default HeaderCart;
