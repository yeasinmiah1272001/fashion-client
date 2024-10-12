import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    fetch("https://server-seven-navy.vercel.app/fashion")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const data = products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterProduct(data);
  }, [products, search]);

  return (
    <div className="flex items-center bg-[#257180] rounded-full px-4 w-full max-w-md mx-4 border-2 border-gray-400 hover:border-amber-400 duration-300">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent focus:outline-none text-sm text-white w-full p-2"
        placeholder="Search for products..."
      />
      {search && (
        <IoClose onClick={() => setSearch("")} className="text-gray-400 ml-2" />
      )}
      {search && filterProduct.length > 0 && (
        <div className="absolute z-10 w-1/2 bg-bottonnav shadow-lg top-14 rounded-md mt-2 max-h-60 overflow-auto">
          {filterProduct.map((item) => (
            <Link
              key={item.id}
              onClick={() => setSearch("")}
              to={`/details/${item.id}`}
            >
              <div className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-5 transition duration-200">
                <img
                  className="w-14 h-14 rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={item.image}
                  alt={item.title}
                  width={56}
                  height={56}
                />
                <h1 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      )}
      {search && filterProduct.length === 0 && (
        <div className="absolute z-10 bg-white shadow-lg top-14 rounded-md mt-2 w-1/4">
          <div className="p-2 text-gray-500">No results found</div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
