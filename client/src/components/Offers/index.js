import React from "react";
import Box from "../Box";
import styles from "./styles.module.css";

const Offers = () => {
  const { container } = styles;
  return (
    <div className={container} style={{ width: "100%" }}>
      <Box><img src={require("../../assets/2.jpg")} alt="Girl in a jacket" width="100%" height="100%" /></Box>
    </div>
  );
};

export default Offers;
