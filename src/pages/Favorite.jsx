import { useSelector } from "react-redux";
import { Typography, Grid, Container } from "@mui/material";
import CartItem from "../components/CartItem";

const Favorite = () => {
  const { favoriteData } = useSelector((state) => state.favorite);

  return (
    <Container sx={{ my: 3 }}>
      <Typography variant="h5" textAlign="center" mb={2}>
        Список улюблених
      </Typography>
      {favoriteData.length > 0 ? (
        <Grid container spacing={1} sx={{ margin: "-8px" }}>
          {favoriteData.map((food, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{ padding: "8px" }}
            >
              <CartItem food={food} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="body1"
          sx={{
            display: "grid",
            placeItems: "center",
            paddingTop: "200px",
          }}
        >
          Ви ще нічого не обрали
        </Typography>
      )}
    </Container>
  );
};

export default Favorite;
