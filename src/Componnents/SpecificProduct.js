import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { addItem } from "../ReduxStore/cartSlice";
import { addWishlistItem } from "../ReduxStore/wishlistSlice";

const SpecificProduct = () => {
  const { id } = useParams();
  const womensData = useSelector((state) => state.product.womensProduct);
  const mensData = useSelector((state) => state.product.mensProduct);
  const [productToShow, setProductToShow] = useState([]);
  const [userQuantity, setQuantity] = useState(1);
  const [userSize, setSize] = useState();
  const [wishlist, setToWishlist] = useState();
  const cartItems = useSelector((state) => state.cart.items);
  const wishListItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const addItemToCart = (item, userQuantity, userSize) => {
    dispatch(addItem({ item, userQuantity, userSize }));
  };

  const AddingToWishlist = (item, userQuantity, userSize) => {
    setToWishlist(item);
    dispatch(addWishlistItem({ item, userQuantity, userSize }));
  };
  const settingTheSize = (s) => {
    setSize(s);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (userQuantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const combinedData = [...mensData, ...womensData];
    const filteredData = combinedData.filter((item) => item.id === id);
    setProductToShow(filteredData);

    const itemExistsInCart = cartItems.some((item) => item.id === id);
    const itemsExistInWishlist = wishListItems.some((item) => item.id === id);

    if (itemExistsInCart) {
      const userQuantity = cartItems.find(
        (item) => item.id === id
      ).userQuantity;
      setQuantity(userQuantity);
    } else if (itemsExistInWishlist) {
      const userQuantity = wishListItems.find(
        (item) => item.id === id
      ).userQuantity;
      setQuantity(userQuantity);
    } else {
      setQuantity(1);
    }
  }, [id, mensData, womensData, cartItems]);

  return (
    <>
      <Header />

      <div className=" border-red-600 p-10">
        {productToShow.map((item) => (
          <div key={item.id} className="flex justify-center ">
            <div className=" w-[50%] border-black flex justify-center">
              <img
                alt={item.name}
                src={item.imageURL}
                className="w-[75%] h-[80%]"
              />
            </div>

            <div className=" border-black w-[50%] pl-10">
              <h1 className=" border-red-500 text-3xl py-2 tracking-widest ">
                {item.name.toUpperCase()}
              </h1>
              <ul className="flex  text-gray-600 border-red-500 gap-x-5">
                <li className="py-2">{item.rating.average} ⭐ rating</li>
                <li className="py-2">{item.rating.count} reviews</li>
              </ul>
              <h1 className=" border-red-500 text-gray-600 pt-5">
                Rs.{item.price}/-
              </h1>
              <p className=" border-red-500 text-gray-600">
                (Incl. of all taxes)
              </p>
              <p className=" border-red-500 text-gray-600 tracking-widest pt-10">
                SELECT A SIZE
              </p>
              <ul className="flex  border-red-500 text-gray-600 py-2">
                {item.size.map((s) => (
                  <li
                    key={s}
                    onClick={() => settingTheSize(s)}
                    className={`w-10 p-2 text-center ${
                      userSize === s
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white hover:scale-105"
                    } tracking-widest cursor-pointer mr-4 border border-black rounded-lg transition duration-300`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className=" mt-5">
                <h1 className="tracking-widest text-gray-600 text-sm">
                  QUANTITY
                </h1>
                <div className="flex mt-2 items-center w-fit border ">
                  <button
                    className="px-3 py-1 hover:bg-gray-200  "
                    onClick={() => decreaseQuantity()}
                  >
                    -
                  </button>
                  <div className="px-3 text-sm">{userQuantity}</div>
                  <button
                    className="px-3 py-1  hover:bg-gray-200 "
                    onClick={() => increaseQuantity()}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className=" border-red-500 mt-10">
                {!userSize ? (
                  <button className="bg-gray-100 border text-gray-400 py-3 w-full  tracking-widest">
                    SELECT A SIZE
                  </button>
                ) : (
                  <button
                    onClick={() => addItemToCart(item, userQuantity, userSize)}
                    className="border  border-black transition duration-300 py-3 text-white bg-black w-full text- tracking-widest"
                  >
                    ADD TO CART
                  </button>
                )}
              </div>
              <div className=" border-red-500 mt-5">
                {!wishlist ? (
                  <button
                    onClick={() =>
                      AddingToWishlist(item, userQuantity, userSize)
                    }
                    className="flex justify-center text-gray-400 border bg-gray-100  py-3 w-full  tracking-widest"
                  >
                    <FontAwesomeIcon
                      className=" w-10 h-4 pt-1"
                      icon={faHeart}
                    />
                    <h1>Add to wishlist</h1>
                  </button>
                ) : (
                  <button className="border  border-black transition duration-300 py-3 text-white bg-black w-full text- tracking-widest">
                    ❤️ Added to wishlist
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SpecificProduct;
