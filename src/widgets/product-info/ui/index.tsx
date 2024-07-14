import { productApi } from "../../../entities/product/api/slice";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Like } from "../../../features/toggle-favorite";

export const ProductInfo = () => {
  const { useGetProductbyIdQuery } = productApi;
  const { id } = useParams();
  const { data, isLoading } = useGetProductbyIdQuery(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Пусто</div>;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={data.thumbnail} />
      <CardContent>
        <Rating name="read-only" value={data.rating} readOnly />
        <Typography>{data.title}</Typography>
        <Typography>{data.category}</Typography>
        <Typography>{data.price}</Typography>
        <Typography>{data.description}</Typography>
        <Typography>{data.brand}</Typography>
        {data.tags.map((tag) => (
          <Typography>#{tag} </Typography>
        ))}
      </CardContent>
      <CardActions>
        <Like product={data} />
      </CardActions>
    </Card>
  );
};