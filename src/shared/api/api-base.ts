export const getApiData = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  return data.json();
};
