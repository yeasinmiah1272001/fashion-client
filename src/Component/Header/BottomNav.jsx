import React, { useContext } from "react";
import { FaHome, FaStore, FaTags, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { RiLoginCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="bg-bottonnav text-black px-4 py-3">
      <div className="flex justify-center space-x-8">
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 duration-300">
          <FaHome />
          <Link to={"/"}>Home</Link>
        </div>
        <Link
          to="/shop"
          className="flex items-center space-x-2 cursor-pointer  hover:text-blue-600 duration-300"
        >
          <FaStore />
          <span>Shop</span>
        </Link>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 duration-300">
          <FaTags />
          <span>Deals</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer  hover:text-blue-600 duration-300">
          <FaEnvelope />
          <span>Contact</span>
        </div>
        {user ? (
          <div
            onClick={() => logOut()}
            className="flex items-center space-x-2 cursor-pointer  hover:text-blue-600 duration-300"
          >
            <RiLoginCircleLine />
            <span>LogOut</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 cursor-pointer  hover:text-blue-600 duration-300">
            <RiLoginCircleLine />
            <Link to={"/reg"} className="animate-bounce text-red-600">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default BottomNav;
