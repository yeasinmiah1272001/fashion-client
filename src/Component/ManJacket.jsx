import React, { useEffect, useState } from "react";
import Container from "./Container";
import Card from "./Card";

const ManJacket = () => {
  const [products, setProducts] = useState([]);
  const [filteData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("https://server-seven-navy.vercel.app/fashion")
      .then((res) => res.json()) // Add parentheses here to invoke the json() method
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const data = products.filter((item) => item.category === "jewelery");
    setFilterData(data);
  }, [products]);

  return (
    <Container>
      <h1 className="text-4xl font-semibold">Women ewelery Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {filteData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default ManJacket;
