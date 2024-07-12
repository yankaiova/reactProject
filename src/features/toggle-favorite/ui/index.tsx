import { Product } from "../../../shared/model/types";
import { LikeButton } from "../../../shared/ui/likeButton";
import { useFavorites } from "../lib/useFavorites";

type Props = { product: Product; user: null | string };

export const Like = ({ product, user }: Props) => {
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
