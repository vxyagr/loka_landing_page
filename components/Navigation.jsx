import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Logo from "./Logo";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
              <Link href="#howitworks">
                <a className="text-gray-600 hover:text-gray-800">
                  How it Works
                </a>
              </Link>
              <Link href="#">
                <a className="text-gray-600 hover:text-gray-800">Get Loka</a>
              </Link>
              <Link href="#">
                <a className="text-gray-600 hover:text-gray-800">Docs</a>
              </Link>
            </div>
            <button
              className="md:hidden focus:outline-none"
              type="button"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="text-gray-600" />
            </button>
            <Link href="/connect">
              <a className="hidden md:block text-gray-600 hover:text-gray-800">
                Connect
              </a>
            </Link>
          </div>
          {showMenu && (
            <div className="md:hidden mt-4 space-y-4">
              <Link href="#howitworks">
                <a className="block text-gray-600 hover:text-gray-800">
                  How It Works
                </a>
              </Link>
              <Link href="#">
                <a className="block text-gray-600 hover:text-gray-800">
                  Get Loka
                </a>
              </Link>
              <Link href="#">
                <a className="block text-gray-600 hover:text-gray-800">
                  Link 3
                </a>
              </Link>
              <Link href="#">
                <a className="block text-gray-600 hover:text-gray-800">
                  Connect
                </a>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
