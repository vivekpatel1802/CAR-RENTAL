import React, { useEffect } from "react";
import PropTypes from "prop-types";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS if it's not already initialized
  }, []);


  const handleGetStartedClick = () => {
    alert("Get Started button clicked!");
  };


  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt="Car"
              className="sm:scale-125 relative max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Welcome to Black Buddy where convenience meets reliability.
              Whether you’re on a business trip, a family vacation, or a weekend getaway, we have the perfect vehicle for you.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Hero.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default Hero;
