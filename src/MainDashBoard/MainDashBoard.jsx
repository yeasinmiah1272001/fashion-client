import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaTachometerAlt, FaCog, FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";

const MainDashBoard = () => {
  const selector = useSelector((state) => state.shopping.cart);
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-6 fixed h-full">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard/d"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md transition"
            >
              <FaTachometerAlt size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/cart"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md transition"
            >
              <FaShoppingBag size={20} />
              <h1>
                My Cart{" "}
                <span className="text-red-500">
                  {" "}
                  {selector.length > 0 ? selector.length : "0"}
                </span>
              </h1>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/payment"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md transition"
            >
              <FaShoppingBag size={20} />
              <span>Your Payment </span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md transition"
            >
              <FaHome size={20} />
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/setting"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md transition"
            >
              <FaCog size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 bg-gray-100">
        {/* To push content to the right of the fixed sidebar */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainDashBoard;
