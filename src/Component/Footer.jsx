import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-navColor text-white py-16">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl hover:text-gray-400 transition duration-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-gray-400 transition duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-xl hover:text-gray-400 transition duration-300" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-gray-400 transition duration-300" />
          </a>
        </div>

        {/* Middle Section: Company Info */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold">E-Commarce-FashionLoom</h2>
          <p className="text-sm mt-1">© 2024 All Rights Reserved</p>
        </div>

        {/* Right Section: Payment Icons */}
        <div className="flex space-x-4">
          <SiVisa className="text-2xl hover:text-gray-400 transition duration-300" />
          <SiMastercard className="text-2xl hover:text-gray-400 transition duration-300" />
          <SiAmericanexpress className="text-2xl hover:text-gray-400 transition duration-300" />
          <SiPaypal className="text-2xl hover:text-gray-400 transition duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
