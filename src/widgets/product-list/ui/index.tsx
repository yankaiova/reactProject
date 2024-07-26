import { ProductItem, productApi } from "../../../entities/product";
import { Like } from "../../../features/toggle-favorite";
import { Product } from "../../../shared/model/types";

export const ProductList = () => {
  const { useGetProductsAllQuery } = productApi;
  const { data, isLoading } = useGetProductsAllQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Пусто</div>;
  return (
    <div>
      {data.map((item: Product) => (
        <ProductItem
          product={item}
          key={item.id}
          actions={<Like id={item.id} />}
        />
      ))}
    </div>
  );
};
