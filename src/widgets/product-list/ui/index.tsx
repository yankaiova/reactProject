import { Grid } from "@mui/material";
import { ProductItem, productApi } from "../../../entities/product";
import { Like } from "../../../features/toggle-favorite";
import { Product } from "../../../shared/model/types";

export const ProductList = () => {
  const { useGetProductsAllQuery } = productApi;
  const { data, isLoading } = useGetProductsAllQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Пусто</div>;
  return (
    <Grid container columns={{ xs: 1, sm: 2, md: 3 }}>
      {data.map((item: Product) => (
        <Grid item key={item.id + "gr"} xs={1}>
          <ProductItem
            product={item}
            key={item.id}
            actions={<Like id={item.id} />}
          />
        </Grid>
      ))}
    </Grid>
  );
};
