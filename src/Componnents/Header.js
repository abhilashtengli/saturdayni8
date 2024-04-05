import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcon } from "../Utils/Constants";
import sn_logo from "../Images/SN_logo.png";
import { Link } from "react-router-dom";
import saturdayni8 from "../Images/SATURDAYNI8.png";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import GenderButton from "./GenderButton";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 bg-white border-red-500 flex justify-between items-center p-3 shadow-lg">
        <Link to="/">
          {" "}
          <img
            className="w-20 ml-5  border-red-500 rounded-full"
            alt="sn_logo"
            src={sn_logo}
          />
        </Link>

        <Link to="/">
          <img className="w-60 ml-72 " alt="" src={saturdayni8} />
        </Link>
        <ul className=" border-red-400 flex items-center mr-10">
          <GenderButton />
          <li className=" border-red-400 px-2">
            <Link to="/profile">
              <FontAwesomeIcon
                className=" w-10 h-5  border-black p-2"
                icon={faUser}
              />
            </Link>
          </li>
          <li className=" border-red-400 px-2">
            <Link to="/searchPage">
              <FontAwesomeIcon
                className=" w-10 h-5 border-black p-2"
                icon={faMagnifyingGlass}
              />
            </Link>
          </li>
          <li className=" border-red-400 px-2">
            <Link to="/wishlist">
              <FontAwesomeIcon
                className=" w-10 h-5 border-black p-2"
                icon={faHeart}
              />
            </Link>
          </li>
          <li className=" border-red-400 px-2">
            <Link to="/cart">
              <FontAwesomeIcon
                className=" w-10 h-5 border-black p-2"
                icon={faCartShopping}
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
