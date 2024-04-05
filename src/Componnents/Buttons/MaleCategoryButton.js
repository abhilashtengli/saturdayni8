import React from "react";

const MaleCategoryButton = () => {
  return (
    <>
      <ul className="border border-red-500 flex justify-center items-center">
        <li className="mx-2 px-4 py-1 border-black border rounded-2xl">
          Shirts
        </li>
        <li className="mx-2 px-4 py-1 border-black border rounded-2xl">
          T-Shirts
        </li>
        <li className="mx-2 px-4 py-1 border-black border rounded-2xl">
          Jeans
        </li>
        <li className="mx-2 px-4 py-1 border-black border rounded-2xl">
          Jacket
        </li>
      </ul>
    </>
  );
};

export default MaleCategoryButton;
