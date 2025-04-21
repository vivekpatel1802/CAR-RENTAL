import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// in node_modules .css
// AOS--->Animate On Scroll

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup";
const App = () => {
  // Dark mode state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // theme: Holds the current theme ("dark" or "light").
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      // This controls how the animation speeds up or slows down
      delay: 100,
    });
    AOS.refresh();
    // to chack AOS changes succesfully or not
  }, []);

  return (
    <>
      <Router>
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>

            <Route path="/" element={
              <>
                <Hero theme={theme} />

                <About />
                <Services />
                <CarList />
                <Testimonial />
                <AppStoreBanner />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/signup" element={<Signup theme={theme} />} />
          </Routes>

        </div>
      </Router>
    </>
  );
};

export default App;



