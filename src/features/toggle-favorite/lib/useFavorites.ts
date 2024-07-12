import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getFavoriteProducts } from "../../../entities/favorite/model/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../entities/favorite/model/slice";
import { Product } from "../../../shared/model/types";

type Props = { product: Product; user: null | string };

export const useFavorites = ({ user, product }: Props) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(getFavoriteProducts);
  const isInFavorite = favoriteProducts.find(
    (item: Product) => item === product
  );

  const addFavorite = useCallback(() => {
    dispatch(addToFavorites({ product, user }));
  }, [dispatch, user, product, favoriteProducts]);

  const removeFavorite = useCallback(() => {
    dispatch(removeFromFavorites({ product, user }));
  }, [dispatch, user, product, favoriteProducts]);

  return { isInFavorite, addFavorite, removeFavorite };
};
