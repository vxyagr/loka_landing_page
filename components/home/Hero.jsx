import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { isMobile, isTablet } from "react-device-detect";
const HeroSection = () => {
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
  return (
    <div
      className={`relative h-[50vh] md:h-[65vh] sm:h-[35vh] xs:h-[35vh] lg:h-[100vh] bg-cover bg-center ${
        screenWidth < 750 ? "" : "background-hero"
      }`}
    >
      <div className="absolute inset-0 lg:bg-black lg:bg-opacity-20"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid  gap-4 items-center h-full">
          <div className="text-white">
            <div className="lg:min-h-[150px]"></div>
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center text-shadow-lg hero-lexend">
              Bitcoin at 30%++ discount rate
            </h1>

            <h2 className="text-3xl p-10 md:text-4xl lg:text-7xl font-bold text-center text-shadow-lg ">
              <Link href={"https://discord.gg/yDytXMMDs9"}>
                <button className="bg-gradient-to-r from-blue-500 rounded-full to-purple-600 text-white lg:text-4xl md:text-2xl text-lg font-bold lg:py-6 lg:px-8 py-3 px-4 leading-none tracking-tight hover:bg-left hover:shadow-xl hover:shadow-blue-400/20 active:scale-95 sm:text-2xl  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
                  Get Early Access
                </button>
              </Link>
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-shadow-lg p-5">
              Powered by{" "}
              <img
                alt=""
                class="inline-block w-5 -translate-y-[0.1rem]"
                src="bitcoin_white.svg"
              />{" "}
              <span class="font-bold"> Bitcoin</span> and{" "}
              <img
                alt=""
                class="inline-block w-6 -translate-y-[0.1rem]"
                src="stacks_white.svg"
              />{" "}
              <span class="stacks">Stacks</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
