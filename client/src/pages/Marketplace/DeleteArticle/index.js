import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Box from "../../../components/Box";
import Return from "../../../components/MarketplaceForms/Return";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataByName, putDeleteArticle } from "../../../store/shopSlice";

const DeleteArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reference, setReference] = useState("");
  const { items, msg } = useSelector((state) => state.shop);
  const item = items.find((item) => item.reference === reference);

  useEffect(() => {
    dispatch(getDataByName("items"));
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(putDeleteArticle({ reference }));
  };

  const handleReturn = () => {
    navigate("/admin");
  };

  return (
    <div>
      <Box>
        <Return title="Delete Article" handleCheck={handleReturn} />
        <div className="p-3">
          <Form.Control
            className="mt-3"
            type="text"
            placeholder="Reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
          {item && <div className="mt-3">{item.name}</div>}
          <Button className="mt-3" onClick={handleDelete}>
            Delete
          </Button>
          {msg && <Alert variant="danger">{msg}</Alert>}
        </div>
      </Box>
    </div>
  );
};

export default DeleteArticle;
