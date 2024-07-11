import { Link } from "react-router-dom";
import { Product } from "../model/types";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
type Props = { product: Product };
export const ProductCard = ({ product }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.thumbnail}
        title={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/${product.id}`}>
          <Button size="small">Подробнее</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
