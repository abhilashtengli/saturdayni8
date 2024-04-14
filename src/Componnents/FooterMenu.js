import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <>
      <div className="border-t-2 fixed bottom-0 right-0 left-0 border-gray-200 bg-white flex justify-between py-3 px-5">
        <Link to="/">
          <h1>
            <FontAwesomeIcon
              className=" w-7 h-7 text-black"
              icon={faHome}
            />
          </h1>
        </Link>
        <Link to="/profile">
          <h1>
            <FontAwesomeIcon
              className=" w-7 h-7 text-black"
              icon={faUser}
            />
          </h1>
        </Link>
        <Link to="/wishlist">
          <h1>
            <FontAwesomeIcon
              className=" w-7 h-7 text-black"
              icon={faHeart}
            />
          </h1>
        </Link>
        <Link to="/cart">
          <h1>
            <FontAwesomeIcon
              className=" w-7 h-7 text-black"
              icon={faCartShopping}
            />
          </h1>
        </Link>
      </div>
    </>
  );
};

export default FooterMenu;
