import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Box from "../../../components/Box";
import AddArticle from "../../../components/MarketplaceForms/AddArticle"
import EditArticle from "../../../components/MarketplaceForms/EditArticle"

const DeleteArticle = () => {
  const [reference, setReference] = useState("")
  return (
    <div>
      <Box>
        <div className="p-3">
          <h4>Delete Article</h4>
          <Form.Control className="mt-3" type="text" placeholder="Reference" value={reference} onChange={(e) => setReference(e.target.value)} />
          <Button className="mt-3">Delete</Button>
        </div>
      </Box>
    </div>
  );
};

export default DeleteArticle;
