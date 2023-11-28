import cartImg from "../assets/cart.svg";
const Header = () => {
  return (
    <header className="header bg-gray-400 flex items-center p-3 justify-between">
      <h1 className="text-4xl">Favicon</h1>
      <div className="cart-container">
        <img src={cartImg} alt="cart" />
      </div>
    </header>
  );
};

export default Header;
