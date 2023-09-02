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
      className={`relative h-full  bg-cover bg-center ${
        screenWidth < 750 ? "" : "background-hero"
      }`}
    >
      <div className="absolute inset-0 lg:bg-black lg:bg-opacity-20"></div>
      <div className="container mx-auto px-4 lg:py-6 md:py-6 py-0 relative">
        <div className="grid  gap-4  items-start h-[100vh]">
          <div className="text-white grid lg:pt-40 pt-20 md:pt-50 justify-center items-center text-center">
            <h1 className="text-5xl md:text-4xl lg:text-7xl font-bold text-center   hero-lexend">
              Freshly Minted Bitcoin
            </h1>
            <h1 className="text-5xl md:text-4xl lg:text-7xl font-bold text-center   hero-lexend">
              at 30%++ Discount Rate
            </h1>
            <div className="">
              <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-center inline-block justify-center items-center p-6   hero-lexend">
                Get your sats daily, with nothing to worry.
              </h2>
            </div>
            <h2 className="text-4xl p-10 md:text-4xl lg:text-7xl font-bold text-center  ">
              <Link href={"/start"}>
                <button className="hero-lexend bg-gradient-to-r from-blue-500 rounded-full to-purple-600 text-white lg:text-4xl md:text-3xl text-3xl font-bold lg:py-6 lg:px-12 py-3 px-8 leading-none tracking-tight hover:bg-left hover:shadow-xl hover:shadow-blue-400/20 active:scale-95 sm:text-3xl  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
                  Start Here
                </button>
              </Link>
            </h2>

            <h3 className="text-center  p-2 ">
              <div className="content-div bg-black lg:bg-transparent md:bg-transparent  bg-opacity-70 rounded-xl light-lexend  text-white lg:text-xl md:text-xl text-md font-bold lg:py-2 lg:px-2 py-1 px-4 l active:scale-95 sm:text-xl  transition duration-300 ease-in-out ">
                Powered by{" "}
                <img
                  alt=""
                  class="inline-block w-5 -translate-y-[0.1rem]"
                  src="bitcoin_white.svg"
                />{" "}
                <span class="font-bold"> Bitcoin</span>{" "}
                {/*and{" "}
                <img
                  alt=""
                  class="inline-block w-6 -translate-y-[0.1rem]"
                  src="stacks_white.svg"
                />{" "}
    <span class="stacks">Stacks</span> */}
              </div>
            </h3>
            <h3 className="text-center  p-2 ">
              <div className="inline-block">
                <Link href={"https://docs.lokamining.com"}>
                  <a
                    className="block text-link "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="content-div font-bold bg-white   bg-opacity-70 rounded-xl hero-lexend  text-black lg:text-xl md:text-xl text-md  lg:py-2 lg:px-4 py-1 px-4 l active:scale-95 sm:text-xl  transition duration-300 ease-in-out ">
                      Read LOKA Docs
                    </button>
                  </a>
                </Link>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
