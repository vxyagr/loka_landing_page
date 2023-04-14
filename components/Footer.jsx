import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center mb-4">
          <a href="/link-1" className="mx-4 hover:text-gray-400">
            How It Works
          </a>
          <a href="/link-2" className="mx-4 hover:text-gray-400">
            Get Loka
          </a>
          <a href="/link-3" className="mx-4 hover:text-gray-400">
            Docs
          </a>
        </div>
        <div className="flex justify-center mb-4">
          <a
            href="https://twitter.com"
            className="mx-2 text-custom-green hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://discord.com"
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
