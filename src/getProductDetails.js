const getProductDetails = async ({ queryKey }) => {
  const [id] = queryKey[1];

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await res.json();
  return json;
};

export default getProductDetails;
