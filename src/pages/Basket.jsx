import {
  Box,
  //   Button,
  Container,
  Divider,
  Grid,
  //   List,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import CountBasket from "../components/CountBasket";
import ModalCheckout from "../components/ModalCheckout";

const Basket = () => {
  const { cartData } = useSelector((state) => state.cart);

  const totalAmount = cartData.reduce((acc, { price, quantity }) => {
    const itemTotal = price * quantity;
    return acc + itemTotal;
  }, 0);

  const dispatch = useDispatch();

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h5" gutterBottom>
        Корзина
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {cartData?.length > 0 ? (
            <>
              {cartData?.map((cart) => (
                <Paper
                  key={cart.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                  >
                    <img width={50} src={cart.images[0]} alt={name} />
                    <Typography variant="body2">{cart.name}</Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={4}
                  >
                    <Typography variant="body2">{cart.price}₴/кг</Typography>
                    <CountBasket cart={cart} />
                    <IconButton
                      onClick={() => dispatch(removeFromCart(cart.id))}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </Paper>
              ))}
            </>
          ) : (
            <Typography
              sx={{
                display: "grid",
                placeItems: "center",
                height: "100%",
              }}
            >
              Ваша корзина пуста
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Stack spacing={1}>
              <Typography variant="h5">Підсумок</Typography>
              <Divider />
              <Typography>Кількість товарів: {cartData?.length}</Typography>
              <Typography>Доставка Нова Пошта: від 70₴</Typography>
              <Typography>Комісія за переказ коштів: 20₴ + 2%</Typography>

              <Divider />
              <Typography>До сплати:{totalAmount}₴</Typography>

              <ModalCheckout cartData={cartData} />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Basket;
