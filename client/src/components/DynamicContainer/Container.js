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

const Container = ({ props }) => {
  const { container } = styles;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.shop);
  const id = uuidv4();

  useEffect(() => {
    dispatch(getDataByName(props.props));
  }, [props.props, dispatch]);

  return (
    <div className={container}>
      <Box>
        {data[props.props].length > 0 && <MyDynamicComponent
          component={props.componentName}
          props={{
            data: data[props.props],
            component: props.componentNeed,
            id,
          }}
        />}
      </Box>
    </div>
  );
};

export default Container;
