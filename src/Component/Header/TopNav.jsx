import React, { useContext } from "react";
import { FaUserCircle, FaShoppingCart, FaShopify } from "react-icons/fa";
import Container from "../Container";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar";
import { AuthContext } from "../Provider/AuthProvider";

const TopNav = () => {
  const selector = useSelector((state) => state.shopping.cart);
  // console.log("selector", selector);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleCart = () => {
    if (user) {
      navigate("/dashboard/d");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-navColor text-white">
      <Container className=" px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to={"/"}>
            <FaShopify
              size={30}
              className="hover:text-yellow-500 duration-500"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <SearchBar />
        {/* Icons */}
        <div className="flex space-x-4 items-center">
          <div className="cursor-pointer hover:text-gray-400 relative">
            <FaUserCircle size={24} />
            {/* Cart Item Counter */}
            <span className="absolute -top-2 lg:right-14  text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {user && <span>{user.email}</span>}
            </span>
          </div>
          <p
            onClick={handleCart}
            className="cursor-pointer hover:text-gray-400 relative"
          >
            <FaShoppingCart size={24} />
            {/* Cart Item Counter */}
            <p className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {selector.length > 0 ? selector.length : "0"}
            </p>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
