import React, { Suspense, lazy } from "react";

const MyDynamicComponent = ({ component, props }) => {
  const LazyComponent = lazy(() =>
    import(`../../components/DynamicContainer/${component}`)
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const fetchData = (dynamicHomePage) =>
  dynamicHomePage.map((el, index) => {
    return (
      <MyDynamicComponent
        component={el.componentName}
        props={{ props: el.props }}
        key={index}
      />
    );
  });

const Index = () => {
  const dynamicHomePage = [
    {
      componentName: "ContainerDividedInTwo",
      props: [
        {
          componentName: "ContainerLanding",
          props: {
            componentName: "HomeNav",
            props: "subcategories",
            componentNeed: "SubcategoryShapeOne",
          },
        },
        {
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
      componentName: "Container",
      props: {
        componentName: "SwiperCar",
        props: "subcategories",
        componentNeed: "SubcategoryShapeOne",
      },
    },
    {
      componentName: "SwiperContainerByName",
      props: {
        name: "brake fluid",
        componentName: "SwiperCar",
        props: "items",
        componentNeed: "ItemShapeOne",
      },
    },
    {
      componentName: "ContainerDividedInTwo",
      props: [
        {
          componentName: "Container",
          props: {
            componentName: "Offers",
            props: "categories",
            componentNeed: "SubcategoryShapeOne",
          },
        },
        {
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
