import React from "react";
import banner2 from "../../Images/Banner2.webp";
import Product from "../Product";
import MaleCategoryButton from "../Buttons/MaleCategoryButton";
import FemaleCategoryButton from "../Buttons/FemaleCategoryButton";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const gender = useSelector((state) => state.user.gender);
  const selectedProductType = useSelector(
    (state) => state.selectedProduct.productType
  );
  return (
    <>
      <img className="w-screen h-[90%]" alt="" src={banner2} />
      <ul className="flex justify-center items-center border border-red-500 mt-20">
        <li className="border border-black mx-2 px-3 py-1 rounded-2xl">
          New Arrival
        </li>
        <li className="border border-black mx-2 px-3 py-1 rounded-2xl">
          Most Trending
        </li>
      </ul>
      {gender === "male" ? <MaleCategoryButton /> : <FemaleCategoryButton />}

      <Product param={selectedProductType} />
    </>
  );
};

export default MainContainer;
