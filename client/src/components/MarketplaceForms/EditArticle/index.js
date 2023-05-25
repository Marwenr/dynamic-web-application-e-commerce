import React, { useEffect, useState } from "react";
import { Button, Form, Image, InputGroup } from "react-bootstrap";
import { getDataByName } from "../../../store/shopSlice";
import Box from "../../../components/Box";
import { GrFormPreviousLink } from "react-icons/gr";

const EditArticle = ({ reference, item, dispatch, putUpdateArticle, handleCheck }) => {
  const [selectedImage, setSelectedImage] = useState(item.image);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [supplier, setSupplier] = useState(item.supplier);
  const [manufacturer, setManufacturer] = useState(item.manufacturer);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    dispatch(getDataByName("categories"));
    dispatch(getDataByName("subcategories"));
  }, [dispatch]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setSelectedImage("");
    }
  };

  const handleUpdateArticle = (e) => {
    e.preventDefault();
    const data = {
      _id: item._id,
      reference,
      image: selectedImage,
      name,
      price,
      supplier,
      manufacturer,
      quantity,
      category: item.category,
      subcategory: item.subcategory,
    }
    dispatch(putUpdateArticle(data))
    handleCheck()
  }

  return (
    <div className="container mt-3">
      <Box>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="p-3">Edit Article</h2>
          <GrFormPreviousLink style={{ fontSize: "30px", marginRight: "30px", cursor: "pointer" }} onClick={() => handleCheck()} />
        </div>
        <Form className="p-3">
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Reference"
              value={reference}
              disabled
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="des">Designation:</InputGroup.Text>
            <Form.Control
              id="des"
              type="text"
              placeholder="Designation"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="pri">Purchase Prise:</InputGroup.Text>
            <Form.Control
              id="pri"
              type="text"
              className="me-2"
              placeholder="Purchase Price"
              defaultValue={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <InputGroup.Text id="qu">All Quantity:</InputGroup.Text>
            <Form.Control
              id="qu"
              type="text"
              placeholder="Quantity Add"
              defaultValue={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="sup">Supplier:</InputGroup.Text>
            <Form.Control
              id="sup"
              type="text"
              className="me-2"
              placeholder="supplier"
              defaultValue={supplier}
              onChange={(e) => setSupplier(e.target.value)}
            />
            <InputGroup.Text id="man">Manufacturer:</InputGroup.Text>
            <Form.Control
              id="man"
              type="text"
              placeholder="Manufacturer"
              defaultValue={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3 d-flex align-items-center">
            <InputGroup.Text id="cat">Category:</InputGroup.Text>
            <Form.Control
              className="me-2"
              id="cat"
              type="text"
              placeholder="Category"
              defaultValue={item.category}
              disabled
            />
            <InputGroup.Text id="sub">Subcategory:</InputGroup.Text>
            <Form.Control
              id="sub"
              type="text"
              placeholder="Subcategory"
              defaultValue={item.subcategory}
              disabled
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <div className="me-5">
              <Form.Control
                type="file"
                placeholder="image"
                onChange={handleImageChange}
              />
            </div>
            <Image
              src={selectedImage || item.image}
              alt="Set Photo"
              rounded
              width="140px"
              height="140px"
              className="ms-5"
            />
          </InputGroup>
          <Button onClick={handleUpdateArticle}>Edit Article</Button>
        </Form>
      </Box>
    </div>
  );
};

export default EditArticle;
