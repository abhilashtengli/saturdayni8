import React from "react";
import Header from "./Header";
import Product from "./Product";

const SearchPage = () => {
  return (
    <>
      <Header />
      <Product param={"jacket"} />
      SearchPage
    </>
  );
};

export default SearchPage;
