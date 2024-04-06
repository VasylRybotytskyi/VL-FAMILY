import { useDispatch, useSelector } from "react-redux"; //
import {
  addToFavorite,
  removeFromFavorite,
} from "../redux/slices/favoritesSlice";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import { SlBasket } from "react-icons/sl";
import Button from "@mui/material/Button";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const CartItem = ({ food }) => {
  const { favoriteData } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const { id, images, name, price } = food;
  const isFavorite = favoriteData.some((item) => item.id === id);
  console.log(isFavorite);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(food));
    }
  };

  return (
    <Card
      sx={{
        minWidth: { xs: "85%", md: "100%" },
        maxWidth: 370,
        minHeight: "100%",
        position: "relative",
      }}
    >
      <CardActionArea>
        {images && (
          <CardMedia
            component="img"
            height="210"
            image={food.images[0]}
            alt="sneaker"
            sx={{ paddingX: "25px" }}
          />
        )}
        <CardContent>
          <Typography mb={1} variant="h5">
            {price}₴
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton
        sx={{ position: "absolute", top: "1px", right: "1px" }}
        aria-label="toggle-favorite"
        className="icon"
        onClick={handleToggleFavorite}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <Button
        onClick={() => {
          dispatch(addToCart(food));
          toast.success(`${food.name} додано до кошика`);
        }}
        variant="contained"
        sx={{
          position: "absolute",
          right: "15px",
          bottom: "43px",
          maxWidth: "35px",
          minWidth: "35px",
          maxHeight: "35px",
          minHeight: "35px",
          "&:hover": {
            transform: "scale(1.05)",
          },
          padding: "7px",
        }}
        color="primary"
      >
        <SlBasket size={25} />
      </Button>
    </Card>
  );
};

export default CartItem;
