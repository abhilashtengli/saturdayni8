import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Product = ({ param, limit }) => {
  const womendataProduct = useSelector((state) => state.product.womensProduct);
  const menDataProduct = useSelector((state) => state.product.mensProduct);
  const gender = useSelector((state) => state.user.gender);

  const [producttoShow, setProductToShow] = useState([]);
  useEffect(() => {
    if (gender === "male") {
      setProductToShow(menDataProduct);
    } else {
      setProductToShow(womendataProduct);
    }
  }, [gender, menDataProduct, womendataProduct]);

  return (
    <>
      {param === "" ? (
        <div className="flex flex-wrap   px-20 gap-x-4 gap-y-5">
          {producttoShow.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="cursor-pointer flex flex-col justify-between border-gray-200 border"
            >
              <img
                className="w-80 h-fit "
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
        <div className="flex flex-wrap  px-20 gap-x-4 gap-y-5">
          {producttoShow
            .filter(
              (item) =>
                item.name.toLowerCase().includes(param.toLowerCase()) ||
                item.category.toLowerCase().includes(param.toLowerCase())
            )
            .slice(0, 4)
            .map((item) => (
              <div
                key={item.id}
                className=" cursor-pointer flex flex-col justify-between border-gray-200 border"
              >
                <img
                  className="w-80 h-fit "
                  alt={item.name}
                  src={item.imageURL}
                />
                <ul className="pl-1">
                  <li className="text-gray-700">{item.name}</li>
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
    </>
  );
};

export default Product;
