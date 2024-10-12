import React, { useContext } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Card = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const handleNavigate = () =>{

  // }
  return (
    <div className="bg-white p-4 border-2 border-gray-200 hover:shadow-black shadow-lg duration-300">
      <Link to={user ? `/details/${item.id}` : "/login"}>
        <img src={item.image} className="w-64 h-64  p-6 sm:mx-auto" alt="" />
      </Link>
      <p>Category:{item.category}</p>
      <h1 className="text-black font-semibold">Price:{item.price}</h1>
      <Button item={item} className={"w-full mt-4"} />
    </div>
  );
};

export default Card;
