// components/DescriptionSection.js
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
//import backgroundImage from "../public/bg_green.jpg";
import { isMobile, isTablet } from "react-device-detect";
const DescriptionSection = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const [screenWidth, setScreenWidth] = useState(null);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Update the screen width when the component mounts
    updateScreenWidth();

    // Add an event listener to update the screen width when the window is resized
    window.addEventListener("resize", updateScreenWidth);

    // Remove the event listener when the component unmounts to avoid memory leaks
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);
  const cards = [
    {
      title: "100% Renewable Energy",
      content: "Get bitcoin cheaper than buying at market price",
      img: "electrical_services-icon.svg",
    },
    {
      title: "Affordable Electricity 24/7",
      content: "No need to buy and setup $$$ of mining hardware",
      img: "eco_icon.svg",
    },
    {
      title: "40% APR",
      content: "No need to worry about high electricitycost",
      img: "monetization_icon.svg",
    },
    {
      title: "40% APR",
      content:
        " Starts as low $100 and aas short as 1-month period of miningcontract",
      img: "monetization_icon.svg",
    },
  ];

  return (
    <div id="description">
      <div className="container mx-auto px-4 py-16 items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  justify-items-center items-center text-white ">
          <div className="text-5xl text-left justify-center items-center w-full lg:p-5 lg:pl-5 pl-0 grid-cols-1  ">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text p-1">
              Get More
            </div>
            <div className="p-1"> Sats, </div>
            <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Pay Less
            </div>
            <div className="p-1"> With Loka Mining</div>
          </div>
          <div className="grid-cols-1 w-full py-3 common-content">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full text-common-content border-b-[1px] p-3 pl-0 text-xl border-b-gray-400"
              >
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
