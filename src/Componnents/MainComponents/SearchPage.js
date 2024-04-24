import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { mensProduct } from "../../Utils/Constants";
import { womensProduct } from "../../Utils/Constants";
import Footer from "./Footer";
import FooterMenu from "../FooterMenu";
import DelayedComponent from "../DelayComponent/DelayedComponent";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const gender = useSelector((state) => state.user.gender);
  const womendataProduct = useSelector((state) => state.product.womensProduct);
  const menDataProduct = useSelector((state) => state.product.mensProduct);
  const [producttoShow, setProductToShow] = useState([]);
  const navigate = useNavigate();
  const setSelectedType = (selectedType) => {
    setSearchText(selectedType);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (gender === "male") {
      setSearchText("");
      setProductToShow(menDataProduct);
    } else {
      setSearchText("");
      setProductToShow(womendataProduct);
      console.log("executed");
    }
  }, [gender, menDataProduct, womendataProduct]);

  const specificProductFunction = (id) => {
    navigate(`/specificProduct/${id}`);
  };

  return (
    <>
      <div className="md:bg-gray-100">
        <Header showButton={true} />
        <div className="z-10 border-red-500 px-5 md:px-32 flex items-center sticky top-20 md:top-32 ">
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

        <div className=" border-black  flex  md:justify-between py-16 md:py-14 md:p-10">
          <div className=" hidden md:block w-80 h-96  border-red-500 p-10 shadow-lg bg-white sticky left-0 top-56">
            <h1 className="font-semibold text-gray-600">Popular Searches</h1>
            {gender === "male" ? (
              <div>
                {mensProduct.map((prod) => (
                  <h2
                    className={`cursor-pointer my-2 px-1 py-1 border-black hover:bg-gray-200  ${
                      searchText === prod ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setSelectedType(prod)}
                  >
                    {prod}
                  </h2>
                ))}
              </div>
            ) : (
              <div>
                {womensProduct.map((prod) => (
                  <h2
                    className={`cursor-pointer my-2 px-1 py-1 border-black hover:bg-gray-200  ${
                      searchText === prod ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setSelectedType(prod)}
                  >
                    {prod}
                  </h2>
                ))}
              </div>
            )}
          </div>

          <div className="border-black w-full p-1 md:w-[70%]">
            <DelayedComponent>
              <div className="z-5 flex flex-wrap justify-center md:justify-normal gap-x-7 gap-y-7 md:gap-y-0 md:gap-x-10">
                {producttoShow.map((item) =>
                  item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                  item.category.includes(searchText.toLowerCase()) ? (
                    <div
                      key={item.id}
                      onClick={() => specificProductFunction(item.id)}
                      className=" md:w-96 m-2 cursor-pointer flex-col justify-between border md:justify-normal flex md:flex-row md:bg-gray-50 md:shadow-lg md:p-1 md:rounded-lg md:border-none"
                    >
                      <img
                        className="w-40 md:w-24 border-red-500 md:rounded-lg"
                        alt={item.name}
                        src={item.imageURL}
                      />
                      <ul className="md:ml-5  border-red-500 pl-1">
                        <li className=" border-blue-500 text-sm w text-gray-500">
                          {item.name}
                        </li>
                        <li className=" border-blue-500 ">Rs.{item.price}</li>
                        <ul className="flex text-sm text-gray-500 ">
                          {item.size.map((size, index) => (
                            <li key={index} className="mr-4 hover:text-black">
                              {size}
                            </li>
                          ))}
                        </ul>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            </DelayedComponent>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:block">
        <Footer />
      </div>{" "}
      <div className=" md:hidden w-full">
        <FooterMenu />
      </div>
    </>
  );
};

export default SearchPage;
