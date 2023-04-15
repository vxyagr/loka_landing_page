// components/ValueSection.js
import React from "react";
import Image from "next/image";
//import backgroundImage from "../public/bg_green.jpg";

const ValueSection = () => {
  const cards = [
    {
      title: "Powered by Renewable Energy",
      content:
        "Our mining operations are backed by an abundant supply of renewable energy, ensuring a sustainable and environmentally-friendly approach to Bitcoin mining.",
      img: "electrical_services-icon.svg",
    },
    {
      title: "Affordable Electricity",
      content:
        "Our strategic location in Indonesia allows us to take advantage of some of the lowest electricity costs in the world, maximizing your mining profits.",
      img: "eco_icon.svg",
    },
    {
      title: "ROI in 2-3 years",
      content:
        "Our unique combination of low electricity costs and high-performance mining hardware ensures a rapid return on investment, with most users experiencing ROI within 2-3 years.",
      img: "monetization_icon.svg",
    },
  ];

  return (
    <div
      id="value"
      className="relative bg-cover bg-center w-full "
      style={{ backgroundImage: "url('/bg_green.jpg')" }}
    >
      <div className="container mx-auto px-4 py-12 items-start">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8  justify-items-center items-start ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full   lg:max-w-[350px] lg:min-h-[400px] p-4 rounded-2xl shadow-md opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "linear-gradient(360deg, #273D4C, #747620)",
              }}
            >
              <h1 className="font-bold mb-2 text-white text-2xl opacity-100 items-center justify-items-center text-center">
                <img
                  className="h-20 w-full mr-4 items-center justify-items-center"
                  src={card.img}
                  alt="Logo"
                />
                {card.title}
              </h1>
              <p className="text-white py-10">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
