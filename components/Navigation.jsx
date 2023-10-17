import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Logo from "./Logo";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dashboardLink = "https://beta.lokamining.com/buy";
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed min-h-20 top-0 z-50 w-full bg-custom-blue">
      <nav className="bg-custom-blue backdrop-blur-md h-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <a className="text-xl font-semibold">
                <Logo />
              </a>
            </Link>
            <div className="hidden md:flex space-x-8">
              {/*<Link href="#howitworks">
                <a className="text-link">How it Works</a>
              </Link>*/}
              <a
                href="https://twitter.com/lokamining"
                className="mx-2 text-custom-green hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="https://discord.gg/yDytXMMDs9"
                className="mx-2  text-custom-green hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faDiscord} size="lg" />
              </a>
              <Link href="https://go.lokamining.com/about" target="_blank">
                <a
                  className="text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </Link>
            </div>
            <button
              className="md:hidden focus:outline-none"
              type="button"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="text-gray-600" />
            </button>
            <Link href={dashboardLink}>
              <a className="hidden md:block text-gray-600 hover:text-gray-800">
                <button className="bg-[#79D5C6] rounded-full font-medium text-white  py-2 px-4 leading-none tracking-tight hover:bg-left hover:shadow-xl hover:shadow-blue-400/20 active:scale-95 sm:text-base md:text-base transition duration-300 ease-in-out hover:bg-[#cff0ea] ">
                  <span className="text-[#101010]">Try Beta</span>
                </button>
              </a>
            </Link>
          </div>
          {showMenu && (
            <div className="md:hidden h-[100vh] bg-opacity-20 mt-4 space-y-4 p-5 text-center justify-center transition duration-300 ease-in-out">
              {/*<Link href="#howitworks">
                <a className="block text-link">How It Works</a>
          </Link>*/}
              {/*<Link href="#">
                <a className="block text-link">Get Loka</a>
        </Link>*/}
              <Link href="https://go.lokamining.com/about">
                <a
                  className="block text-link "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </Link>
              <div className="py-5">
                <Link href={dashboardLink}>
                  <a className=" md:block text-gray-600 hover:text-gray-800 text-lg  py-8">
                    <button className="bg-[#79D5C6] rounded-full text-white  py-2 px-4 leading-none tracking-tight hover:bg-left hover:shadow-xl hover:shadow-blue-400/20 active:scale-95 dark:text-gray-900 sm:text-base md:text-base transition duration-300 ease-in-out hover:bg-[#cff0ea]">
                      <span className="text-[#101010]">Try Beta</span>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
