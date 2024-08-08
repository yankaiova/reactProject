import { useSearchParams } from "react-router-dom";
import { Product } from "../../shared/model/types";
import { ProductItem, productApi } from "../../entities/product";
import { Like } from "../../features/toggle-favorite";
import { Container, Grid } from "@mui/material";

const SearchPage = () => {
  const [params] = useSearchParams();
  const query = params.get("search");

  const { useGetProductByNameQuery } = productApi;
  const { data, isLoading } = useGetProductByNameQuery(query || "");

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Пусто</div>;

  return (
    <Container>
      <Grid container columns={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((product: Product) => (
          <Grid item key={product.id + "gr"} xs={1}>
            <ProductItem
              key={product.id}
              product={product}
              actions={<Like id={product.id} />}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default SearchPage;
