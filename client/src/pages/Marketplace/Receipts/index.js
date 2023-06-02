import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInvoice } from "../../../store/invoiceSlice";
import { Button, Form, ListGroup } from "react-bootstrap";
import Box from "../../../components/Box";
import Invoice from "../../../components/MarketplaceForms/Invoice";
import Return from "../../../components/MarketplaceForms/Return";
import { useNavigate } from "react-router-dom";

const Receipts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [client, setClient] = useState("");
  const [receipt, setReceipt] = useState({});
  const { receipts } = useSelector((state) => state.invoice);

  const handleTest = () => {
    dispatch(getInvoice({ client }));
  };

  const fetchData =
    receipts.length > 0 &&
    receipts.map((rec) => (
      <ListGroup.Item
        action
        key={rec._id}
        className="d-flex justify-content-between"
        onClick={() => setReceipt(rec)}
      >
        <span>{rec.client}</span>
        <span>{rec.total}TND</span>
        <span>{rec.date}</span>
      </ListGroup.Item>
    ));

  const handleReturn = () => {
    navigate("/admin");
  };

  return (
    <div>
      <Box>
        <Return title="Receipts" handleCheck={handleReturn} />
        <div className="p-5">
          <div className="mb-3 d-flex">
            <Form.Control
              className="me-2"
              type="text"
              placeholder="Client Name"
              onChange={(e) => setClient(e.target.value)}
            />
            <Button onClick={handleTest}>Search</Button>
          </div>
          <ListGroup>{fetchData}</ListGroup>
        </div>
      </Box>
      <Box>
        <Invoice
          client={receipt.client}
          articles={receipt.articles}
          total={receipt.total}
          date={receipt.date}
        />
      </Box>
    </div>
  );
};

export default Receipts;
