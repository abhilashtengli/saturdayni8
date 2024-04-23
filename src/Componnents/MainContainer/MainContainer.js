import React from "react";
import banner2 from "../../Images/Banner2.webp";
import Products from "../Product/Products";
import MaleCategoryButton from "../Buttons/MaleCategoryButton";
import FemaleCategoryButton from "../Buttons/FemaleCategoryButton";
import { useSelector } from "react-redux";
import ImageSlider from "../Functionalities/ImageSlider";
import { bannerImages } from "../../Utils/Constants";

const MainContainer = () => {
  const gender = useSelector((state) => state.user.gender);
  const selectedProductType = useSelector(
    (state) => state.selectedProduct.productType
  );
  return (
    <>
      {/* <img className="w-screen h-[90%]" alt="" src={banner2} /> */}
      <div className="">
        <ImageSlider images={bannerImages} interval={5000} />
      </div>

      <div className=" border-black pt-12 pb-5">
        {gender === "male" ? <MaleCategoryButton /> : <FemaleCategoryButton />}
      </div>
      <Products param={selectedProductType} limit={4} />
    </>
  );
};

export default MainContainer;
