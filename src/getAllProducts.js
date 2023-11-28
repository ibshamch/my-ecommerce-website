const getAllProducts = async ({ queryKey }) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();
  return json;
};
export default getAllProducts;
