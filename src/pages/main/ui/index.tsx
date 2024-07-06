import { useState, useEffect } from "react";
import { getApiData } from "../../../shared/api";
import { Product } from "../../../shared/model/types/product";
export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getApiData().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      {products.map((item: Product) => (
        <div key={item.id}>
          <img src={item.image} />
          <div>{item.title}</div>
          <div>{item.category}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  );
};
