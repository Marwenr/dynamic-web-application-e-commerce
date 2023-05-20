import React from "react";
import { Card } from "react-bootstrap";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom"

const ShapeFive = ({ el, onClick }) => {
  const image = require("../../../assets/1.png");
  const { container, card } = styles;
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/${el.name}`)} style={{ cursor: "pointer" }} className={container}>
      <Card className={card} style={{ marginInline: "auto" }}>
        <Card.Img variant="top" src={image} />
      </Card>
      <div
        className="text-center text-truncate"
        style={{ width: "110px", fontSize: "14px", marginTop: "4px", marginInline: "auto" }}
      >
        {el.name}
      </div>
    </div>
  );
};

export default ShapeFive;
