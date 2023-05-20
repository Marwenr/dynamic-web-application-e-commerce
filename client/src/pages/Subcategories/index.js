import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataByName } from "../../store/shopSlice";
import Box from "../../components/Box";
import ShapeFive from "../../components/Card/ShapeFive";

const Subcategories = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { items } = useSelector((state) => state.shop);
  const myData = items.filter((el) => el.subcategories === id);

  useEffect(() => {
    dispatch(getDataByName("items"));
  }, [dispatch]);

  const fetchData = myData.map(el => <ShapeFive key={el.id} el={el} /> )

  return (
    <div className="container mt-3">
      <Box>
        <div className="d-flex">{fetchData}</div>
      </Box>
    </div>
  );
};

export default Subcategories;
