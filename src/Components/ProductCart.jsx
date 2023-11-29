import { useContext } from "react";
import CartContext from "./CartContext";

const ProductCart = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div className="cart-container-main">
      {cart.map((product) => {
        const { title, image, description, price, rating } = product;

        return (
          <div className="cart-container">
            <div className="carted-product flex justify-between p-9 border-red-400 border-solid border-4">
              <div className="basis-3/12 product-img flex flex-col gap-4">
                <img className="w-3/12" src={image} alt="product-image" />
                <p>
                  <strong>{title}</strong>
                </p>
                <p>{description}</p>
              </div>
              <div className="price basis-3/12">
                <strong>{`Price $ ${price}`}</strong>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCart;
