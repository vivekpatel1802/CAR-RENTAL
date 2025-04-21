import React from "react";

const Contact = () => {
  const handlecontect = () => {
    alert("contect button clicked!");
  };

  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let&apos;s collaborate on your upcoming car rental venture
              </h1>
              <p className="text-gray-400">
                We’re here to help! Whether you have questions about our services or need assistance with your reservation, feel free to reach out.
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                onClick={handlecontect}
                href="#"
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;