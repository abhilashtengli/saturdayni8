import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductType } from "../../ReduxStore/selectedProductSlice";

const FemaleCategoryButton = () => {
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const setSelectedType = (selectedType) => {
    setType(selectedType);
  };
  dispatch(addProductType(type));
  return (
    <div>
      <ul className="border border-red-500 flex justify-center items-center">
        <li
          onClick={() => setSelectedType("skirt")}
          className={`mx-2 px-4 py-1 border-black border rounded-2xl ${
            type === "skirt" ? "bg-black text-white" : ""
          }`}
        >
          Skirt
        </li>
        <li
          onClick={() => setSelectedType("croptop")}
          className={`mx-2 px-4 py-1 border-black border rounded-2xl ${
            type === "croptop" ? "bg-black text-white" : ""
          }`}
        >
          Crop Top
        </li>
        <li
          onClick={() => setSelectedType("jeans")}
          className={`mx-2 px-4 py-1 border-black border rounded-2xl ${
            type === "jeans" ? "bg-black text-white" : ""
          }`}
        >
          Jeans
        </li>
        <li
          onClick={() => setSelectedType("tshirt")}
          className={`mx-2 px-4 py-1 border-black border rounded-2xl ${
            type === "tshirt" ? "bg-black text-white" : ""
          }`}
        >
          T-shirt
        </li>
        <li
          onClick={() => setSelectedType("partywear")}
          className={`mx-2 px-4 py-1 border-black border rounded-2xl ${
            type === "partywear" ? "bg-black text-white" : ""
          }`}
        >
          Party Wear
        </li>
      </ul>
    </div>
  );
};

export default FemaleCategoryButton;
