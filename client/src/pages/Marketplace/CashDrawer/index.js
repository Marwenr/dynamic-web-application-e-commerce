import React, { useEffect, useState } from "react";
import Box from "../../../components/Box";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { IoMdReturnRight } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getDataByName, putUpdateArticle } from "../../../store/shopSlice";
import { postInvoice } from "../../../store/invoiceSlice";
import { useNavigate } from "react-router-dom";
import Invoice from "../../../components/MarketplaceForms/Invoice";
import Return from "../../../components/MarketplaceForms/Return";

const CashDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState("");
  const [reference, setReference] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [client, setClient] = useState("");
  const [cashier, setCashier] = useState("");
  const [total, setTotal] = useState(0);
  const { items } = useSelector((state) => state.shop);
  const { msg } = useSelector((state) => state.invoice);
  const date = Date(Date.now()).toString().slice(4, 15);
  const item = items.find((it) => it.reference === reference);

  useEffect(() => {
    dispatch(getDataByName("items"));
  }, [dispatch]);

  const handleQuantity = (e) => {
    e.target.value > article.quantity
      ? setQuantity(article.quantity)
      : setQuantity(e.target.value);
  };

  const price = article.price && article.price * quantity;
  const priceAfterDisc = price && price - (price * discount) / 100;

  const addArticle = () => {
    const data = {
      ...article,
      qty: quantity,
      unitPrice: article.price,
      price: priceAfterDisc,
      discount,
    };
    if (!articles.find((ar) => ar.reference === data.reference)) {
      setArticles((prev) => {
        return [...prev, data];
      });
      setTotal((prev) => prev + priceAfterDisc);
    }
  };

  const handleDeleteArticle = (ar) => {
    setArticles((prev) => [
      ...prev.filter((art) => {
        return art.reference !== ar.reference;
      }),
    ]);
  };

  const handleSubmit = () => {
    if(client && cashier && articles.length > 0) {
      const data = {
        validation: true,
        client,
        cashier,
        date,
        total,
        articles,
      };
      articles.map((product) =>
        dispatch(
          putUpdateArticle({
            reference: product.reference,
            quantity: product.quantity - +product.qty,
          })
        )
      );
      dispatch(postInvoice(data));
    }
  };

  const handleReset = () => {
    setArticles([]);
    setTotal(0);
  };

  const handleReturn = () => {
    navigate("/admin");
  };

  return (
    <div>
      <Box>
        <Return title="Cash Drawer" handleCheck={handleReturn} />
        <Form className="p-3 mb-5">
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="client">Client</InputGroup.Text>
            <Form.Control
              className="me-2"
              aria-label="Small"
              aria-describedby="client"
              onChange={(e) => setClient(e.target.value)}
            />
            <InputGroup.Text id="inputGroup-sizing-sm">Cashier</InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setCashier(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <Form.Control
              className="me-2"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Reference"
              onChange={(e) => setReference(e.target.value)}
            />
            {item && (
              <p
                style={{
                  position: "absolute",
                  top: "31px",
                  left: 0,
                  width: "92px",
                  textAlign: "center",
                  backgroundColor: "#e9ecef",
                  paddingTop: "7px",
                  cursor: "pointer",
                }}
                onClick={(e) => setArticle(item)}
              >
                {item?.reference}
              </p>
            )}
            <Form.Control
              className="me-3"
              style={{ width: "50%" }}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Description"
              defaultValue={article?.name}
            />
            <Form.Control
              className="me-2"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Quantity"
              value={quantity}
              onChange={handleQuantity}
            />
            <Form.Control
              className="me-3"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="discount"
              onChange={(e) => setDiscount(e.target.value)}
            />
            <Form.Control
              className="me-2"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Unit Price"
              disabled
              defaultValue={article?.price}
            />
            <Form.Control
              className="me-2"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Price"
              disabled
              value={priceAfterDisc}
            />
            <IoMdReturnRight
              style={{ marginBlock: "auto", cursor: "pointer" }}
              onClick={addArticle}
            />
          </InputGroup>
        </Form>
        <Invoice
          client={client}
          articles={articles}
          total={total}
          date={date}
          handleDeleteArticle={handleDeleteArticle}
        />
        <div className="m-5 d-flex justify-content-center gap-3">
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleReset}>Reset</Button>
        </div>
        {msg && (
          <Alert
            variant="danger"
            style={{ width: "50%", marginInline: "auto", textAlign: "center" }}
          >
            {msg}
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default CashDrawer;
