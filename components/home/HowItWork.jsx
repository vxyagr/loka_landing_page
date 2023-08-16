// components/HowItWorksSection.js
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
//import backgroundImage from "../public/bg_green.jpg";
import { isMobile, isTablet } from "react-device-detect";
const HowItWorksSection = () => {
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
      <div className="container mx-auto px-4 py-12 items-start ">
        <div className="flex-col  justify-items-center items-center text-white ">
          <div className="text-5xl w-4/5 text-left justify-center items-center  lg:p-5 lg:pl-5 pl-0 flex-row  ">
            {/*<div className="text-2xl p-1">How Loka Works</div>*/}
            <div className="p-1 text-3xl font-bold">
              Loka Mining is a{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Bitcoin Mining as a Service platform
              </span>
            </div>
            <div className="p-1  common-content text-base">
              <div className="p-4 pl-0">
                When you purchase a mining contract with Loka, you’re
                essentially renting high-end ASIC hardware in a certain period
                of time and delegates the mining operation to our professional
                team.
              </div>
              <div className="p-4 pl-0">
                The mining sites are located next to hydro power plants with
                excess energy — that’s why we get such a low electricity price.
              </div>
              <div className="p-4 pl-0">
                The mining contract is tokenized as NFT and bitcoin yield from
                the mining operation will be delivered to your personal vault
                every 24hrs where you can withdraw at anytime.
              </div>
              <div className="p-4 pl-0">
                By the end of your contract, you’ll have received more Bitcoin
                than if you had simply purchased it from an exchange at market
                price – it’s like getting Bitcoin at a steep discount!*
              </div>{" "}
              <div className="p-4 pl-0 text-sm">
                *on current bitcoin price $30,000 with our electricity cost{" "}
                {"(<4 cents/kWH)"}, you will get around ~40% APR{" "}
                {"(or ~30% discount)"} on 1 year mining contract.
              </div>
            </div>
          </div>
          <div className=" text-3xl font-bold text-center w-full p-5 text-yellow-400">
            Accumulating sats every day is now as easy as the click of a button
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
