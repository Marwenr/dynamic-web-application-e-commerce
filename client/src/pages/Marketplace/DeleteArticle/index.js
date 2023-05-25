import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Box from "../../../components/Box";
import { useDispatch, useSelector } from "react-redux";
import { getDataByName, putDeleteArticle} from "../../../store/shopSlice"

const DeleteArticle = () => {
  const dispatch = useDispatch();
  const [reference, setReference] = useState("")
  const { items, msg } = useSelector((state) => state.shop);
  const item = items.find((item) => item.reference === reference);

  useEffect(() => {
    dispatch(getDataByName("items"));
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(putDeleteArticle({reference}))
  }

  return (
    <div>
      <Box>
        <div className="p-3">
          <h4>Delete Article</h4>
          <Form.Control className="mt-3" type="text" placeholder="Reference" value={reference} onChange={(e) => setReference(e.target.value)} />
          {item && <div className="mt-3">{item.name}</div>}
          <Button className="mt-3" onClick={handleDelete}>Delete</Button>
          {msg && <Alert variant="danger">{msg}</Alert>}
        </div>
      </Box>
    </div>
  );
};

export default DeleteArticle;
