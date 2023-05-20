import React, { Suspense, lazy, useEffect } from "react";
import Box from "../Box";
import styles from "./styles.module.css";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
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

const ContainerLanding = ({ props }) => {
  const { container, title, text, icon } = styles;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.shop);
  const id = uuidv4();
  const style =
    props.componentName === "HomeNav" ? { maxWidth: "20%" } : { minWidth: "80%" };

  useEffect(() => {
    dispatch(getDataByName(props.props));
  }, [props.props, dispatch]);

  return (
    <div className={container} style={style}>
      <Box>
        <MyDynamicComponent
          component={props.componentName}
          props={{
            data: data[props.props],
            component: props.componentNeed,
            id,
          }}
        />
      </Box>
    </div>
  );
};

export default ContainerLanding;
