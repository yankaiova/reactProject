import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
  isLike: boolean;
  likeClick: () => void;
  removeLikeClick: () => void;
};

export const LikeButton = ({ isLike, likeClick, removeLikeClick }: Props) => {
  return (
    <div>
      {isLike ? (
        <FavoriteIcon onClick={likeClick} />
      ) : (
        <FavoriteBorderIcon onClick={removeLikeClick} />
      )}
    </div>
  );
};
