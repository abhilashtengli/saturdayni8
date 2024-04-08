import React from "react";
import banner2 from "../../Images/Banner2.webp";
import Products from "../Products";
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
      <div className=" border-black pt-12 pb-5">
        {gender === "male" ? <MaleCategoryButton /> : <FemaleCategoryButton />}
      </div>
      <Products param={selectedProductType} />
    </>
  );
};

export default MainContainer;
