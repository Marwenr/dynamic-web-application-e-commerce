import React, { Suspense, lazy, useEffect } from "react";
import Box from "../Box";
import styles from "./styles.module.css";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { getDataByName } from "../../store/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const MyDynamicComponent = ({ component, props }) => {
  const LazyComponent = lazy(() => import(`../${component}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const SwiperContainerByName = ({ props }) => {
  const { container, title, text, icon, textContainer } = styles;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.shop);
  const id = uuidv4();

  const dataByName =
    data[props.props].length > 0 &&
    data[props.props].filter((el) => el.subcategories === props.name);

  useEffect(() => {
    dispatch(getDataByName(props.props));
  }, [props.props, dispatch]);

  return (
    <div className={container}>
      {dataByName && (
        <Box>
          <div className={title}>
            <div
              className={textContainer}
              onClick={() => navigate(`/categories/${props.name}`)}
            >
              <p className={text}>{props.name}</p>
              <AiOutlineArrowRight color="white" />
            </div>
            <div className={`customNavigation`}>
              <button className={`customPrevButton el-${id}-prev`}>
                <MdOutlineNavigateBefore className={icon} />
              </button>
              <button className={`customNextButton el-${id}-next`}>
                <MdOutlineNavigateNext className={icon} />
              </button>
            </div>
          </div>
          <MyDynamicComponent
            component={props.componentName}
            props={{ data: dataByName, component: props.componentNeed, id }}
          />
        </Box>
      )}
    </div>
  );
};

export default SwiperContainerByName;
