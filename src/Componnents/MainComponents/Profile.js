import React, { useState } from "react";
import Header from "./Header.js";
import DeliveryAddress from "../SideNavbarComponents/DeliveryAddress.js";
import Personaldetails from "../SideNavbarComponents/Personaldetails.js";
import { useNavigate } from "react-router-dom";
import Orders from "../SideNavbarComponents/Orders.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faLocationDot,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer.js";
import FooterMenu from "../FooterMenu.js";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false); // State to control visibility of ProfileDetails
  const [showAddress, setShowAddress] = useState(false);
  const [showOrder, setShowOrder] = useState(true);
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
      <div className="md:flex">
        <div className=" border-red-500 md:w-[25%] md:p-10 md:pt-20 mt-10 md:px-0 px-5">
          <div className="md:flex md:justify-end">
            <ul className="md:gap-x-0 md:gap-y-0 gap-x-3 flex justify-between md:px-0 px-5 md:py-0 py-7 md:block  border  shadow-slate-200 md:rounded-xl w-full md:border-gray-300 shadow-lg md:w-60">
              <li
                onClick={() => ProfileSetting(true)}
                className={`flex flex-col  md:flex-row justify-center  md:justify-start items-center  border-black ${
                  showProfile ? "font-bold text-black text-2xl" : ""
                }md:py-2 text-start md:my-10 md:pl-8 w-fit md:w-full hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" md:w-10 md:h-5  border-black md:p-2"
                  icon={faUser}
                />
                <h1 className="  border-black text-center">Profile</h1>
              </li>
              <li
                onClick={() => AddressSetting(true)}
                className={` border-black flex flex-col justify-center md:flex-row md:justify-start items-center ${
                  showAddress ? "font-bold text-black text-2xl" : ""
                }md:py-2 text-start md:my-10 md:pl-8 md:w-full hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" md:w-10 md:h-5 border-black  md:p-2"
                  icon={faLocationDot}
                />
                <h1 className="  border-black text-center">Address</h1>
              </li>
              <li
                onClick={() => OrderSetting(true)}
                className={` border-black flex justify-center md:flex-row flex-col md:justify-start items-center ${
                  showOrder ? "font-bold text-black text-2xl" : ""
                }md:py-2 text-start md:my-10 md:pl-8   hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" md:w-10 md:h-5 border-black md:p-2"
                  icon={faBagShopping}
                />
                <h1 className="  border-black text-center">Orders</h1>
              </li>
              <li
                onClick={() => wishlistSetting(true)}
                className={` hidden border-black md:flex w-fit md:w-full justify-start items-center py-2 text-start md:my-10 md:pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
              >
                <FontAwesomeIcon
                  className=" w-10 h-5 border-black p-2"
                  icon={faHeart}
                />
                My Wishlist
              </li>
              <li
                onClick={() => LogoutUser(true)}
                className={` hidden border-black md:flex justify-start items-center py-2 text-start md:my-10 md:pl-8 hover:text-black hover:font-semibold cursor-pointer text-gray-700`}
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
        <div className="border-red-500 w-full md:w-[75%] py-10 px-5 md:px-0 md:pl-12 md:pr-44">
          <div className="">
            <h1 className="text-center text-3xl"> Helloo!!!</h1>
            <div className=" border-blue-500">
              <div className=" border-black">
                {<Personaldetails show={showProfile} />}
              </div>
              <div className=" border-black  md:p-10 ">
                {<DeliveryAddress show={showAddress} />}
              </div>
              <div className="border-black  md:-mt-9">
                {<Orders show={showOrder} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      <div className="  md:hidden w-full">
        <FooterMenu />
      </div>
    </>
  );
};

export default Profile;
