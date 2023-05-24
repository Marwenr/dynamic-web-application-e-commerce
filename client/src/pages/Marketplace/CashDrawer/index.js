import React from "react";
import Box from "../../../components/Box";
import { Form, InputGroup, Table } from "react-bootstrap";

const CashDrawer = () => {
  return (
    <div>
      <Box>
        <Form className="p-3 mb-5">
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="client">Client</InputGroup.Text>
            <Form.Control
              className="me-2"
              aria-label="Small"
              aria-describedby="client"
            />
            <InputGroup.Text id="inputGroup-sizing-sm">Cashier</InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <Form.Control
              className="me-2"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Reference"
            />
            <Form.Control
              className="me-3"
              style={{ width: "50%" }}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Description"
            />
            <Form.Control
              className="me-2"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Quantity"
            />
            <Form.Control
              className="me-3"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="discount"
            />
            <Form.Control
              className="me-2"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Unit Price"
              disabled
            />
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Price"
              disabled
            />
          </InputGroup>
        </Form>
        <div className="facture p-5">
          <div className="header d-flex justify-content-between">
            <div>
              <h3>company name</h3>
              <p>address</p>
              <p>Email</p>
              <p>Website</p>
              <p>phone</p>
            </div>
            <div>
              <p>Invoice Id</p>
              <p>Date</p>
            </div>
          </div>
          <div className="text-center fw-bold fs-4 p-5">Invoice</div>
          <div>
            <Table>
              <thead style={{ backgroundColor: "#dddddd" }}>
                <tr>
                  <th>reference</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>unit price</th>
                  <th>price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Price</th>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default CashDrawer;
