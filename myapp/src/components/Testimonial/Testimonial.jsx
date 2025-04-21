import React from "react";
import car from "../../assets/intirial.jpg";
const testimonialData = [
  {
    name: "Vivek",
    image: "",
    description: "Fantastic service! The car was clean and well-maintained. Will definitely rent again!",
    aosDelay: "0",
  },
  {
    name: "Yashvi",
    image: "",
    description: "The booking process was quick and easy. The staff was friendly and helpful!",
    aosDelay: "300",
  },
  {
    name: "Paras",
    image: "",
    description: "Excellent experience! The vehicle was exactly as described and drove perfectly",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              we take pride in providing exceptional service to our customers.
              Here’s what some of our satisfied clients have to say about their experience with us:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={car}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
