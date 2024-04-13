import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./MainComponents/LandingPage";
import Cart from "./MainComponents/Cart";
import Profile from "./MainComponents/Profile";
import SearchPage from "./MainComponents/SearchPage";
import Wishlist from "./MainComponents/Wishlist";
import SpecificProduct from "./Product/SpecificProduct";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/searchPage",
      element: <SearchPage />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },
    {
      path: "/specificProduct/:id",
      element: <SpecificProduct />,
    },
  ]);
  return (
    <div>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

export default Body;
