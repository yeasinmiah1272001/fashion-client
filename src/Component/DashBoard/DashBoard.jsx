import React from "react";

const DashBoard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Your Dashboard!
        </h1>
        <p className="text-lg text-gray-600">
          Manage your content and settings from here.
        </p>
      </div>
    </div>
  );
};

export default DashBoard;
