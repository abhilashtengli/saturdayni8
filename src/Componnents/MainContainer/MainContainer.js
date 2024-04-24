import React from "react";
import Products from "../Product/Products";
import MaleCategoryButton from "../Buttons/MaleCategoryButton";
import FemaleCategoryButton from "../Buttons/FemaleCategoryButton";
import { useSelector } from "react-redux";
import ImageSlider from "../Functionalities/ImageSlider";
import { bannerImages } from "../../Utils/Constants";
import DelayedComponent from "../DelayComponent/DelayedComponent";

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
      <DelayedComponent>
        <div className=" border-black pt-12 pb-5">
          {gender === "male" ? (
            <MaleCategoryButton />
          ) : (
            <FemaleCategoryButton />
          )}
        </div>
      </DelayedComponent>
      <Products param={selectedProductType} limit={4} />
    </>
  );
};

export default MainContainer;
