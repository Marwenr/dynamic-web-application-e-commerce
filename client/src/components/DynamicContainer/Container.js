import React, { Suspense, lazy, useEffect } from "react";
import Box from "../Box";
import styles from "./styles.module.css";
import { getDataByName } from "../../store/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const MyDynamicComponent = ({ component, props }) => {
  const LazyComponent = lazy(() => import(`../${component}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const fetchData = (props, data, id) =>
  props.map((el) => {
    const style =
      el.componentName === "HomeNav"
        ? { width: "20%" }
        : el.componentName === "HomeNav"
        ? { width: "80%" }
        : { width: "100%" };
    return (
      <div style={style} key={el.id}>
        <Box>
          <MyDynamicComponent
            component={el.componentName}
            props={{
              data: data[el.props],
              component: el.componentNeed,
              id,
            }}
          />
        </Box>
      </div>
    );
  });

const Container = ({ props }) => {
  const { container } = styles;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.shop);
  const id = uuidv4();

  useEffect(() => {
    dispatch(getDataByName(props[0].props));
  }, [props, dispatch]);

  return (
    <div className={container} style={{ display: "flex", gap: "20px" }}>
      {fetchData(props, data, id)}
    </div>
  );
};

export default Container;
