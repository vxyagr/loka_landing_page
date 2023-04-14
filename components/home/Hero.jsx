import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[50vh] md:h-[65vh] lg:h-[75vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-[65%,35%] gap-4 items-center h-full">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Sustainable and Profitable
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-4xl">Bitcoin Mining</h2>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-8 shadow-md">
            {/* Add your content for the right side rounded div here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
