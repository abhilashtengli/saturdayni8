import React from "react";
import banner2 from "../../Images/Banner2.webp";
import Product from "../Product";

const MainContainer = () => {
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

      <Product />
    </>
  );
};

export default MainContainer;
