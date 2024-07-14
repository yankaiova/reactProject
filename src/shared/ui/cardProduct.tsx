import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,Button
} from "@mui/material";

type Props = { id:number,mediaUrl:string,children: React.ReactNode, actions:JSX.Element };

export const ProductCard = ({ id,mediaUrl,actions,children }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={mediaUrl}
      />
      <CardContent>
        {children}
      </CardContent>
      <CardActions>
        <Link to={`/${id}`}>
          <Button size="small">Подробнее</Button>
        </Link>
        {actions}
      </CardActions>
    </Card>
  );
};