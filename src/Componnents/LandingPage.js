import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer/MainContainer";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Header showButton={true} />
      <MainContainer />
      <Footer />
    </>
  );
};

export default LandingPage;
