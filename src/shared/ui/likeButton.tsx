import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";

type Props = {
  isLike: boolean;
  likeClick: () => void;
  removeLikeClick: () => void;
};

export const LikeButton = ({ isLike, likeClick, removeLikeClick }: Props) => {
  function handleClick() {
    if (isLike) {
      removeLikeClick();
    } else {
      likeClick();
    }
  }
  return (
    <Box onClick={handleClick} style={{ cursor: "pointer" }}>
      {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </Box>
  );
};
