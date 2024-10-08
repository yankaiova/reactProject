import { Typography, Rating } from "@mui/material";
import { Product } from "../../../shared/model/types";
import { ProductCard } from "../../../shared/ui/cardProduct";
type Props = {
  product: Product;
  actions: JSX.Element;
};

export const ProductItem = ({ product, actions }: Props) => {
  return (
    <ProductCard id={product.id} mediaUrl={product.thumbnail} actions={actions}>
      <Rating name="read-only" value={product.rating} readOnly />
      <Typography>{product.title}</Typography>
      <Typography>{product.category}</Typography>
      <Typography>{product.price}</Typography>
    </ProductCard>
  );
};
