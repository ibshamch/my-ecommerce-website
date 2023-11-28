import { Link } from "react-router-dom";
const Products = (props) => {
  const { image, title, price, id } = props;
  return (
    <Link
      to={`details/${id}`}
      className="product p-8 flex flex-col justify-between items-center border-gray-400 border-solid border-4"
    >
      <img src={image} className="w-2/12" alt="product-img" />
      <div className="title">
        {title} <br />
        <span className="text-4xl">
          <strong>{`Price: $${price}`}</strong>
        </span>
      </div>
    </Link>
  );
};

export default Products;
