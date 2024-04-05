import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import Cart from "./Cart";
import Profile from "./Profile";
import SearchPage from "./SearchPage";
import Wishlist from "./Wishlist";

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
      path: "profile",
      element: <Profile />,
    },
    {
      path: "searchPage",
      element: <SearchPage />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
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
