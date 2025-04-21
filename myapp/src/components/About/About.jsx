import React from "react";
import CarPng from "../../assets/car1.png";
// import Navbar from "../Navbar/Navbar.jsx"
const About = () => {

  const handleGetStartedClick = () => {
    alert("Get Started button clicked!");
  };

  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">

      {/* <Navbar /> */}

      {/* bg-slate-100: Sets the background color to a light slate color in light mode. */}
      <span id="about"></span>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            {/* data-aos=slide-right-->car goes to right to left */}
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            // drop-shadow-[right_down_spread_color)]
            />
          </div>
          <div>
            <div className="space-y-3 sm:p-50 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                {/* 'leading-8' (line-spacing) & 'tracking-wide' (latter-spacing) */}
                At Black Buddy, our mission is simple: to make your journey seamless and enjoyable.
              </p>
              <p data-aos="fade-up">
                We strive to offer reliable vehicles, competitive pricing, and outstanding customer service to ensure a hassle-free experience.
              </p>
              <button onClick={handleGetStartedClick} data-aos="fade-up" className="button-outline">
                {/* 'button-outline' (show button type (CSS using)) */}
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


