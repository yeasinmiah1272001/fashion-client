import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";

const ProductDetails = () => {
  const product = useLoaderData();
  const { id } = useParams();

  const [finddata, setFindData] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const data = product.find((item) => item.id == id);
    setFindData(data);

    if (data) {
      // Filter related products from the same category
      const filteredProducts = product.filter(
        (item) => item.category === data.category && item.id != id
      );
      setRelatedProducts(filteredProducts);
    }
  }, [product, id]);

  return (
    <div className="container mx-auto p-4 md:p-8 min-h-screen">
      <div className="flex flex-col md:flex-row  shadow-lg rounded-lg overflow-hidden">
        <img
          src={finddata.image}
          alt={finddata.title}
          className="w-full md:w-1/2 h-80 p-4 object-cover"
        />
        <div className="p-6 flex flex-col justify-between">
          <h1 className="text-2xl font-bold text-gray-800">{finddata.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{finddata.description}</p>
          <div className="mt-4">
            <span className="text-xl font-semibold text-gray-800">
              ${finddata.price}
            </span>
          </div>
          <div className="mt-2">
            <span className="text-md text-gray-600">
              Category: {finddata.category}
            </span>
          </div>
          {/* <div className="mt-2">
            <span className="text-md text-gray-600">
              Rating: {finddata.rating[0]} ⭐
            </span>
          </div> */}
          <Button className={"w-full mt-2"} item={finddata} />
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => <Card item={item} />)
          ) : (
            <p>No related products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
