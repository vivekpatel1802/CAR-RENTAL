import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {

    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
  {
    title: "Blog",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-primary font-serif">
              Black Buddy
            </h1>
            <p className="text-sm">
              Stay connected by following us on social media for the latest updates and offers!
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Ahmedabad, Gujrat</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 1234567890</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {['Important Links', 'Links', 'Location'].map((title, index) => (
              <div key={index} className="">
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    {title}
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link, i) => (
                      <li key={i} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                        <span>&#11162;</span>
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
