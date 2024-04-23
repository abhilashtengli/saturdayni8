import React from "react";
import Header from "./Header";
import MainContainer from "../MainContainer/MainContainer";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import FooterMenu from "../FooterMenu";

const LandingPage = () => {
  return (
    <>
      <Header showButton={true} />
        <MainContainer />
      <div className="flex justify-center py-10">
        <Link to="/searchpage">
          <button className="text-center border border-gray-200 lg:mb-0 md:mb-0 mb-12 transition duration-200 text-black tracking-widest  hover:border-black px-4 py-1">
            View All
          </button>
        </Link>
      </div>

      <div className="hidden md:block lg:block">
        <Footer />
      </div>
      <div className=" md:hidden w-full">
        <FooterMenu />
      </div>
    </>
  );
};

export default LandingPage;
