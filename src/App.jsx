import Header from "./Components/Header";
import Homepage from "./routes/Homepage";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import { useState } from "react";
import CartContext from "./Components/CartContext";
import ProductCart from "./Components/ProductCart";
function App() {
  const cartContext = useState([]);
  return (
    <>
      <CartContext.Provider value={cartContext}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<ProductCart />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App;
