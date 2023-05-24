import React from "react";

const Loader = ({ children, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return children;
};

export default Loader;
