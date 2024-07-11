import { ProductCard } from "../../../entities/product";
import { useGetProductsAllQuery } from "../../../entities/product";

export const ProductList = () => {
  const { data, isLoading } = useGetProductsAllQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Пусто</div>;
  return (
    <div>
      {data.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
};
