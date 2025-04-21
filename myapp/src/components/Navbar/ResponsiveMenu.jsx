import React from "react";
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing
import { Navlinks } from "./Navbar"; // Import Navlinks

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-full"} 
      fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl  ">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link} // Use 'to' instead of 'href' for Link component
                  className="mb-5 inline-block  hover:text-primary"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          {/* Sign Up Link */}
          <Link
            to="/signup" // Add the Sign Up link to the responsive menu
            className="block mt-6 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
          >
            SIGN UP
          </Link>
        </nav>
      </div>
    </div>
  );
};

// PropTypes validation
ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};

export default ResponsiveMenu;
