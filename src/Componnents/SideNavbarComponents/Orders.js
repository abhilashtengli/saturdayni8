import React from "react";
import { useSelector } from "react-redux";
import noOrder from "../../Images/no_orders.jpg";
import { Link } from "react-router-dom";
const Orders = ({ show }) => {
  const orders = useSelector((state) => state.order.items);

  return (
    <>
      {orders.length !== 0 ? (
        <div className={`md:p-5 p-2 ${show ? "block" : "hidden"}`}>
          {orders.map((item) => (
            <div className="  border-gray-300 border-b-2 pb-2 md:px-2 mb-5">
              <section className="flex justify-between items-center">
                <img className="w-16" alt={item.name} src={item.imageURL} />
                <div className="w-40  border-red-500">
                  <h1 className="text-gray-500 font-semibold text-sm">
                    {item.category.toUpperCase()}
                  </h1>
                  <h1 className="font-semibold text-xs text-gray-700">
                    {item.name}
                  </h1>
                  <h1 className="border border-gray-500 text-center text-gray-500 rounded-sm text-xs font-semibold w-6 h-5 mt-1">
                    {item.userSize}
                  </h1>
                </div>
                <h1>{item.userQuantity}</h1>
                <h1 className="text-sm font-semibold text-gray-700">
                  Rs.{item.userQuantity * item.price}/-
                </h1>
                <p className="text-black bg-green-400 font-semibold text-xs text-center  rounded-lg p-1 px-2 h-fit ">
                  Order placed
                </p>
              </section>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={` flex flex-col items-center justify-center rounded-xl ${
            show ? "block" : "hidden"
          }
         shadow-slate-200	border border-gray-300 shadow-lg `}
        >
          <img className="" alt="noOrder" src={noOrder} />
          <h1 className="text-center text-2xl text-gray-600">
            You have no orders
          </h1>
          <Link to="/searchPage">
            <button className=" rounded-sm my-5 p-2 shadow-slate-600 font-semibold	 shadow-lg bg-black text-sm text-white">
              Start Shopping
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Orders;
