import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductType } from "../../ReduxStore/selectedProductSlice";

const MaleCategoryButton = () => {
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const setSelectedType = (selectedType) => {
    setType(selectedType);
  };
  dispatch(addProductType(type));
  return (
    <>
      <ul className="border border-red-500 flex justify-center items-center">
        <li
          onClick={() => setSelectedType("shirt")}
          className={`cursor-pointer mx-2 px-4 py-1 border-black border rounded-2xl ${
            type === "shirt" ? "bg-black text-white" : ""
          }`}
        >
          Shirts
        </li>
        <li
          onClick={() => setSelectedType("tshirt")}
          className={`cursor-pointer mx-2 px-4 py-1 border-black border rounded-2xl ${
            type === "tshirt" ? "bg-black text-white" : ""
          }`}
        >
          T-Shirts
        </li>
        <li
          onClick={() => setSelectedType("jeans")}
          className={`cursor-pointer mx-2 px-4 py-1 border-black border rounded-2xl ${
            type === "jeans" ? "bg-black text-white" : ""
          }`}
        >
          Jeans
        </li>
        <li
          onClick={() => setSelectedType("jacket")}
          className={`cursor-pointer mx-2 px-4 py-1 border-black border rounded-2xl ${
            type === "jacket" ? "bg-black text-white" : ""
          }`}
        >
          Jacket
        </li>
      </ul>
    </>
  );
};

export default MaleCategoryButton;
