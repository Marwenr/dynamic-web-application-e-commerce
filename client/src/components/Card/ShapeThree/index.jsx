import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./styles.module.css";
import Box from "../../Box";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cartSlice";

const ShapeThree = ({ el }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCart = () => {
    const data = { ...el, qty: 1 };
    dispatch(addItem(data));
  };

  return (
    <div className="mt-3 container">
      <Box>
        <div className="d-flex p-3 gap-5">
          <Card style={{ width: "300px" }}>
            <Card.Img variant="top" src={el.image} />
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
                onClick={() => navigate(`/categories/${el.subcategory}`)}
              >
                {el.subcategory}
              </span>
            </p>
            <h3>{el.name}</h3>
            <p>Reference: {el.reference}</p>
            <p>Manufacturer: {el.manufacturer}</p>
            <p>Quantity: {el.quantity}</p>
            <p>Price: {el.price}</p>
            <Button onClick={addToCart}>Add to cart</Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ShapeThree;
