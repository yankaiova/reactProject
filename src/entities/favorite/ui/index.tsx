import { Typography } from "@mui/material";
import { productApi } from "../../product/api/slice";
import { ProductCard } from "../../../shared/ui/cardProduct";

type Props = {
  id: number;
  actions: JSX.Element;
};

export const FavoriteItem = ({ id, actions }: Props) => {
  const { useGetProductbyIdQuery } = productApi;
  const { data, isLoading } = useGetProductbyIdQuery(id);
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {data && (
        <ProductCard id={id} mediaUrl={data.thumbnail} actions={actions}>
          <Typography>{data.title}</Typography>
          <Typography>{data.price}</Typography>
        </ProductCard>
      )}
    </>
  );
};
