import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataByName } from "../../../store/shopSlice";
import ShapeThree from "../../../components/Card/ShapeThree";

const Item = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.shop);

  const item = items && items.find((item) => item.name === id);

  useEffect(() => {
    dispatch(getDataByName("items"));
  }, [dispatch]);

  return item ? <ShapeThree el={item} /> : <div>Loading...</div>;
};

export default Item;
