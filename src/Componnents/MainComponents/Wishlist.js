import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import cart_img from "../../Images/cart_img.png";
import { Link } from "react-router-dom";
import { addItem } from "../../ReduxStore/cartSlice";
import { removeWishlistItem } from "../../ReduxStore/wishlistSlice";
import Personaldetails from "../SideNavbarComponents/Personaldetails";
import DeliveryAddress from "../SideNavbarComponents/DeliveryAddress";
import Orders from "../SideNavbarComponents/Orders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faLocationDot,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Wishlist = () => {
  const data = useSelector((state) => state.wishlist.items);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showProfile, setShowProfile] = useState(false); // State to control visibility of ProfileDetails
  const [showAddress, setShowAddress] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showWishlist, setShowWishlist] = useState(true);

  const ProfileSetting = () => {
    setShowProfile(true);
    setShowAddress(false);
    setShowOrder(false);
    setShowWishlist(false);
  };
  const AddressSetting = () => {
    setShowAddress(true);
    setShowOrder(false);
    setShowProfile(false);
    setShowWishlist(false);
  };
  const OrderSetting = () => {
    setShowAddress(false);
    setShowOrder(true);
    setShowProfile(false);
    setShowWishlist(false);
  };

  const wishlistSetting = () => {
    setShowAddress(false);
    setShowOrder(false);
    setShowProfile(false);
    setShowWishlist(true);
  };
  const LogoutUser = () => {};

  useEffect(() => {
    if (data) {
      const defaultQuantities = {};
      data.forEach((item) => {
        defaultQuantities[item.id] = 1;
      });
      setSelectedQuantities(defaultQuantities);
    }
  }, [data]);

  const addItemToCart = (item) => {
    const userQuantity = selectedQuantities[item.id];
    const userSize = selectedSizes[item.id];
    dispatch(addItem({ item, userQuantity, userSize }));
  };

  const removeItemFromWishlist = (id) => {
    dispatch(removeWishlistItem({ id }));
  };

  const setSizeForItem = (itemId, size) => {
    setSelectedSizes((prevState) => ({
      ...prevState,
      [itemId]: size,
    }));
  };

  const increaseQuantity = (itemId) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 1),
    }));
  };

  const specificProductFunction = (id) => {
    navigate(`/specificProduct/${id}`);
  };

  return (
    <>
      <Header />
      <div className="flex ">
        <div className="border-red-500 w-[25%] p-10 pt-20">
          <div className="flex justify-end ">
            <ul className="border shadow-slate-400 rounded-xl border-gray-300 shadow-lg w-60">
              <li
                onClick={() => ProfileSetting(true)}
                className={` flex justify-start items-center ${
                  showProfile ? "font-bold text-black text-2xl" : ""
                }py-2 text-start my-10 pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faUser}
                />
                Profile
              </li>
              <li
                onClick={() => AddressSetting(true)}
                className={`flex justify-start items-center ${
                  showAddress ? "font-bold text-black text-2xl" : ""
                }py-2 text-start my-10 pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faLocationDot}
                />
                Deliver Address
              </li>
              <li
                onClick={() => OrderSetting(true)}
                className={` flex justify-start items-center ${
                  showOrder ? "font-bold text-black text-2xl" : ""
                }py-2 text-start my-10 pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faBagShopping}
                />
                My Orders
              </li>
              <li
                onClick={() => wishlistSetting(true)}
                className={` flex justify-start items-center ${
                  showWishlist ? "font-bold text-black text-2xl" : ""
                }py-2 text-start my-10 pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faHeart}
                />
                My Wishlist
              </li>
              <li
                onClick={() => LogoutUser(true)}
                className="flex justify-start items-center py-2 text-start my-10 pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700"
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faPowerOff}
                />
                Log Out
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`  border-red-500 w-[65%] py-24 pl-10 ${
            showWishlist ? "block" : "hidden"
          }`}
        >
          <div className=" w-full border-red-500">
            {data !== null && data.length > 0 ? (
              <div>
                <ul className="flex flex-wrap w-[90%] ml-5 p-5 rounded-xl shadow-slate-200	border border-gray-300 shadow-lg ">
                  {data &&
                    data.map((item, index) => (
                      <li
                        key={index}
                        className="flex hover:scale-105 transition duration-300 flex-col m-2 items-center rounded-xl shadow-slate-300	border border-gray-300  shadow-lg w-60 p-5"
                      >
                        <button
                          className="absolute -top-3 -right-3 bg-black text-white  w-6 h-7 rounded-full  flex justify-center cursor-pointer"
                          onClick={() => removeItemFromWishlist(item.id)} // Call removeItemFromWishlist function
                        >
                          x
                        </button>
                        <h1 className="mb-2 tracking-widest">{item.name}</h1>
                        <img
                          onClick={() => specificProductFunction(item.id)}
                          className="w-20 cursor-pointer"
                          alt={item.name}
                          src={item.imageURL}
                        />
                        <p className="tracking-wider">Rs.{item.price}/-</p>
                        <ul className="flex  border-red-500 text-gray-600 py-2">
                          {item.size.map((s) => (
                            <li
                              key={s}
                              onClick={() => setSizeForItem(item.id, s)}
                              className={`w-8 text-xs p-1 text-center ${
                                selectedSizes[item.id] === s
                                  ? "bg-black text-white"
                                  : "hover:bg-black hover:text-white hover:scale-105"
                              } tracking-widest cursor-pointer mr-4 border border-black rounded-lg transition duration-300`}
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                        <div className="border mt-2 w-full flex  border-blue-200 items-center rounded-lg bg-blue-200 justify-between ">
                          <button
                            className="px-3 py-1 hover:bg-white rounded-bl-lg rounded-tl-lg hover:text-black"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <div className="px-3 py-1 text-sm">
                            {selectedQuantities[item.id]}
                          </div>
                          <button
                            className="px-3 py-1  hover:bg-white rounded-br-lg rounded-tr-lg hover:text-black "
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="w-full mt-5">
                          {!selectedSizes[item.id] ? (
                            <button className="bg-gray-100 border text-sm text-gray-400 w-full py-1  tracking-widest">
                              SELECT A SIZE
                            </button>
                          ) : (
                            <button
                              onClick={() => addItemToCart(item)}
                              className="transition duration-300 text-white py-1 bg-black text-sm font-semibold w-full tracking-widest"
                            >
                              ADD TO CART
                            </button>
                          )}
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              <div>
                <div className="flex flex-col items-center justify-start w-[80%] h-full ml-5 p-5 rounded-xl shadow-slate-200	border border-gray-300 shadow-lg ">
                  <img className="w-44" alt="cart_img" src={cart_img} />
                  <p className=" my-5 w-[50%] text-center font-semibold text-gray-600">
                    Your desires are our priority, but alas,
                    <br /> your wishlist is yet to be adorned with treasures.
                  </p>
                  <p className="font-semibold text-gray-600">
                    You can curate a list and buy items later{" "}
                  </p>
                  <Link to="/searchPage">
                    <button className=" rounded-sm my-5 p-2 shadow-slate-600 font-semibold	 shadow-lg bg-black text-sm text-white">
                      View product
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={`border-red-500 w-[75%] py-32 pr-32 pl-10 ${
            showProfile ? "block" : "hidden"
          } `}
        >
          <div className="">{<Personaldetails show={showProfile} />}</div>
        </div>
        <div
          className={`border-red-500 w-[65%] py-32 pr-32 pl-10 ${
            showAddress ? "block" : "hidden"
          } `}
        >
          <div className=" border-black px-14">
            {<DeliveryAddress show={showAddress} />}
          </div>
        </div>
        <div
          className={`border-red-500 w-[65%] py-32 pr-32 pl-10 ${
            showOrder ? "block" : "hidden"
          } `}
        >
          <div className="  -mt-14">{<Orders show={showOrder} />}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
