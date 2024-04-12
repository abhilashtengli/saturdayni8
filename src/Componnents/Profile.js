import React, { useState } from "react";
import Header from "./Header";
import DeliveryAddress from "./DeliveryAddress.js";
import Personaldetails from "./Personaldetails.js";
import { list } from "../Utils/Constants";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false); // State to control visibility of ProfileDetails
  const [showAddress, setShowAddress] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const ProfileSetting = () => {
    setShowAddress(false);
    setShowOrder(false);
    setWishlist(false);
    setShowProfile(true);
  };
  const AddressSetting = () => {
    setShowAddress(true);
    setShowOrder(false);
    setWishlist(false);
    setShowProfile(true);
  };
  const OrderSetting = () => {
    setShowAddress(false);
    setShowOrder(true);
    setWishlist(false);
    setShowProfile(true);
  };

  const wishlistSetting = () => {
    setShowAddress(false);
    setShowOrder(true);
    setWishlist(true);
    setShowProfile(true);
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
                className="py-2 text-start my-10 pl-10 hover:text-black hover:font-semibold cursor-pointer text-gray-700"
              >
                Profile
              </li>
              <li
                onClick={() => AddressSetting(true)}
                className="py-2 text-start my-10 pl-10 hover:text-black hover:font-semibold cursor-pointer text-gray-700"
              >
                Deliver Address
              </li>
              <li
                onClick={() => OrderSetting(true)}
                className="py-2 text-start my-10 pl-10 hover:text-black hover:font-semibold cursor-pointer text-gray-700"
              >
                My Orders
              </li>
              <li
                onClick={() => wishlistSetting(true)}
                className="py-2 text-start my-10 pl-10 hover:text-black hover:font-semibold cursor-pointer text-gray-700"
              >
                My Wishlist
              </li>
              <li
                onClick={() => LogoutUser(true)}
                className="py-2 text-start my-10 pl-10 hover:text-black hover:font-semibold cursor-pointer text-gray-700"
              >
                Log Out
              </li>
            </ul>
          </div>
        </div>
        <div className=" border-red-500 w-[75%] py-16 pl-12 pr-44">
          <div className="">
            <h1 className="text-center text-3xl"> Helloo!!!</h1>
            <div className="border border-blue-500">
              <div className="border border-black">
                {<Personaldetails show={showProfile} />}
              </div>
              <div className="border border-black  p-10 ">
                {<DeliveryAddress show={showAddress} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
