// components/HowItWorksSection.js
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
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
                Trustless On-Chain Bitcoin Mining as a Service platform
              </span>
            </div>
            <div className="p-1  common-content text-base">
              <div className="p-4 pl-0  text-yellow-400">
                Tired of getting rugged by ponzi schemes disguised as cloud
                mining platform?
              </div>
              <div className="p-4 pl-0">
                Our mining contract is guaranteed by BTC collateral on-chain,
                non custodial with 1:1 value to eliminate centralized party
                risk. If mining operation stopped or cease to exist before your
                mining contract ends, the BTC collateral will automatically be
                paid to you.
              </div>
              <div className="p-4 pl-0">
                When you purchase a mining contract with Loka, you’re
                essentially renting high-end ASIC hardware in a certain period
                of time and delegates the mining operation to professional
                bitcoin miner team.
              </div>
              <div className="p-4 pl-0">
                The mining facilities are using excess energy — that’s why we
                get such a low electricity price.
              </div>
              <div className="p-4 pl-0">
                The mining contract is tokenized as NFT and bitcoin rewards from
                the mining operation will be delivered to your personal vault
                every 24hrs where you can withdraw at anytime.
              </div>
              <div className="p-4 pl-0">
                By the end of your contract, you’ll have received more Bitcoin
                than if you had simply purchased it from an exchange at market
                price – it’s like getting Bitcoin at a steep discount.
              </div>{" "}
            </div>
          </div>
          <div className=" text-3xl font-bold text-center w-full p-5 text-yellow-400">
            Accumulating sats every day is now as easy as the click of a button
          </div>
          <div className=" text-xl font-bold text-center w-full p-1 text-yellow-400">
            <h2 className="text-4xl p-1 md:text-4xl lg:text-7xl font-bold text-center  ">
              <Link href={"/start"}>
                <button className="hero-lexend bg-gradient-to-r from-blue-500 rounded-full to-purple-600 text-white lg:text-3xl md:text-2xl text-2xl font-bold lg:py-4 lg:px-12 py-3 px-3 leading-none tracking-tight hover:bg-left hover:shadow-xl hover:shadow-blue-400/20 active:scale-95 sm:text-3xl  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
                  Start Here
                </button>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
