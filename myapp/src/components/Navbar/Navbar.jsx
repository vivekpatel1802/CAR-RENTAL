import React, { useState } from "react";
import PropTypes from "prop-types";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom"; // Import Link for routing
// import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "CARS",
    link: "/#cars",
  },
  {
    id: 4,
    name: "BOOKING",
    link: "/#contact",
  },
  {
    id: 5,
    name: "SIGN UP", // Added Sign Up link
    link: "/signup",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative right-0  z-10 shadow-md w-full dark:bg-black dark:text-white duration-300" >
      <div className="container py-2 md:py-0 bg-info ">  {/*inclide fixed navbar is fixed*/}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif ">𖤍 Black Buddy 𖤍</span>
          </div>
          <nav className="hidden md:block  ">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link} // Change from href to to for Link
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implementation */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>
          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* <ResponsiveMenu showMenu={showMenu} /> */}
    </div>
  );
};

// PropTypes validation
Navbar.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Navbar;





