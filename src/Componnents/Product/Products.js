import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DelayedComponent from "../DelayComponent/DelayedComponent";

const Products = ({ param, limit }) => {
  const womendataProduct = useSelector((state) => state.product.womensProduct);
  const menDataProduct = useSelector((state) => state.product.mensProduct);
  const gender = useSelector((state) => state.user.gender);
  const navigate = useNavigate();
  const [producttoShow, setProductToShow] = useState([]);

  useEffect(() => {
    if (gender === "male") {
      setProductToShow(menDataProduct);
    } else {
      setProductToShow(womendataProduct);
    }
  }, [gender, menDataProduct, womendataProduct]);

  const specificProductFunction = (id) => {
    navigate(`/specificProduct/${id}`);
  };

  return (
    <>
      <DelayedComponent>
        {param === "" ? (
          <div className="flex flex-wrap justify-center lg:justify-normal gap-x-7 gap-y-7 py-5 md:py-0  md:px-20  md:gap-x-4 md:gap-y-5  border-black">
            {producttoShow.slice(0, limit).map((item) => (
              <div
                key={item.id}
                onClick={() => specificProductFunction(item.id)}
                className="cursor-pointer border flex flex-col justify-between border-gray-200"
              >
                <img
                  className="w-40 md:w-60 lg:w-80 h-fit "
                  alt={item.name}
                  src={item.imageURL}
                />
                <ul className="pl-1">
                  <li className="text-gray-700 ">{item.name}</li>
                  <li className="text-sm text-gray-700">Rs.{item.price}</li>
                  <li className="text-sm font-semibold text-gray-500 my-1">
                    <ul className="flex">
                      {item.size.map((size) => (
                        <li className="mr-4 hover:text-black">{size}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center md:justify-normal gap-x-7 gap-y-7 py-5 md:py-0  md:px-20  md:gap-x-4 md:gap-y-5  ">
            {producttoShow
              .filter(
                (item) =>
                  item.name.toLowerCase().includes(param.toLowerCase()) ||
                  item.category.toLowerCase().includes(param.toLowerCase())
              )
              .slice(0, limit)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => specificProductFunction(item.id)}
                  className=" cursor-pointer flex flex-col justify-between border-gray-200 border"
                >
                  <img
                    className=" w-40 md:w-80 h-fit "
                    alt={item.name}
                    src={item.imageURL}
                  />
                  <ul className="pl-1">
                    <li className="text-gray-700 overflow-auto">{item.name}</li>
                    <li className="text-sm text-gray-700">Rs.{item.price}</li>
                    <li className="text-sm font-semibold text-gray-500 my-1">
                      <ul className="flex">
                        {item.size.map((size, index) => (
                          <li key={index} className="mr-4 hover:text-black">
                            {size}
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        )}
      </DelayedComponent>
    </>
  );
};

export default Products;
