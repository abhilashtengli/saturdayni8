import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import {
  clearItem,
  removeItem,
  setTotalProductPrice,
} from "../../ReduxStore/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { addItems } from "../../ReduxStore/orderSlice";
import Footer from "./Footer";
import FooterMenu from "../FooterMenu";

const Cart = () => {
  const data = useSelector((state) => state.cart.items);
  const [totalprice, setTotalPrice] = useState(0); // Initialize total price state
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [shippingPrice, setShippingPrice] = useState();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeItem({ id }));
  };

  const settingTotalPrice = () => {
    setOrderPlaced(true);
    dispatch(setTotalProductPrice(totalprice + 69));
    const totalPrice = totalprice + 69;
    dispatch(addItems({ totalPrice, data }));
    dispatch(clearItem());
  };

  useEffect(() => {
    if (data) {
      const defaultQuantities = {};
      let totalPrice = 0;
      data.forEach((item) => {
        defaultQuantities[item.id] = item.userQuantity;
        totalPrice += item.userQuantity * item.price; // Calculate total price for each item
      });
      setShippingPrice(69);
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
  const specificProductFunction = (id) => {
    navigate(`/specificProduct/${id}`);
  };

  return (
    <>
      <Header />
      {orderPlaced ? (
        <h1 className=" border-black top-10 right-10 text-2xl text-white font-bold bg-green-400 py-2 text-center">
          Order placed
        </h1>
      ) : (
        ""
      )}
      <div className=" border-red-500  w-full md:py-20 md:bg-gray-100 md:px-60 px-1 md:mt-0 mt-10">
        <div className=" md:flex border rounded-tl-2xl md:rounded-tr-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl md:border-gray-200 shadow-2xl md:rounded-2xl">
          <div className=" md:w-[72%] md:p-10 md:rounded-tl-2xl md:rounded-bl-2xl rounded-tl-2xl  md:rounded-tr-none rounded-tr-2xl  bg-white pb-10">
            <header className=" flex justify-between items-center border-b-2 px-3 border-gray-200 md:py-0 py-5 md:pb-12">
              <h1 className="text-2xl font-bold text-gray-800">
                Shopping Cart
              </h1>
              <h1 className="font-semibold text-gray-500">
                {data.length} items
              </h1>
            </header>

            <div className=" border-red-600">
              {data.map((item) => (
                <div className="md:border-b-2 py-2 md:border-gray-200  flex justify-between md:items-center">
                  <img
                    onClick={() => specificProductFunction(item.id)}
                    className="w-20 p-3 cursor-pointer"
                    alt={item.name}
                    src={item.imageURL}
                  />
                  <div className="w-40  border-red-500 pt-4 md:pt-0 ">
                    <h1 className="text-gray-500 font-semibold text-xs">
                      {item.category.toUpperCase()}
                    </h1>
                    <h1 className="font-semibold text-xs text-gray-700">
                      {item.name}
                    </h1>
                    <h1 className="border border-gray-500 text-center text-gray-500 rounded-sm text-xs font-semibold w-6 h-5 mt-1">
                      {item.userSize}
                    </h1>
                  </div>

                  <div className="flex md:mt-2 items-center w-fit h-fit border mt-10 md:mr-0  ">
                    <button
                      className="md:px-3 px-1.5 py-0.5 md:py-1 hover:bg-gray-200  "
                      onClick={() => decreaseQuantity(item.id, item.price)}
                    >
                      -
                    </button>
                    <div className="md:px-3 px-0.5 text-sm">
                      {selectedQuantities[item.id]}
                    </div>
                    <button
                      className="md:px-3 px-1 py-0.5 md:py-1  hover:bg-gray-200 "
                      onClick={() => increaseQuantity(item.id, item.price)}
                    >
                      +
                    </button>
                  </div>
                  <h1 className="text-sm font-semibold md:ml-0 ml-4 mt-12 md:mt-0 text-gray-700">
                    Rs.{selectedQuantities[item.id] * item.price}/-
                  </h1>
                  <button
                    className="text-white bg-black border border-black  text-lg w-6 h-6 flex items-center justify-center pb-1 mr-2 rounded-full cursor-pointer"
                    onClick={() => removeItemFromCart(item.id)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <Link to="/searchpage">
              <h1 className="mt-5">⬅ Back to Shopping</h1>
            </Link>
          </div>

          <div className="border-blue-500 md:w-[28%] md:mt-0 px-2 bg-gray-200 md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-none rounded-bl-2xl rounded-br-2xl pb-10 md:pt-0 pt-5">
            <header className="md:border-gray-200  md:border-b-2 md:h-28 mt-2 flex items-center md:pt-10 ">
              <h1 className=" border-red-500 text-xl  font-semibold pl-5">
                Summary
              </h1>
            </header>
            <div className="tracking-wider border-black px-5 flex justify-between mt-5 font-semibold text-gray-600">
              <h1 className="">ITEMS {data.length}</h1>
              <h1>Rs.{totalprice}/-</h1>
            </div>
            <div className="tracking-wider border-black px-5 flex justify-between mt-5 font-semibold text-gray-600">
              <h1 className="text-sm">SHIPPING </h1>
              {data.length !== 0 ? (
                <h1>Rs.{shippingPrice}/-</h1>
              ) : (
                <h1>Rs.0/-</h1>
              )}
            </div>
            <div className="tracking-wider border-t-2 border-gray-200 px-5 flex justify-between mt-5 font-semibold py-5 text-gray-600">
              <h1 className="">TOTAL PRICE</h1>
              {data.length !== 0 ? (
                <h1>Rs.{totalprice + shippingPrice} /-</h1>
              ) : (
                <h1>Rs.{totalprice} /-</h1>
              )}
            </div>
            <div className=" border-red-500 flex justify-center px-5 mt-5">
              <button
                onClick={() => settingTotalPrice()}
                className="border border-black w-full py-1 bg-black text-white "
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <div className=" md:hidden w-full">
        <FooterMenu />
      </div>
    </>
  );
};

export default Cart;
