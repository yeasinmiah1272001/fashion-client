import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import Marquee from "react-fast-marquee";
import Button from "./Button";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://server-seven-navy.vercel.app/fashion")
      .then((res) => res.json()) // Add parentheses here to invoke the json() method
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container>
      <Marquee>
        <div className="my-8 flex">
          {products.map((item) => (
            <div key={item.id} className="mx-4">
              <img
                onClick={() =>
                  document.getElementById(`modal_${item.id}`).showModal()
                }
                src={item.image}
                className="w-44 h-52 bg-[#F3EDD5] rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
                alt={item.title}
              />
              {/* modal start */}
              <dialog
                id={`modal_${item.id}`}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box  bg-[#F3EDD5]">
                  <div className="flex justify-between items-center">
                    {/* <h3 className="font-bold text-lg">{item.title}</h3> */}
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById(`modal_${item.id}`).close()
                      }
                      aria-label="Close modal"
                    >
                      Close
                    </button>
                  </div>
                  {/* <p className="py-4">{item.description}</p> */}
                  <Link to={user ? `/details/${item.id}` : "/login"}>
                    <img className="w-32 mx-auto" src={item.image} alt="" />
                  </Link>
                  <div className="p-4 text-center">
                    <h1 className="text-lg font-bold text-gray-800">
                      Title: {item.title}
                    </h1>
                    <h2 className="text-sm text-gray-600">
                      Category: {item.category}
                    </h2>
                    <p className="text-md text-gray-900 font-semibold mt-1">
                      Price: ${item.price}
                    </p>
                    <Button item={item} className={"mx-auto block mt-3"} />
                  </div>
                </div>
              </dialog>
              {/* modal end */}
            </div>
          ))}
        </div>
      </Marquee>
    </Container>
  );
};

export default AllProduct;
