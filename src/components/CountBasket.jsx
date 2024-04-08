import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../redux/slices/cartSlice";

const CountBasket = ({ cart }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrementQuantity(cart));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(cart));
  };

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      sx={{ width: "60px" }}
    >
      <IconButton onClick={handleDecrement}>
        <RemoveIcon
          sx={{
            maxWidth: "15px",
            minWidth: "15px",
            maxHeight: "15px",
            minHeight: "15px",
          }}
        />
      </IconButton>
      <Typography variant="body2">{cart?.quantity}</Typography>
      <IconButton onClick={handleIncrement}>
        <AddIcon
          sx={{
            maxWidth: "15px",
            minWidth: "15px",
            maxHeight: "15px",
            minHeight: "15px",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default CountBasket;
