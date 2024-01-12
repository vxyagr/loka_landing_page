import React from "react";
import Header from "../../components/Header";
import openSource from "../../assets/open_source.png";
import decentralized from "../../assets/fully_decentralized.png";
import permissionless from "../../assets/permissionless.png";
import btcsl from "../../assets/btcsl_logo.png";
import dfinity from "../../assets/dfinity_logo.png";
import snakeLogo from "../../assets/loka_landing_logo.png";
import hero from "../../assets/hero_2.png";
import ch from "../../assets/chev.png";
import check from "../../assets/checkmark.png";
import marketplace from "../../assets/marketplace.png";
import miningpool from "../../assets/miningpool.png";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import "./style.css";

const Landing = () => {
  return (
    <div>
      {/* Hello world */}
      <div className="w-full bg-[#65b2a5]">
        <main className="w-full ">
          <div className="z-50 absolute">
            <Header />
          </div>
          <section className="text-center  lg:py-16 py-5 bg-[#65b2a5]  ">
            <div className="min-h-[45px]"></div>
            <div className="grid lg:flex w-full pt-20">
              <div className="grid lg:pl-[10%] p-5 pt-10 lg:w-[60%] ">
                <h1 className="lg:w-[50%] text-5xl font-bold mb-4 text-warm-white text-left justify-start">
                  Loka - Making Bitcoin Mining Possible for Everyone
                </h1>
                <p className="mb-4 text-left justify-start text-warm-white text-lg w-[80%]">
                  Earn mining reward and get Bitcoin at lower than market price
                  by providing liquidity for miners.
                  <br />
                  <br />
                  Bitcoin miners share their mining rewards with retail
                  investors who are looking for pre-market access to bitcoin. In
                  exchange, miners get a more secure cash flow to better manage
                  and scale operations. With Loka, both sides help contribute to
                  the continued decentralization of the Bitcoin network.
                </p>
                <a href="https://go.lokamining.com/about" target="blank">
                  <div className="cursor-pointer max-w-[150px] m-4 ml-0 text-xl border-warm-white border text-warm-white bg-[#326212] py-2 px-1 rounded-3xl">
                    About Loka
                  </div>
                </a>
              </div>
              <div className="lg:pr-[10%]  pt-10 lg:w-[40%] flex">
                <img src={hero} />
              </div>
            </div>
          </section>
          <section className="bg-warm-white w-full">
            {/* Backers */}
            <div className="lg:flex items-center min-h-[200px]  w-full grid justify-center lg:px-[10%] lg:py-10">
              {/* Use Unsplash or placeholders for logos */}
              <div className="lg:w-[33%]   py-5 lg:text-3xl text-xl text-center items-center justify-center">
                Our Backers
              </div>
              <div className="lg:w-[33%] py-5 text-center items-center justify-center">
                <img src={dfinity} />
              </div>
              <div className="lg:w-[33%] py-5 text-center items-center justify-center">
                <img src={btcsl} />
              </div>
            </div>
          </section>
          <section>
            {/* Testimonials */}
            {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="mb-4">
                  "It's a brilliant idea. I can put my BTC to work and earn
                  more."
                </p>
                <p>- Bob The Builder</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="mb-4">
                  "I'm scaling up my Bitcoin mining farm faster than ever!"
                </p>
                <p>- Alice The Miner</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="mb-4">
                  "Loka demonstrates a working public goods on a truly
                  decentralized ecosystem"
                </p>
                <p>- John the Foundation Guy</p>
              </div>
            </div> */}
          </section>
          <section className="bg-[#effdfb] lg:px-[10%] p-5">
            {/* Loka Ecosystem */}
            <h2 className="text-5xl font-bold my-8 py-12">
              There are two main components to the Loka ecosystem
            </h2>
            <div className="grid">
              {/* Loka Mining Pool */}
              <div className="lg:flex grid w-full">
                <div className="lg:w-[55%] w-full">
                  <h3 className="text-3xl font-bold mb-4">
                    The Loka Mining Pool
                  </h3>
                  <div className="mb-4 text-xl lg:pr-10 lg:w-[70%] text-[#475467]">
                    <p>
                      Built on a completely decentralized network on the
                      Internet Computer Protocol (ICP), the Loka Mining Pool
                      leverages ICP's chain key tech that optimizes for security
                      and low-cost transactions.
                    </p>
                    <p className="font-bold">This enables :</p>
                    <div className="flex p-2">
                      <img src={check} className="w-6 h-6 " />
                      <p className="pl-4">
                        Anyone can earn a passive income (almost like staking)
                        by providing bitcoin liquidity to miners
                      </p>
                    </div>
                    <div className="flex  p-2">
                      <img src={check} className="w-6 h-6 " />
                      <p className="pl-4">
                        In exchange, miners get a daily payout based on their
                        hashrate contributions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[45%] w-full items-center justify-center text-center flex">
                  <img src={miningpool} />
                </div>
              </div>
              {/* Loka Hashrate Marketplace */}
              <div className="lg:flex grid w-full">
                <div className="lg:w-[45%] w-full items-center justify-center text-center flex">
                  <img src={marketplace} />
                </div>
                <div className="lg:w-[55%] w-full">
                  <h3 className="text-3xl font-bold mb-4 lg:pl-20">
                    The Loka Hashrate Marketplace
                  </h3>
                  <div className="mb-4 text-xl lg:pl-20  text-[#475467]">
                    <p>
                      The hashrate marketplace is like bitcoin itself — it's
                      designed as a peer-to-peer way for miners and retail
                      investors can interact in a non-custodial, trustless
                      manner.
                    </p>

                    <div className="flex p-2">
                      <img src={ch} className="w-6 h-6 " />
                      <p className="pl-4">
                        Invest in a Bitcoin mining operation by purchasing
                        collateralized contracts of future hashrate for a
                        certain period of time from anywhere in the world. Then
                        get BTC at lower than market rates in return
                      </p>
                    </div>
                    <div className="flex p-2">
                      <img src={ch} className="w-6 h-6 pt-2 " />
                      <p className="pl-4">
                        Bitcoin miners gain early return on their investment.
                        Steady cashflow can help scale hash rate capacity by
                        purchasing more hardware or the liquidity can be used to
                        hedge the risk of price volatility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#fafef5] lg:px-[10%] p-5 pt-12">
            {/* Why Loka?  */}
            <h2 className="text-5xl font-bold text-center mb-8">Why Loka?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 text-center  ">
              <div className="bg-[#a6ef67] rounded-2xl p-5">
                <div className="container flex relative items-center justify-center overflow-visible rounded-2xl p-5">
                  <img
                    src={openSource}
                    className="w-[200px] absolute -top-30 transform z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 pt-20">Open Source</h3>
                <p className="text-xl text-[#475467]">
                  The protocol is completely open source, interface client, API,
                  or directly with the smart contracts on the IC network.
                </p>
              </div>
              <div className="bg-[#fde272] rounded-2xl p-5">
                <div className="container flex relative items-center justify-center overflow-visible rounded-2xl p-5">
                  <img
                    src={decentralized}
                    className="w-[130px] absolute -top-30 transform z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 pt-20">
                  Fully Decentralized
                </h3>
                <p className="text-xl text-[#475467]">
                  All the code and services are stored in IC decentralized from
                  end-to-end, eliminating centralized party risks associated
                  with other Bitcoin mining operations.
                </p>
              </div>
              <div className="bg-[#5fe9d0] rounded-2xl p-5">
                <div className="container flex relative items-center justify-center overflow-visible rounded-2xl p-5">
                  <img
                    src={permissionless}
                    className="w-[200px] absolute -top-30 transform z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 pt-20">
                  Permissionless
                </h3>
                <p className="text-xl text-[#475467]">
                  Loka is permissionless, non custodial, customizable front-end
                  interface.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-[#fafef5] lg:px-[10%] p-5 pt-12 pb-10">
            <div className="bg-white rounded-2xl drop-shadow-md p-10 text-center items-center justify-center">
              <h2 className="text-5xl font-bold mb-4">
                We are building something awesome here.
              </h2>
              <p className="mb-8 text-2xl text-[#475467]">
                Join our community.
              </p>
              <div className="cursor-pointer flex  justify-center items-center text-center">
                <div className="max-w-[a200px] text-xl text-center items-center justify-center border-warm-white text-warm-white border-1 px-4 py-2 bg-[#65b2a5]  rounded-full">
                  <a href="https://discord.gg/yDytXMMDs9" target="blank">
                    {" "}
                    Join Discord{" "}
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#518e84] lg:px-[10%] p-5 pt-12">
            <div className="grid text-warm-white text-lg">
              <div className=" rounded-2xl flex drop-shadow-md p-10 text-center items-center justify-center">
                <img src={snakeLogo} className="w-32" />
              </div>
              <div className="cursor-pointer flex  justify-center items-center text-center">
                <div className="flex">
                  <a href="https://x.com/lokamining" target="blank">
                    <FaTwitter className="h-6 w-6" />
                  </a>
                </div>
                <div className="px-4 flex">
                  <a href="https://discord.gg/yDytXMMDs9" target="blank">
                    <FaDiscord className="h-6 w-6" />
                  </a>
                </div>
                <div className="px-4">
                  <a href="#" target="blank">
                    {" "}
                    Whitepaper
                  </a>
                </div>
                <div className="px-4">
                  <a href="https://go.lokamining.com/about" target="blank">
                    About
                  </a>
                </div>
                <div>
                  <a href="https://blog.lokamining.com" target="blank">
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Landing;
