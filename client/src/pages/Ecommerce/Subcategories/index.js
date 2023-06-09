import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataByName } from "../../../store/shopSlice";
import Box from "../../../components/Box";
import ItemShapeOne from "../../../components/Card/ItemShapeOne";

const Subcategories = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { items } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(getDataByName("items"));
  }, [dispatch]);

  const myData = items.filter((el) => el.subcategory === id);

  const fetchData = myData.map(el => <ItemShapeOne key={el._id} el={el} /> )

  return (
    <div className="container mt-3">
      <Box>
        <div className="d-flex">{fetchData}</div>
      </Box>
    </div>
  );
};

export default Subcategories;
