import React from "react";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const Invoice = ({ client, articles, total, date, handleDeleteArticle }) => {

  const fetchArticles = articles && articles.map((art, index) => (<tr key={index} className="drawerArticle">
    <td>{art.quantity}</td>
    <td>{art.reference}</td>
    <td>{art.name}</td>
    <td>{art.discount}%</td>
    <td>{art.unitPrice} TND</td>
    <td>{art.price} TND</td>
    {handleDeleteArticle && <span className="deleteArticle" onClick={() => handleDeleteArticle(art)}><AiFillDelete /></span>}
  </tr>))

  return (
    <div className="p-5">
      <div className="header d-flex justify-content-between">
        <div>
          <h3>company name</h3>
          <p>address</p>
          <p>Email</p>
          <p>Website</p>
          <p>phone</p>
        </div>
        <div className="text-end">
          <p>{date}</p>
          <p>Client: {client}</p>
        </div>
      </div>
      <div className="text-center fw-bold fs-4 p-5">Invoice</div>
      <div>
        <Table>
          <thead style={{ backgroundColor: "#dddddd" }}>
            <tr>
              <th>Quantity</th>
              <th>reference</th>
              <th>Description</th>
              <th>Discount</th>
              <th>unit price</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {fetchArticles}
          </tbody>
        </Table>
        <div style={{ width: "300px" }} className="ms-auto">
          <div className="mb-3 d-flex align-items-center">
            <h5 style={{ width: "100px" }}>Total:</h5>
            <h5>{total}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
