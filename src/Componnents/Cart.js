import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../ReduxStore/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const data = useSelector((state) => state.cart.items);
  const [totalprice, setTotalPrice] = useState(0); // Initialize total price state
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeItem({ id }));
  };

  const settingTotalPrice = () => {
    dispatch(setTotalPrice(totalprice));
  };

  useEffect(() => {
    if (data) {
      const defaultQuantities = {};
      let totalPrice = 0;
      data.forEach((item) => {
        defaultQuantities[item.id] = item.userQuantity;
        totalPrice += item.userQuantity * item.price; // Calculate total price for each item
      });
      setSelectedQuantities(defaultQuantities);
      setTotalPrice(totalPrice); // Set the total price
    }
  }, [data]);

  const increaseQuantity = (itemId, itemPrice) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
    setTotalPrice((prevTotalPrice) => prevTotalPrice + itemPrice); // Increase total price
  };

  const decreaseQuantity = (itemId, itemPrice) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 1), // Ensure quantity is not less than 1
    }));

    // Only update the price and total price if the quantity is greater than 1
    if (selectedQuantities[itemId] > 1) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice - itemPrice); // Decrease total price
    }
  };

  return (
    <>
      <Header />
      <div className="border-red-500 border w-full py-24 px-56">
        <div className="border border-black flex">
          <div className="border border-blue-500 w-[70%] p-10">
            <header className=" flex justify-between items-center border-b-2 px-3 border-gray-200 pb-12">
              <h1 className="text-2xl font-bold text-gray-800">
                Shopping Cart
              </h1>
              <h1 className="font-semibold text-gray-500">
                {data.length} items
              </h1>
            </header>

            <div className=" border-red-600">
              {data.map((item) => (
                <div className="border-b-2 py-2 border-gray-200 flex justify-between items-center">
                  <img
                    className="w-20 p-3"
                    alt={item.name}
                    src={item.imageURL}
                  />
                  <div className="w-40  border-red-500">
                    <h1 className="text-gray-500 font-semibold text-sm">
                      {item.category.toUpperCase()}
                    </h1>
                    <h1 className="font-semibold text-sm text-gray-700">
                      {item.name}
                    </h1>
                    <h1 className="border border-gray-500 text-center text-gray-500 rounded-sm text-xs font-semibold w-6 h-5 mt-1">
                      {item.userSize}
                    </h1>
                  </div>

                  <div className="flex mt-2 items-center w-fit border ">
                    <button
                      className="px-3 py-1 hover:bg-gray-200  "
                      onClick={() => decreaseQuantity(item.id, item.price)}
                    >
                      -
                    </button>
                    <div className="px-3 text-sm">
                      {selectedQuantities[item.id]}
                    </div>
                    <button
                      className="px-3 py-1  hover:bg-gray-200 "
                      onClick={() => increaseQuantity(item.id, item.price)}
                    >
                      +
                    </button>
                  </div>
                  <h1 className="text-sm font-semibold text-gray-700">
                    Rs.{selectedQuantities[item.id] * item.price}/-
                  </h1>
                  <button
                    className="text-black text-lg w-6 h-6 flex mr-2 rounded-full justify-center cursor-pointer"
                    onClick={() => removeItemFromCart(item.id)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <h1 className="text-sm font-semibold text-gray-700">
              Total Price: Rs.{totalprice}/-
            </h1>
            <Link to="/searchpage">
              <h1 className="mt-5">⬅ Back to Shopping</h1>
            </Link>
          </div>

          <div className="border border-blue-500 w-[30%] p-5"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
