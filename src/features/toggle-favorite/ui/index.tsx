import { useContext } from "react";
import { Product } from "../../../shared/model/types";
import { LikeButton } from "../../../shared/ui/likeButton";
import { useFavorites } from "../../../entities/favorite/lib/useFavorites";
import { AuthContext } from "../../../shared/context";

type Props = { id: number };

export const Like = ({ id }: Props) => {
  const { user } = useContext(AuthContext);
  const { addFavorite, removeFavorite, isInFavorite } = useFavorites({
    id,
    user,
  });

  return (
    <LikeButton
      isLike={isInFavorite}
      likeClick={() => addFavorite()}
      removeLikeClick={() => removeFavorite()}
      key={id + "-like"}
    />
  );
};
