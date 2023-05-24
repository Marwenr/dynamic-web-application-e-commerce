import React, { Suspense, lazy, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper/core";

SwiperCore.use([Navigation]);

const MyDynamicComponent = ({ component, props }) => {
  const LazyComponent = lazy(() => import(`../Card/${component}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const SwiperCar = ({ data, component, id }) => {
  const [slidesPerView, setSlidesPerView] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(4);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(6);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(8);
      } else {
        setSlidesPerView(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swiperSlide = data.map((el) => {
    return (
      <SwiperSlide key={el._id}>
        <MyDynamicComponent component={component} props={{ el }} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        navigation={{
          prevEl: `.el-${id}-prev`,
          nextEl: `.el-${id}-next`,
        }}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={0}
        className="mySwiper p-2"
      >
        {swiperSlide}
      </Swiper>
    </>
  );
};

export default SwiperCar;
