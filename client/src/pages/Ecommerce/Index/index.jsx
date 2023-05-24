import React, { Suspense, lazy } from "react";

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

const fetchData = (dynamicHomePage) =>
  dynamicHomePage.map((el) => {
    return (
      <MyDynamicComponent
        component={el.componentName}
        props={{ props: el.props }}
        key={el._id}
      />
    );
  });

const Index = () => {
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
      props: {
        componentName: "SwiperCar",
        props: "subcategories",
        componentNeed: "SubcategoryShapeOne",
      },
    },
    {
      _id: 3,
      componentName: "SwiperContainerByName",
      props: {
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
      props: {
        name: "engine oil",
        componentName: "SwiperCar",
        props: "items",
        componentNeed: "ItemShapeOne",
      },
    },
  ];

  return <div className="container">{fetchData(dynamicHomePage)}</div>;
};

export default Index;
