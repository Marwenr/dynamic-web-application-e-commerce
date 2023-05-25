import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css"

const ItemShapeOne = ({ el }) => {
  const navigate = useNavigate()
  const { container } = styles

  return (
    <div onClick={() => navigate(el.name)} className={container}>
      <img src={el.image} alt="item" width="110px" height="110px" />
      <div className="text-center text-truncate" style={{ fontSize: "14px", marginTop: "4px", width: "110px", padding: "10px" }}>{el.name}</div>
    </div>
  );
};

export default ItemShapeOne;
