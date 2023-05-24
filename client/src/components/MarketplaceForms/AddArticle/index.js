import React, { useState } from "react";
import { Alert, Button, Form, Image, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Box from "../../../components/Box";

const AddArticle = ({
  reference,
  dispatch,
  postArticle,
  postNewCategory,
  postNewSubcategory,
}) => {
  const { categories, subcategories, msg } = useSelector((state) => state.shop);
  const [categoriesSelected, setCategoriesSelected] = useState("");
  const [subcategoriesSelected, setSubcategoriesSelected] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [supplier, setSupplier] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [newCategory, setNewCategory] = useState("");
  const [newSubcategory, setNewSubcategory] = useState("");

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

  const checkAddCat = categoriesSelected === "AddNewCategory";
  const checkAddSub = subcategoriesSelected === "AddNewSubcategory";

  const optionCat = categories.map((sub) => (
    <option key={sub._id} value={sub.name}>
      {sub.name}
    </option>
  ));

  const subCatFiltred = subcategories.filter(
    (cat) => cat.category === categoriesSelected
  );

  const optionSub =
    subCatFiltred &&
    subCatFiltred.map((sub) => (
      <option key={sub._id} value={sub.name}>
        {sub.name}
      </option>
    ));

  const handleAdd = (e) => {
    e.preventDefault();
    const data = {
      reference,
      name,
      price,
      quantity,
      supplier,
      manufacturer,
      category: categoriesSelected,
      subcategory: subcategoriesSelected,
      image: selectedImage,
    };
    dispatch(postArticle(data));
  };

  const handleNewCategory = (e) => {
    e.preventDefault();
    dispatch(postNewCategory(newCategory));
  };
  const handleNewSubcategory = (e) => {
    e.preventDefault();
    const subData = {
      name: newSubcategory,
      category: categoriesSelected,
    };
    if (subData.category === "AddNewCategory") return false;
    dispatch(postNewSubcategory(subData));
  };

  return (
    <div className="container mt-3">
      <Box>
        <h2 className="p-3">Add Article</h2>
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
            <Form.Control
              type="text"
              placeholder="Designation"
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              placeholder="Purchase Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Supplier"
              onChange={(e) => setSupplier(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Manufacturer"
              onChange={(e) => setManufacturer(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              placeholder="Quantity Add"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Select
              value={categoriesSelected}
              aria-label="Default select example"
              onChange={(e) => setCategoriesSelected(e.target.value)}
            >
              <option value="" disabled>
                -- Select a Category --
              </option>
              {optionCat}
              <option className="bg-danger text-white" value="AddNewCategory">
                Add New Category
              </option>
            </Form.Select>
            <Form.Control
              className="ms-2"
              type="text"
              placeholder="Add New Category"
              disabled={!checkAddCat}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <Button onClick={handleNewCategory} disabled={!checkAddCat}>
              Add
            </Button>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Select
              value={subcategoriesSelected}
              aria-label="Default select example"
              onChange={(e) => setSubcategoriesSelected(e.target.value)}
            >
              <option value="" disabled>
                -- Select a Subcategory --
              </option>
              {optionSub}
              {categoriesSelected && (
                <option
                  className="bg-danger text-white"
                  value="AddNewSubcategory"
                >
                  Add New Subcategory
                </option>
              )}
            </Form.Select>
            <Form.Control
              className="ms-2"
              type="text"
              placeholder="Add New Subcategory"
              disabled={!checkAddSub}
              onChange={(e) => setNewSubcategory(e.target.value)}
            />
            <Button onClick={handleNewSubcategory} disabled={!checkAddSub}>
              Add
            </Button>
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
              src={selectedImage}
              alt="Set Photo"
              rounded
              width="140px"
              height="140px"
              className="ms-5"
            />
          </InputGroup>
          {msg && <Alert variant="danger">{msg}</Alert>}
          <Button onClick={handleAdd}>Add Article</Button>
        </Form>
      </Box>
    </div>
  );
};

export default AddArticle;
