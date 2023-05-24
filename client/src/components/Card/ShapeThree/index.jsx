import React from "react";
import { Card } from "react-bootstrap";
import styles from "./styles.module.css";
import Box from "../../Box";
import { useNavigate } from "react-router-dom";

const ShapeThree = ({ el }) => {
  const image = require("../../../assets/1.png");
  const { container } = styles;
  const navigate = useNavigate();

  return (
    <div className="mt-3 container">
      <Box>
        <div className="d-flex p-3 gap-5">
          <Card style={{ width: "300px" }}>
            <Card.Img variant="top" src={image} />
          </Card>
          <div className="text-capitalize">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              {el.category}/
              <span
                className="text-decoration-underline"
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/categories/${el.subcategories}`)}
              >
                {el.subcategories}
              </span>
            </p>
            <h3>{el.name}</h3>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ShapeThree;
