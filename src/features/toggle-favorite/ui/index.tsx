import { useContext } from "react";
import { Product } from "../../../shared/model/types";
import { LikeButton } from "../../../shared/ui/likeButton";
import { useFavorites } from "../lib/useFavorites";
import { AuthContext } from "../../../shared/context";

type Props = { product: Product };

export const Like = ({ product }: Props) => {
  const { user } = useContext(AuthContext);
  const { addFavorite, removeFavorite, isInFavorite } = useFavorites({
    product,
    user,
  });

  return (
    <LikeButton
      isLike={isInFavorite}
      likeClick={() => addFavorite()}
      removeLikeClick={() => removeFavorite()}
    />
  );
};
