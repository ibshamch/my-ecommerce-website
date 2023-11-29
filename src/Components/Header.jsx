import cartImg from "../assets/cart.svg";
import { useContext } from "react";
import CartContext from "./CartContext";
import { Link } from "react-router-dom";
const Header = () => {
  const [cartCounter, _] = useContext(CartContext);
  return (
    <header className="header bg-gray-400 flex items-center p-3 justify-between">
      <Link to={"/"} className="text-4xl">
        Favicon
      </Link>
      <Link to={"/cart"} className="cart-container">
        <img src={cartImg} alt="cart" />
        <span>{cartCounter.length}</span>
      </Link>
    </header>
  );
};

export default Header;
