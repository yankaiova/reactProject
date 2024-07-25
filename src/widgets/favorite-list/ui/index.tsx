import { Like } from "../../../features/toggle-favorite";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../shared/context";
import {
  getFavoriteProducts,
  getFavoritesinLocal,
  FavoriteItem,
  setFavorites,
} from "../../../entities/favorite";

export const FavoiteList = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(getFavoriteProducts);

  useEffect(() => {
    const storage = getFavoritesinLocal(user);
    if (storage) {
      console.log(JSON.parse(storage).favorites);
      dispatch(setFavorites(JSON.parse(storage).favorites));
    }
  }, []);

  return (
    <div>
      {favoriteProducts.map((item: number) => (
        <FavoriteItem
          id={item}
          key={item + "fav"}
          actions={<Like id={item} />}
        />
      ))}
    </div>
  );
};
