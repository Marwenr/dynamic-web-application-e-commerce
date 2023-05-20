import React, { useEffect, useState } from "react";
import Box from "../Box";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const HomeNav = ({ data, component }) => {
  const { container, item } = styles;
  const navigate = useNavigate();
  const [display, setDisplay] = useState("inline-block");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplay("none");
      } else {
        setDisplay("inline-block");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchData = data.map((el) => (
    <div
      className={item}
      key={el.id}
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        justifyContent: "center",
      }}
      onClick={() => navigate(`/categories/${el.name}`)}
    >
      <img
        src={require(`../../assets/${el.icon}.png`)}
        alt="test"
        width="20px"
        height="20px"
        className="me-2"
      />
      <div
        className="text-truncate"
        style={{ display: display, width: "110px" }}
      >
        {el.name}
      </div>
    </div>
  ));

  return (
    <div className={container}>
      <Box>{fetchData}</Box>
    </div>
  );
};

export default HomeNav;
