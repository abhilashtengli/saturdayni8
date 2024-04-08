import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
const SpecificProduct = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <div>{id}</div>
    </>
  );
};

export default SpecificProduct;
