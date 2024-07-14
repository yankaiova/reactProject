import { FavoriteItem } from "../../../entities/favorite/ui";
import { Product } from "../../../shared/model/types";
import { Like } from "../../../features/toggle-favorite";
import { useSelector } from "react-redux";
import { getFavoriteProducts } from "../../../entities/favorite/model/selectors";

export const FavoiteList = () => {
  const favoriteProducts = useSelector(getFavoriteProducts);
  return (
    <div>
      {favoriteProducts.map((item: Product) => (
        <FavoriteItem
          product={item}
          key={item.id + "fav"}
          actions={<Like product={item} />}
        />
      ))}
    </div>
  );
};
