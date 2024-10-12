import React, { useContext, useEffect, useState } from "react";
import AllProduct from "./AllProduct";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import Card from "./Card";
import { AuthContext } from "./Provider/AuthProvider";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://server-seven-navy.vercel.app/fashion")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilterProduct(data);
      });
  }, []);

  const handleCategoryClick = (event) => {
    const category = event.target.value;

    if (category === "All") {
      setFilterProduct(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilterProduct(filtered);
    }
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    if (searchValue === "") {
      setFilterProduct(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilterProduct(filtered);
    }
  };

  return (
    <Container>
      <SectionTitle
        title="All Products Available"
        subtitle="Continue Your Shopping Journey"
      />

      <div>
        <div>
          <AllProduct />
        </div>
        <div className="my-16">
          {/* Top Section: Filters, Search, Offers */}
          <div className="flex justify-between items-center gap-6 mb-8">
            {/* Category Filter */}
            <div className="flex flex-col w-full max-w-xs">
              <label htmlFor="category" className="text-lg font-semibold mb-2">
                Choose a category:
              </label>
              <select
                name="Category"
                id="category"
                onChange={handleCategoryClick}
                className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Categories</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
              </select>
            </div>

            {/* Search Bar */}
            <div className="flex-grow mt-8">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-white border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search for products..."
              />
            </div>

            {/* Offers Section */}
            <div className="text-right">
              <h2 className="text-lg font-semibold">Offers & Deals</h2>
              <p className="text-gray-500">Grab exciting deals now!</p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterProduct.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
