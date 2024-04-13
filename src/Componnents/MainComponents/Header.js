import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sn_logo from "../../Images/SN_logo.png";
import { Link } from "react-router-dom";
import saturdayni8 from "../../Images/SATURDAYNI8.png";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import GenderButton from "../Buttons/GenderButton";
import { useSelector } from "react-redux";

const Header = ({ showButton }) => {
  const cart = useSelector((state) => state.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="w-full z-10 sticky top-0 bg-white  border-red-500 flex justify-between items-center p-3 shadow-lg">
        <div className="md:flex md:items-center">
          <div className="px-2">
            <FontAwesomeIcon
              className=" md:hidden w-8 h-8 text-black"
              icon={faBars}
              onClick={toggleMenu}
            />
          </div>
          <Link to="/">
            <img
              className="hidden md:block md:w-20 md:ml-2 border-red-500 md:rounded-full"
              alt="sn_logo"
              src={sn_logo}
            />
          </Link>
        </div>

        <Link to="/">
          <img className="w-44 md:w-60 md:ml-60" alt="" src={saturdayni8} />
        </Link>
        <div className=" md:hidden">
          <GenderButton showButton={showButton} />
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex md:items-center md:mr-10  border-black md:gap-x-3">
            <GenderButton className="" showButton={showButton} />
            <li className="md:px-2">
              <Link to="/profile">
                <FontAwesomeIcon className="w-8 h-5 text-black" icon={faUser} />
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
            <li className="md:px-2">
              <Link to="/wishlist">
                <FontAwesomeIcon
                  className="md:w-8 md:h-5 text-black"
                  icon={faHeart}
                />
              </Link>
            </li>
            <li className="md:px-2">
              <Link to="/cart">
                <FontAwesomeIcon
                  className="md:w-8 md:h-5 text-black"
                  icon={faCartShopping}
                />
                <h1
                  className={`absolute top-3 right-4 bg-green-400 ${
                    cart.length === 0 ? "hidden" : "block"
                  } text-black font-semibold w-fit px-2 text-sm py-0 rounded-full`}
                >
                  {cart.length}
                </h1>
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <Link to="/searchpage">
              <FontAwesomeIcon
                className="w-8 h-8 text-black"
                icon={faMagnifyingGlass}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" z-10 md:hidden absolute top-[77px] right-0 left-0 bg-white shadow-md rounded-md transition duration-500 ease-in-out transform translate-x-0">
          <ul>
            <li className="px-4 py-2">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
