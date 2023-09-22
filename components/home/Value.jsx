// components/ValueSection.js
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faBitcoin,
} from "@fortawesome/free-brands-svg-icons";
//import backgroundImage from "../public/bg_green.jpg";
import { isMobile, isTablet } from "react-device-detect";
const ValueSection = () => {
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
      title: "No centralized party risk",
      content:
        "Each mining contract is fully collateralized by BTC in a non-custodial way. Your investment is 100% guaranteed on-chain.",
      c2: "Don’t trust us. Trust the code.",
      img: "secure.svg",
    },

    {
      title: "More BTC with less $",
      content:
        "With less than $0.04/kWh on any season, our strategic location allows us to have geographical advantage of having the lowest energy costs from excess electricity, maximizing your mining profits.",
      img: "monetization_icon.svg",
    },
    {
      title: "100% Renewable Energy",
      content:
        "Our mining operations are backed by an abundant supply of renewable energy, ensuring a sustainable and environmentally-friendly approach to Bitcoin mining.",
      img: "eco_icon.svg",
    },
  ];

  return (
    <div id="value">
      <div className="container mx-auto px-4 py-12 items-start">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8  justify-items-center items-start ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full   lg:max-w-[550px] lg:min-h-[400px] p-4 rounded-2xl shadow-md opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
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
              <p className="text-white py-10 light-lexend justify-items-center items-center text-center">
                {card.content}
                <br />
                <br />
                {card.c2 ? card.c2 : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
