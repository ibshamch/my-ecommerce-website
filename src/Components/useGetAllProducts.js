// custom hook
import { useQuery } from "@tanstack/react-query";
import getAllProducts from "../getAllProducts";

const useGetAllProducts = () => {
  const results = useQuery(["FetchProducts"], getAllProducts);

  return results?.data ?? [];
  // Optional Chaining  ?? // Nullish Coalesing operator
};

export default useGetAllProducts;
