import React from "react";
import Navbar from "../navbar/navbar";
import Banner from "../banner/banner";
import ProductCards from "../Product cards/ProductCards";
import Contact from "../contact/contact";
import Social from "../social/social";
import Footer from "../footer/footer";
const LandindIndex = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductCards />
      <Contact />
      <Social />
      <Footer />
    </div>
  );
};

export default LandindIndex;
