import { Grid, Typography } from "@mui/material";
import CartItem from "./CartItem";
import Container from "@mui/material/Container";

const CartGrid = ({ foods }) => {
  return (
    <section
      style={{
        backgroundColor: "#F3F4F9",
      }}
    >
      <Container maxWidth="lg">
        {foods.length > 0 ? (
          <Grid
            container
            spacing={1}
            sx={{ margin: "-8px", display: "flex", justifyContent: "center" }}
          >
            {foods?.map((food, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                sx={{
                  padding: "8px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CartItem food={food} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography
            sx={{
              display: "grid",
              placeItems: "center",
              paddingTop: "200px",
            }}
          >
            Нічого не знайдено
          </Typography>
        )}
      </Container>
    </section>
  );
};

export default CartGrid;
