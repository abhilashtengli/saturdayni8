import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  const cart = useSelector((state) => state.cart.items);
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <>
      <div className="border-t-2 fixed bottom-0 right-0 left-0 border-gray-200 bg-white flex justify-between py-3 px-5">
        <Link to="/">
          <h1>
            <FontAwesomeIcon className=" w-7 h-7 text-black" icon={faHome} />
          </h1>
        </Link>
        <Link to="/profile">
          <h1>
            <FontAwesomeIcon className=" w-7 h-7 text-black" icon={faUser} />
          </h1>
        </Link>
        <Link to="/wishlist">
          <h1>
            <FontAwesomeIcon className=" w-7 h-7 text-black" icon={faHeart} />
          </h1>
          <h1
            className={`absolute top-1 ml-4 bg-red-500 ${
              wishlist.length === 0 ? "hidden" : "block"
            } text-black font-semibold w-fit px-2 text-xs py-0 rounded-full`}
          >
            {wishlist.length}
          </h1>
        </Link>
        <Link to="/cart">
          <h1>
            <FontAwesomeIcon
              className=" w-7 h-7 text-black"
              icon={faCartShopping}
            />
          </h1>
          <h1
            className={`absolute top-1 right-2 bg-green-400 ${
              cart.length === 0 ? "hidden" : "block"
            } text-black font-semibold w-fit px-2 text-xs py-0 rounded-full`}
          >
            {cart.length}
          </h1>
        </Link>
      </div>
    </>
  );
};

export default FooterMenu;
