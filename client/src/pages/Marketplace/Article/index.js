import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Box from "../../../components/Box";
import AddArticle from "../../../components/MarketplaceForms/AddArticle";
import EditArticle from "../../../components/MarketplaceForms/EditArticle";
import {
  getDataByName,
  postArticle,
  postNewCategory,
  postNewSubcategory,
  putUpdateArticle,
} from "../../../store/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Article = () => {
  const dispatch = useDispatch();
  const [reference, setReference] = useState("");
  const [check, setCheck] = useState("");
  const { items } = useSelector((state) => state.shop);
  const item = items.find((item) => item.reference === reference);
  const id = uuidv4();

  useEffect(() => {
    dispatch(getDataByName("items"));
    dispatch(getDataByName("categories"));
    dispatch(getDataByName("subcategories"));
  }, [dispatch]);

  const handleArticle = () => {
    setReference(reference)
    if (reference) {
      item ? setCheck("edit") : setCheck("add");
    }
  };

  const handleCheck = () => {
    setCheck("")
  }

  return (
    <div>
      {
        !check && <Box>
          <div className="p-3">
            <h4>Add / Edit Article</h4>
            <Form.Control
              className="mt-3"
              type="text"
              placeholder="Reference"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
            {item && <div className="mt-3">{item.name}</div>}
            <Button className="mt-3" onClick={handleArticle}>
              {item ? "Edit" : "Add"}
            </Button>
          </div>
        </Box>
      }
      {check === "edit" && <EditArticle reference={reference} item={item} dispatch={dispatch} putUpdateArticle={putUpdateArticle} handleCheck={handleCheck} />}
      {check === "add" && (
        <AddArticle
          reference={reference}
          dispatch={dispatch}
          postArticle={postArticle}
          postNewCategory={postNewCategory}
          postNewSubcategory={postNewSubcategory}
          handleCheck={handleCheck}
          id={id}
        />
      )}
    </div>
  );
};

export default Article;
