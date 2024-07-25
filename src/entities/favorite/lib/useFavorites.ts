import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getFavoriteProducts } from "../model/selectors";
import { addToFavorites, removeFromFavorites } from "../model/slice";

type Props = { id: number; user: null | string };

export const useFavorites = ({ user, id }: Props) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(getFavoriteProducts);
  const isInFavorite = favoriteProducts.includes(id);

  const addFavorite = useCallback(() => {
    dispatch(addToFavorites(id));
  }, [dispatch, user, id, favoriteProducts]);

  const removeFavorite = useCallback(() => {
    dispatch(removeFromFavorites(id));
  }, [dispatch, user, id, favoriteProducts]);

  return { isInFavorite, addFavorite, removeFavorite, favoriteProducts };
};
