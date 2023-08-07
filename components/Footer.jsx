import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-6">
      <div className="container mx-auto">
        <div className="hidden md:flex space-x-8 justify-center p-5">
          {/*<Link href="#howitworks">
            <a className="text-link">How it Works</a>
          </Link>*/}
          <Link href="#">
            <a className="text-link">Get Loka</a>
          </Link>
          <Link href="https://lifeandwork.notion.site/Loka-Mining-Platform-Overview-a214238d662c49739d2bdb8761e2addc?pvs=4">
            <a
              className="block text-link "
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </Link>
        </div>
        <div className="flex justify-center mb-4">
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
        </div>
        <p className="text-center text-sm">
          &copy; 2023 Loka Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
