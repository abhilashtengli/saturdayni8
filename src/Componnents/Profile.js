import React, { useState } from "react";
import Header from "./Header";
import DeliveryAddress from "./DeliveryAddress.js";
import Personaldetails from "./Personaldetails.js";
import { useNavigate } from "react-router-dom";
import Orders from "./Orders.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faLocationDot,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false); // State to control visibility of ProfileDetails
  const [showAddress, setShowAddress] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const navigate = useNavigate();
  const ProfileSetting = () => {
    setShowAddress(false);
    setShowOrder(false);
    setShowProfile(true);
  };
  const AddressSetting = () => {
    setShowAddress(true);
    setShowOrder(false);
    setShowProfile(false);
  };
  const OrderSetting = () => {
    setShowAddress(false);
    setShowOrder(true);
    setShowProfile(false);
  };

  const wishlistSetting = () => {
    navigate("/wishlist");
  };
  const LogoutUser = () => {};
  return (
    <>
      <Header />
      <div className="flex">
        <div className="  border-red-500 w-[35%] p-10 pt-20">
          <div className="flex justify-end">
            <ul className="border shadow-slate-400 rounded-xl border-gray-300 shadow-lg w-60">
              <li
                onClick={() => ProfileSetting(true)}
                className={`flex justify-start items-center  border-black ${
                  showProfile ? "font-bold text-black text-2xl" : ""
                }py-2 text-start my-10 pl-8  hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faUser}
                />
                Profile
              </li>
              <li
                onClick={() => AddressSetting(true)}
                className={` flex justify-start items-center ${
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
                className={` flex justify-start items-center py-2 text-start my-10 pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faHeart}
                />
                My Wishlist
              </li>
              <li
                onClick={() => LogoutUser(true)}
                className={` flex justify-start items-center py-2 text-start my-10 pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
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
        <div className=" border-red-500 w-[65%] py-16 pl-12 pr-44">
          <div className="">
            <h1 className="text-center text-3xl"> Helloo!!!</h1>
            <div className=" border-blue-500">
              <div className=" border-black">
                {<Personaldetails show={showProfile} />}
              </div>
              <div className=" border-black  p-10 ">
                {<DeliveryAddress show={showAddress} />}
              </div>
              <div className="border-black -mt-20">
                {<Orders show={showOrder} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
