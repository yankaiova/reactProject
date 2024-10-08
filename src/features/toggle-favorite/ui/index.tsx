import { useContext } from "react";
import { LikeButton } from "../../../shared/ui/likeButton";
import {
  useFavorites,
  getFavoritesbyEmail,
  setFavorites,
} from "../../../entities/favorite";
import { AuthContext } from "../../../shared/context";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

type Props = { id: number };

export const Like = ({ id }: Props) => {
  const dispatch = useDispatch();
  const { user, isAuth } = useContext(AuthContext);
  const { addFavorite, removeFavorite, isInFavorite } = useFavorites({
    id,
    user,
  });

  useEffect(() => {
    const storage = getFavoritesbyEmail(user);
    if (storage) {
      dispatch(setFavorites(JSON.parse(storage).favorites));
    }
  }, []);

  return (
    <>
      {isAuth && (
        <LikeButton
          isLike={isInFavorite}
          likeClick={() => addFavorite()}
          removeLikeClick={() => removeFavorite()}
          key={id + "-like"}
        />
      )}
    </>
  );
};
