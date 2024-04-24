import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ms_logo from "../../Images/MS_logo.png";
import { Link } from "react-router-dom";
import modissh from "../../Images/MODISSH.png";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import GenderButton from "../Buttons/GenderButton";
import { useSelector } from "react-redux";

const Header = ({ showButton }) => {
  const cart = useSelector((state) => state.cart.items);
  const wishlist = useSelector((state) => state.wishlist.items);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full z-30 sticky top-0 bg-white  border-red-500 flex justify-between items-center p-3 shadow-lg">
        <div className="md:flex md:items-center justify-between">
          <div className="px-2">
            {!menuOpen ? (
              <FontAwesomeIcon
                className=" md:hidden w-5 h-8 text-black"
                icon={faBars}
                onClick={toggleMenu}
              />
            ) : (
              <FontAwesomeIcon
                className=" md:hidden w-5 h-8 text-black"
                icon={faXmark}
                onClick={toggleMenu}
              />
            )}
          </div>
          <Link to="/" onClick={() => scollUp()}>
            <img
              className="hidden md:block md:w-20 md:ml-2 border-red-500 md:rounded-full"
              alt="ms_logo"
              src={ms_logo}
            />
          </Link>
        </div>

        <Link to="/" onClick={() => scollUp()}>
          <img
            className="w-24 md:block ml-1 md:w-60 lg:ml-60  border-red-500"
            alt=""
            src={modissh}
          />
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
                <h1
                  className={`absolute top-7 right-28 bg-red-500 ${
                    wishlist.length === 0 ? "hidden" : "block"
                  } text-black font-semibold w-fit px-2 text-xs py-0 rounded-full`}
                >
                  {wishlist.length}
                </h1>
              </Link>
            </li>
            <li className="md:px-2">
              <Link to="/cart">
                <FontAwesomeIcon
                  className="md:w-7 md:h-5 text-black"
                  icon={faCartShopping}
                />
                <h1
                  className={`absolute md:top-7 md:right-12 bg-green-400 ${
                    cart.length === 0 ? "hidden" : "block"
                  } text-black font-semibold w-fit px-2 text-xs py-0 rounded-full`}
                >
                  {cart.length}
                </h1>
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <Link to="/searchpage">
              <FontAwesomeIcon
                className="w-6 h-6 text-black"
                icon={faMagnifyingGlass}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`animate-top-to-bottom  z-20 fixed md:hidden  top-[59px] right-0 left-0 bg-white shadow-md rounded-bl-md rounded-br-md transition duration-500 ease-in-out transform translate-x-0`}
        >
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
            <li className="px-4 py-2">
              <Link to="/">Contact Us</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/">FAQ's</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/">Track order</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
