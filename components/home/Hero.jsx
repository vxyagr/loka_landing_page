import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[50vh] md:h-[65vh] lg:h-[75vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid  gap-4 items-center h-full">
          <div className="text-white">
            <div className="lg:min-h-[150px]"></div>
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center text-shadow-lg">
              Sustainable and Profitable
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center text-shadow-lg ">
              Bitcoin Mining
            </h2>
            <h2 className="text-3xl p-10 md:text-4xl lg:text-7xl font-bold text-center text-shadow-lg ">
              <button className="bg-gradient-to-r from-blue-500 rounded-full to-purple-600 text-white lg:text-4xl md:text-2xl text-lg font-bold lg:py-6 lg:px-8 py-3 px-4 leading-none tracking-tight hover:bg-left hover:shadow-xl hover:shadow-blue-400/20 active:scale-95 sm:text-2xl  transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500">
                Get Loka Now!
              </button>
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
