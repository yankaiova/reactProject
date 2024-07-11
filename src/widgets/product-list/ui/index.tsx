import { Product, ProductCard } from "../../../entities/product";
import { productApi } from "../../../entities/product/api/slice";

export const ProductList = () => {
  const { useGetProductsAllQuery } = productApi;
  const { data, isLoading } = useGetProductsAllQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Пусто</div>;
  return (
    <div>
      {data.map((item: Product) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
};
