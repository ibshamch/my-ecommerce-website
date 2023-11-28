import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getProductDetails from "../getProductDetails";

const Details = () => {
  const params = useParams();
  const id = params.id;
  const results = useQuery(["productDetails", id], getProductDetails);
  console.log(results);
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
          <button className="bg-green-400 py-3 px-4 rounded-2xl ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
