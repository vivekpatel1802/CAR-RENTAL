import React from "react";
import car1 from "../../assets/white-car.png";
import car2 from "../../assets/scorpio.png";
import car3 from "../../assets/defender.png";
import car4 from "../../assets/jaguar.png";
import car5 from "../../assets/bmw.png";
import car6 from "../../assets/thar.png";

const carList = [
  {
    name: "range rover",
    price: 400,
    image: car1,
    aosDelay: "0",
  },
  {
    name: "scorpio",
    price: 200,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "defender",
    price: 500,
    image: car3,
    aosDelay: "1000",
  },
  {
    name: "jaguar",
    price: 400,
    image: car4,
    aosDelay: "0",
  },
  {
    name: "BMW",
    price: 350,
    image: car5,
    aosDelay: "1000",
  },
  {
    name: "THAR",
    price: 200,
    image: car6,
    aosDelay: "1500",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      {/* space between carlist and Testimonial*/}
      <span id="cars"></span>
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Car List
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className="text-sm pb-10">
          Reserve Your Vehicle Today!
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data, index) => (
              <div
                key={index} // Add a unique key prop
                data-aos="fade-up"
                data-aos-delay={data.aosDelay} // Changed aos-delay to data-aos-delay
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  {/* width:100% */}
                  <img
                    src={data.image}
                    alt={data.name} // Provide a meaningful alt text
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
