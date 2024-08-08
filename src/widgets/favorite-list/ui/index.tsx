import { Like } from "../../../features/toggle-favorite";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../shared/context";
import {
  getFavoriteProducts,
  getFavoritesbyEmail,
  FavoriteItem,
  setFavorites,
} from "../../../entities/favorite";
import { Grid } from "@mui/material";

export const FavoiteList = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(getFavoriteProducts);

  useEffect(() => {
    const storage = getFavoritesbyEmail(user);
    if (storage) {
      dispatch(setFavorites(JSON.parse(storage).favorites));
    }
  }, []);

  return (
    <Grid container columns={{ xs: 1, sm: 2, md: 3 }}>
      {favoriteProducts.map((item: number) => (
        <Grid item key={item + "gr"} xs={1}>
          <FavoriteItem
            id={item}
            key={item + "fav"}
            actions={<Like id={item} />}
          />
        </Grid>
      ))}
    </Grid>
  );
};
