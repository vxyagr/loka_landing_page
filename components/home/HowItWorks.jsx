// components/ValueSection.js
import React from "react";
import Image from "next/image";
//import backgroundImage from "../public/bg_green.png";

const HowItWorksSection = () => {
  const cards = [
    {
      title: "1. Purchase NFT",
      content:
        "Buy Loka NFT representing your share of our hashrate ownership.",
      img: "mint.png",
    },
    {
      title: "2. Mine Bitcoin",
      content:
        "Our expert team manages the mining process using state-of-the-art hardware and renewable energy.",
      img: "mine.png",
    },
    {
      title: "3. Earn Rewards",
      content:
        "Receive Bitcoin rewards in proportion to your hashrate ownership, claimable on Stacks network.",
      img: "claim.png",
    },
  ];

  return (
    <div
      id="howitworks"
      className="relative bg-cover bg-center w-full "
      style={{ backgroundImage: "url('/bg_btc.jpg')" }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="justify-items-center items-center w-full py-10">
          <h1 className="text-center font-bold mb-2 text-white text-5xl opacity-100">
            How Our Web3 Bitcoin Mining Works?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center">
          {cards.map((card, index) => (
            <div className="rounded-lg overflow-hidden lg:max-w-[350px] lg:min-h-[400px]">
              <div className="aspect-w-1 aspect-h-1 ">
                <img
                  className="w-full h-full object-cover"
                  src={card.img}
                  alt="Card image"
                />
              </div>
              <div className="bg-custom-green p-4">
                <h1 className="font-bold mb-2 text-white text-2xl opacity-100">
                  {card.title}
                </h1>
                <p className="text-white py-10">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
