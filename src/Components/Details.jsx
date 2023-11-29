import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getProductDetails from "../getProductDetails";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";
import { useNavigate } from "react-router-dom";
const Details = () => {
  const params = useParams();
  const id = params.id;
  const results = useQuery(["productDetails", id], getProductDetails);
  const navigate = useNavigate();
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    setCart([...cart, results.data]);
    navigate("/cart");
  };
  if (results.isLoading) {
    return <div className="text-8xl">...Loading</div>;
  }
  if (results.isError) {
    return <div className="text-8xl">...Error</div>;
  }
  const { title, image, description, price, rating } = results.data;
  return (
    <div className="product-details flex justify-around p-5 border-black border-solid border-4">
      <div className="image flex flex-col justify-between gap-5">
        <img className="w-4/12" src={image} alt="product-img" />
        <p>{`Rating: ${rating.rate}`}</p>
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>
            <strong>{`Price: $${price}`}</strong>
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-orange-400 py-3 px-4 rounded-2xl ">
            Buy Now
          </button>
          <Link
            to={"/cart"}
            onClick={addToCart}
            className="bg-green-400 py-3 px-4 rounded-2xl "
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
