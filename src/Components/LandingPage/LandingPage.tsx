import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Works from "../Works/Works";
import ChooseCar from "../ChooseCar/ChooseCar";
import People from "../../People/People";
import Rentcar from "../Rentcar/Rentcar";
import Footer from "../Footer/Footer";
import CarsinLandingPage from "../CarsinLandingPage/CarsinLandingPage";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <CarsinLandingPage />
      <Works />
      <ChooseCar />
      <People />
      <Rentcar />
      <Footer />
    </div>
  );
}
