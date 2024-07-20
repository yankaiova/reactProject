import { productApi } from "../../entities/product/api/slice";
import { useSearchParams } from "react-router-dom";
import { Product } from "../../shared/model/types";
import { ProductItem } from "../../entities/product";
import { Like } from "../../features/toggle-favorite";

const SearchPage = () => {
  const [params] = useSearchParams();
  const query = params.get("search");

  const { useGetProductByNameQuery } = productApi;
  const { data, isLoading } = useGetProductByNameQuery(query || "");

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Пусто</div>;

  return (
    <div>
      {data.map((product: Product) => (
        <ProductItem
          key={product.id}
          product={product}
          actions={<Like product={product} />}
        />
      ))}
    </div>
  );
};
export default SearchPage;
