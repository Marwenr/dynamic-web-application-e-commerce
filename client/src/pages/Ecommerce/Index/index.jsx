import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomePage } from "../../../store/pageSlice";

const MyDynamicComponent = ({ component, props }) => {
  const LazyComponent = lazy(() =>
    import(`../../../components/DynamicContainer/${component}`)
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const fetchData = (homePage) =>
  homePage.map((el) => {
    return (
      <MyDynamicComponent
        component={el.componentName}
        props={{ props: el.props }}
        key={el._id}
      />
    );
  });

const Index = () => {
  const dispatch = useDispatch();
  const { homePage } = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(getHomePage());
  }, [dispatch]);
  const dynamicHomePage = [
    {
      _id: 1,
      componentName: "ContainerDividedInTwo",
      props: [
        {
          _id: 1,
          componentName: "ContainerLanding",
          props: {
            componentName: "HomeNav",
            props: "subcategories",
            componentNeed: "SubcategoryShapeOne",
          },
        },
        {
          _id: 2,
          componentName: "ContainerLanding",
          props: {
            componentName: "Offers",
            props: "offers",
            componentNeed: "SubcategoryShapeOne",
          },
        },
      ],
    },
    {
      _id: 2,
      componentName: "Container",
      props: 
        {
          _id: "1",
          componentName: "SwiperCar",
          props: "subcategories",
          componentNeed: "SubcategoryShapeOne",
        },
  
    },
    {
      _id: 3,
      componentName: "SwiperContainerByName",
      props: 
        {
          _id: "1",
          name: "brake fluid",
          componentName: "SwiperCar",
          props: "items",
          componentNeed: "ItemShapeOne",
        },
      
    },
    {
      _id: 4,
      componentName: "ContainerDividedInTwo",
      props: [
        {
          _id: 1,
          componentName: "Container",
          props: {
            componentName: "Offers",
            props: "categories",
            componentNeed: "SubcategoryShapeOne",
          },
        },
        {
          _id: 2,
          componentName: "Container",
          props: {
            componentName: "Offers",
            props: "categories",
            componentNeed: "SubcategoryShapeOne",
          },
        },
      ],
    },
    {
      _id: 5,
      componentName: "SwiperContainerByName",
      props: 
        {
          _id: 1,
          name: "engine oil",
          componentName: "SwiperCar",
          props: "items",
          componentNeed: "ItemShapeOne",
        },
    },
  ];


  return homePage.length > 0 ? (
    <div className="container">{fetchData(homePage)}</div>
  ) : (
    <div>Loading...</div>
  );
};

export default Index;
