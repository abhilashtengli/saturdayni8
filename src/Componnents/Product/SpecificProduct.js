import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../MainComponents/Header";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { addItem } from "../../ReduxStore/cartSlice";
import { addWishlistItem } from "../../ReduxStore/wishlistSlice";
import Footer from "../MainComponents/Footer";
import Products from "./Products";
import FooterMenu from "../FooterMenu";

const SpecificProduct = () => {
  const { id } = useParams();
  const womensData = useSelector((state) => state.product.womensProduct);
  const mensData = useSelector((state) => state.product.mensProduct);
  const [productToShow, setProductToShow] = useState([]);
  const [userQuantity, setQuantity] = useState(1);
  const [userSize, setSize] = useState();
  // const [wishlist, setToWishlist] = useState();
  const wishListItems = useSelector((state) => state.wishlist.items);
  const [isPresentInWishlist, setIsPresentInWishlist] = useState({});
  const dispatch = useDispatch();

  const addItemToCart = (item, userQuantity, userSize) => {
    dispatch(addItem({ item, userQuantity, userSize }));
  };

  const AddingToWishlist = (item, userQuantity, userSize) => {
    // setToWishlist(item);
    dispatch(addWishlistItem({ item, userQuantity, userSize }));
  };
  const settingTheSize = (s) => {
    setSize(s);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (userQuantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const combinedData = [...mensData, ...womensData];
    const filteredData = combinedData.filter((item) => item.id === id);
    setProductToShow(filteredData);

    const itemsExistInWishlist = wishListItems.some((item) => item.id === id);
    setIsPresentInWishlist(itemsExistInWishlist); // Set to true or false directly

    setSize("");
    // setToWishlist("");
  }, [id, mensData, womensData, wishListItems]);

  return (
    <>
      <Header />
      <div className=" border-red-600 md:px-10 md:mb-10 lg:pt-10">
        {productToShow.map((item) => (
          <div
            key={item.id}
            className="flex-col  flex md:flex-row justify-center "
          >
            <div className="md:w-[45%] border-black flex justify-center">
              <img
                alt={item.name}
                src={item.imageURL}
                className="md:w-[70%] md:h-[70%]"
              />
            </div>

            <div className=" border-black flex md:block justify-center items-center flex-col md:w-[50%] md:pl-10">
              <h1 className=" border-red-500 text-3xl py-2 tracking-widest text-center md:text-start">
                {item.name.toUpperCase()}
              </h1>
              <ul className="flex  text-gray-600 border-red-500 gap-x-5">
                <li className="py-2">{item.rating.average} ⭐ rating</li>
                <li className="py-2">{item.rating.count} reviews</li>
              </ul>
              <h1 className=" border-red-500 text-gray-600 pt-5">
                Rs.{item.price}/-
              </h1>
              <p className=" border-red-500 text-gray-600">
                (Incl. of all taxes)
              </p>
              <p className=" border-red-500 text-gray-600 tracking-widest md:pt-10">
                SELECT A SIZE
              </p>
              <ul className="flex md:w-0 w-full justify-center md:justify-normal pl-4 md:pl-0 border-red-500 text-gray-600 py-2">
                {item.size.map((s) => (
                  <li
                    key={s}
                    onClick={() => settingTheSize(s)}
                    className={`w-10 p-2 text-center ${
                      userSize === s
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white hover:scale-105"
                    } tracking-widest cursor-pointer mr-4 border border-black rounded-lg transition duration-300`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className=" mt-5">
                <h1 className="tracking-widest text-gray-600 text-sm">
                  QUANTITY
                </h1>
                <div className="border border-black flex md:mt-2 items-center md:w-fit mt-2 ">
                  <button
                    className="px-3 py-1 hover:bg-gray-200  "
                    onClick={() => decreaseQuantity()}
                  >
                    -
                  </button>
                  <div className="px-3 text-sm">{userQuantity}</div>
                  <button
                    className="px-3 py-1  hover:bg-gray-200 "
                    onClick={() => increaseQuantity()}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="w-full md:px-0 px-10  border-red-500 mt-10">
                {!userSize ? (
                  <button className="bg-gray-100 border text-gray-400 py-3 w-full  tracking-widest">
                    SELECT A SIZE
                  </button>
                ) : (
                  <button
                    onClick={() => addItemToCart(item, userQuantity, userSize)}
                    className="border  border-black transition duration-300 py-3 text-white bg-black w-full text- tracking-widest"
                  >
                    ADD TO CART
                  </button>
                )}
              </div>
              <div className="w-full  md:px-0 px-10 border-red-500 mt-5">
                {!isPresentInWishlist ? (
                  <button
                    onClick={() =>
                      AddingToWishlist(item, userQuantity, userSize)
                    }
                    className="flex justify-center text-gray-400 border bg-gray-100  py-3 w-full  tracking-widest"
                  >
                    <FontAwesomeIcon
                      className=" w-10 h-4 pt-1"
                      icon={faHeart}
                    />
                    <h1>Add to wishlist</h1>
                  </button>
                ) : (
                  <button className="border  border-black transition duration-300 py-3 text-white bg-black w-full text- tracking-widest">
                    ❤️ Added to wishlist
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Products param={""} limit={12} />
      <div className="flex justify-center py-10">
        <Link to="/searchpage">
          <button className="text-center  border border-gray-200  lg:mb-0 md:mb-0 mb-12  transition duration-200 text-black tracking-widest  hover:border-black px-4 py-1">
            View All
          </button>
        </Link>
      </div>
      <div className="hidden md:block lg:block">
        <Footer />
      </div>{" "}
      <div className="md:hidden w-full">
        <FooterMenu />
      </div>
    </>
  );
};

export default SpecificProduct;
