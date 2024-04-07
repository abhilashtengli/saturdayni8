import React, { useEffect, useState } from "react";
import Header from "./Header";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const gender = useSelector((state) => state.user.gender);
  const womendataProduct = useSelector((state) => state.product.womensProduct);
  const menDataProduct = useSelector((state) => state.product.mensProduct);
  const [producttoShow, setProductToShow] = useState([]);
  const setSelectedType = (selectedType) => {
    setSearchText(selectedType);
  };

  useEffect(() => {
    if (gender === "male") {
      setSearchText("");
      setProductToShow(menDataProduct);
    } else {
      setSearchText("");
      setProductToShow(womendataProduct);
      console.log("executed");
    }
  }, [gender, menDataProduct, womendataProduct]);
  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <div className="border-red-500 px-32 flex items-center sticky top-28 ">
          <FontAwesomeIcon
            className="absolute w-10 h-5 border-black p-2 ml-1"
            icon={faMagnifyingGlass}
          />
          <input
            className="border border-black w-full text-lg p-2 bg-opacity-75 bg-gray-100 pl-16 rounded-full"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="  border-black flex justify-between p-10">
          <div className=" w-80 h-96 border-red-500 p-10 shadow-lg bg-white sticky left-0 top-56">
            <h1 className="font-semibold text-gray-600">Popular Searches</h1>
            {gender === "male" ? (
              <div>
                <h2
                  className={`cursor-pointer my-2 px-1 py-1 border-black hover:bg-gray-200  ${
                    searchText === "jacket" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedType("jacket")}
                >
                  jacket
                </h2>
                <h2
                  className={`cursor-pointer my-2 px-1 py-1 border-black hover:bg-gray-200  ${
                    searchText === "shirt" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedType("shirt")}
                >
                  shirt
                </h2>
                <h2
                  className={`cursor-pointer my-2 px-1 py-1 border-black hover:bg-gray-200  ${
                    searchText === "jeans" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedType("jeans")}
                >
                  jeans
                </h2>

                <h2
                  className={`cursor-pointer my-2 px-1 py-1 border-black hover:bg-gray-200  ${
                    searchText === "tshirt" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedType("tshirt")}
                >
                  tshirts
                </h2>
              </div>
            ) : (
              <div>
                <h2
                  className={`cursor-pointer my-2 px-1 py-1 border-black hover:bg-gray-200  ${
                    searchText === "croptop" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedType("croptop")}
                >
                  crop top
                </h2>
                <h2
                  className={`cursor-pointer my-2 px-1 py-1 border-black hover:bg-gray-200  ${
                    searchText === "jeans" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedType("jeans")}
                >
                  jeans
                </h2>
                <h2
                  className={`cursor-pointer my-2 px-1 py-1 border-black hover:bg-gray-200  ${
                    searchText === "tshirt" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedType("tshirt")}
                >
                  tshirts
                </h2>
                <h2
                  className={`cursor-pointer my-2 px-1 py-1 border-black hover:bg-gray-200  ${
                    searchText === "skirt" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedType("skirt")}
                >
                  skirt
                </h2>
              </div>
            )}
          </div>
          {/* Pass searchText to Product component for searching */}
          <div className="border-black  p-1 w-[70%]">
            <div className="flex flex-wrap gap-x-10">
              {producttoShow.map((item) =>
                item.category.toLowerCase() === searchText ||
                item.name.toLowerCase().includes(searchText) ? (
                  <div
                    key={item.id}
                    className=" w-96 m-2 cursor-pointer flex bg-gray-50 shadow-lg p-1 rounded-lg border-black"
                  >
                    <img
                      className="w-24 border-red-500 rounded-lg"
                      alt={item.name}
                      src={item.imageURL}
                    />
                    <ul className="ml-5">
                      <li className=" border-blue-500 m-1 text-sm font-semibold text-gray-500">
                        {item.name}
                      </li>
                      <li className=" border-blue-500 m-1">Rs.{item.price}</li>
                    </ul>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
