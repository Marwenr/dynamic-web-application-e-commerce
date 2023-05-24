import React, { Suspense, lazy } from "react";

const MyDynamicComponent = ({ component, props }) => {
  const LazyComponent = lazy(() => import(`./${component}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const fetchData = (props) =>
  props.map((el) => {
    return (
      <MyDynamicComponent
        component={el.componentName}
        props={{ props: el.props }}
        key={el._id}
      />
    );
  });


const ContainerDividedInTwo = ({props}) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>{fetchData(props)}</div>
  )
}

export default ContainerDividedInTwo