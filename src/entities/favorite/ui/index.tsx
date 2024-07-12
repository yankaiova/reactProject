import { Typography } from "@mui/material";
import { Product } from "../../../shared/model/types";
import { ProductCard } from "../../../shared/ui/cardProduct";
type Props = {
  product: Product;
  actions: JSX.Element;
};

export const FavoriteItem = ({ product, actions }: Props) => {
  return (
    <ProductCard id={product.id} mediaUrl={product.thumbnail} actions={actions}>
      <Typography>{product.title}</Typography>
      <Typography>{product.price}</Typography>
    </ProductCard>
  );
};
