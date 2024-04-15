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
import FooterMenu from "../FooterMenu";

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
      <div className="md:flex ">
        <div className="border-red-500 md:w-[25%] md:p-10 md:pt-20 mt-10 md:mt-0 px-3 md:px-0 ">
          <div className="md:flex md:justify-end ">
            <ul className="md:gap-x-0 md:gap-y-0 gap-x-3 flex justify-between md:px-0 px-5 md:py-0 py-3  md:block  border shadow-slate-200 md:rounded-xl w-full md:border-gray-300 shadow-lg md:w-60">
              <li
                onClick={() => ProfileSetting(true)}
                className={` flex md:flex-row flex-col justify-start items-center ${
                  showProfile ? "font-bold text-black text-2xl" : ""
                }py-2 text-start md:my-10 md:pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faUser}
                />
                Profile
              </li>
              <li
                onClick={() => AddressSetting(true)}
                className={`hidden md:flex justify-start items-center ${
                  showAddress ? "font-bold text-black text-2xl" : ""
                }py-2 text-start my-10 pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faLocationDot}
                />
                Address
              </li>
              <li
                onClick={() => OrderSetting(true)}
                className={` flex md:flex-row flex-col justify-start items-center ${
                  showOrder ? "font-bold text-black text-2xl" : ""
                }py-2 text-start md:my-10 md:pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faBagShopping}
                />
                Orders
              </li>
              <li
                onClick={() => wishlistSetting(true)}
                className={` flex md:flex-row flex-col justify-start items-center ${
                  showWishlist ? "font-bold text-black text-2xl" : ""
                }py-2 text-start md:my-10 md:pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faHeart}
                />
                Wishlist
              </li>
              <li
                onClick={() => LogoutUser(true)}
                className="hidden md:flex justify-start items-center py-2 text-start my-10 pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700"
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
          className={`w-full  border-red-500 md:w-[65%] nd:py-24 py-20 md:pl-10 md:px-0 px-5 ${
            showWishlist ? "block" : "hidden"
          }`}
        >
          <div className="w-full  border-red-500 lg:mt-0 -mt-16">
            {data !== null && data.length > 0 ? (
              <div>
                <ul className="flex flex-wrap md:w-full lg:w-[90%] gap-y-3 gap-x-3 justify-center md:justify-normal lg:ml-5 lg:p-5 p-2  rounded-xl shadow-slate-200	border  border-gray-300 shadow-lg ">
                  {data &&
                    data.map((item, index) => (
                      <li
                        key={index}
                        className="flex w-fit md:hover:scale-105 transition duration-300 flex-col md:m-2 items-center rounded-xl shadow-slate-200	 border  lg:border-gray-200 px-2 py-2  shadow-lg lg:w-60 md:p-5"
                      >
                        <button
                          className="absolute md:-top-3 md:-right-3 md:ml-0 ml-40 md:mt-0 -mt-4 bg-black text-white  w-6 h-7 rounded-full  flex justify-center cursor-pointer"
                          onClick={() => removeItemFromWishlist(item.id)} // Call removeItemFromWishlist function
                        >
                          x
                        </button>
                        <h1 className="mb-2 md:tracking-widest tracking-wide">
                          {item.name}
                        </h1>
                        <img
                          onClick={() => specificProductFunction(item.id)}
                          className="md:w-20 w-12 cursor-pointer"
                          alt={item.name}
                          src={item.imageURL}
                        />
                        <p className="tracking-wider text-xs md:font-semibold md:mt-2 mt-1">
                          Rs.{item.price}/-
                        </p>
                        <ul className="flex gap-x-1 md:gap-x-3 border-red-500  justify-center items-center text-gray-600 md:py-2 py-1">
                          {item.size.map((s) => (
                            <li
                              key={s}
                              onClick={() => setSizeForItem(item.id, s)}
                              className={`w-8 text-xs md:p-1 p-0.5 text-center ${
                                selectedSizes[item.id] === s
                                  ? "bg-black text-white"
                                  : "hover:bg-black hover:text-white hover:scale-105"
                              } tracking-widest cursor-pointer  border border-black rounded-lg transition duration-300`}
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
                        <div className="w-full md:mt-5 mt-2">
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
                <div className="flex flex-col items-center justify-start md:w-[80%] h-full md:ml-5 p-5 md:rounded-xl shadow-slate-200	border border-gray-300 shadow-lg ">
                  <img className="w-44" alt="cart_img" src={cart_img} />
                  <p className=" my-5 md:w-[50%] text-center font-semibold text-gray-600">
                    Your desires are our priority, but alas, your wishlist is
                    yet to be adorned with treasures.
                  </p>
                  <p className="font-semibold text-gray-600 text-center">
                    You can curate a list and buy items later
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
          className={` border-red-500 md:w-[75%] mt-20 md:mt-0 md:py-32 md:pr-32 md:pl-10 md:px-0 px-5 ${
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
          className={`border-red-500 md:w-[65%] md:py-32 md:pr-32 md:pl-10 mt-32 md:mt-0 md:px-0 px-5 ${
            showOrder ? "block" : "hidden"
          } `}
        >
          <div className="  md:-mt-11 -mt-14">
            {<Orders show={showOrder} />}
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

export default Wishlist;
