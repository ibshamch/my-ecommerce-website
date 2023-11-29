import useGetAllProducts from "./useGetAllProducts";
import { useState } from "react";
import Products from "./Products";

const Body = () => {
  const results = useGetAllProducts();
  const [input, setInput] = useState("");

  const filteredResults = results.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <main className="body-container">
      <div className="input-container flex justify-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Products"
          className="input border-black border-2 border-solid p-5 mt-4"
        />
      </div>

      <section className="product-container ">
        <section className="products p-5 gap-4 grid grid-cols-2 lg:grid-cols-4">
          {filteredResults.map((product) => {
            const { image, price, title, id, rating, description, category } =
              product;
            return (
              <Products
                key={id}
                image={image}
                price={price}
                title={title}
                description={description}
                category={category}
                id={id}
                rating={rating}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default Body;
