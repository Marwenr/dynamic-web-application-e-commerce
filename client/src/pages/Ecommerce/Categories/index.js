import React, { useEffect, useState } from "react";
import Box from "../../../components/Box";
import { useDispatch, useSelector } from "react-redux";
import { getDataByName } from "../../../store/shopSlice";
import CategoryShapeOne from "../../../components/Card/CategoryShapeOne";
import SubcategoryShapeOne from "../../../components/Card/SubcategoryShapeOne";
import styles from "./styles.module.css";

const Categories = () => {
  const { container } = styles;
  const dispatch = useDispatch();
  const [sub, setSub] = useState("");
  const { categories, subcategories } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(getDataByName("categories"));
    dispatch(getDataByName("subcategories"));
  }, [dispatch]);

  const fetchData = categories && categories.map((el) => (
    <CategoryShapeOne key={el._id} el={el} onClick={() => setSub(el.name)} />
  ));

  const subcategoriesSelected = subcategories && subcategories.filter(
    (el) => el.category === sub
  );

  const fetchSub = subcategoriesSelected && subcategoriesSelected.map((el) => (
    <SubcategoryShapeOne key={el._id} el={el} />
  ));

  return (
    <div className="container mt-3">
      <Box>
        <div className="d-flex">
          {sub ? <div className={container}>{fetchSub}</div> : <div className={container}>{fetchData}</div>}
        </div>
      </Box>
    </div>
  );
};

export default Categories;
