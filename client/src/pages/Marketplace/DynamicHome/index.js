import React, { useEffect, useState } from "react";
import { Button, CloseButton, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDataByName } from "../../../store/shopSlice";
import { getHomePage, addElem, deleteElem } from "../../../store/pageSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Box from "../../../components/Box";
import Return from "../../../components/MarketplaceForms/Return";

const DynamicHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { homePage } = useSelector((state) => state.page);
  const id = uuidv4();
  const [container, setContainer] = useState("");
  const [dataContent, setDataContent] = useState({
    id: 1,
    componentName: "",
    props: "",
    componentNeed: "",
    name: "",
  });
  const [dataContentTwo, setDataContentTwo] = useState({
    id: 2,
    componentName: "",
    props: "",
    componentNeed: "",
  });

  useEffect(() => {
    dispatch(getDataByName("categories"));
    dispatch(getHomePage());
  }, [dispatch]);

  const handleDelete = (val) => {
    dispatch(deleteElem(val));
  };

  const fetchData =
    homePage.length > 0 &&
    homePage.map((el) => (
      <div key={el._id} className="mb-5">
        <Box>
          <div className="d-flex justify-content-between p-2">
            <h3>{el.componentName}</h3>
            <CloseButton onClick={() => handleDelete(el._id)} />
          </div>
          {el.props.map((it) => (
            <div key={it.id} className="ms-3 mb-3">
              <h5>{it.componentName}</h5>
              <h5>{it.props}</h5>
              <h5>{it.componentNeed}</h5>
            </div>
          ))}
        </Box>
      </div>
    ));

  const handleAdd = () => {
    const data = {
      _id: id,
      componentName: container,
      props: [dataContent],
    };
    if (dataContentTwo.componentName) {
      data.props.push(dataContentTwo);
    }
    dispatch(addElem(data));
  };

  const handleReturn = () => {
    navigate("/admin");
  };

  return (
    <div className="mt-3 mb-3">
      <Return title="Dynamic Home" handleCheck={handleReturn} />
      {fetchData}
      <Box>
        <Form className="p-3">
          <h4 className="mb-3">Add</h4>
          <InputGroup size="sm" className="mb-5">
            <InputGroup.Text id="client">Container</InputGroup.Text>
            <Form.Control
              className="me-2"
              aria-label="Small"
              aria-describedby="client"
              onChange={(e) => setContainer(e.target.value)}
            />
          </InputGroup>
          <div className="mb-5">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="client">Container Data</InputGroup.Text>
              <Form.Control
                className="me-2"
                aria-label="Small"
                aria-describedby="client"
                onChange={(e) =>
                  setDataContent((prev) => ({
                    ...prev,
                    componentName: e.target.value,
                  }))
                }
              />
              <InputGroup.Text id="client">Data</InputGroup.Text>
              <Form.Control
                className="me-2"
                aria-label="Small"
                aria-describedby="client"
                onChange={(e) =>
                  setDataContent((prev) => ({ ...prev, props: e.target.value }))
                }
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="client">Card</InputGroup.Text>
              <Form.Control
                className="me-2"
                aria-label="Small"
                aria-describedby="client"
                onChange={(e) =>
                  setDataContent((prev) => ({
                    ...prev,
                    componentNeed: e.target.value,
                  }))
                }
              />
              <InputGroup.Text id="client">Title</InputGroup.Text>
              <Form.Control
                className="me-2"
                aria-label="Small"
                aria-describedby="client"
                onChange={(e) =>
                  setDataContent((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="client">
                Container Data Two :
              </InputGroup.Text>
              <Form.Control
                className="me-2"
                aria-label="Small"
                aria-describedby="client"
                onChange={(e) =>
                  setDataContentTwo((prev) => ({
                    ...prev,
                    componentName: e.target.value,
                  }))
                }
              />
              <InputGroup.Text id="client">Data</InputGroup.Text>
              <Form.Control
                className="me-2"
                aria-label="Small"
                aria-describedby="client"
                onChange={(e) =>
                  setDataContentTwo((prev) => ({
                    ...prev,
                    props: e.target.value,
                  }))
                }
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="client">Card</InputGroup.Text>
              <Form.Control
                className="me-2"
                aria-label="Small"
                aria-describedby="client"
                width="50%"
                onChange={(e) =>
                  setDataContentTwo((prev) => ({
                    ...prev,
                    componentNeed: e.target.value,
                  }))
                }
              />
            </InputGroup>
          </div>
          <Button onClick={handleAdd} style={{ width: "100%" }}>
            Add
          </Button>
        </Form>
      </Box>
    </div>
  );
};

export default DynamicHome;
