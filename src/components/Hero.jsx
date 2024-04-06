import { Box, Stack, Typography, Container, Button } from "@mui/material";
import hero from "../assets/images/bgHero1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
      }}
    >
      <Box
        sx={{
          paddingTop: {
            xs: "110%",
            sm: "70%",
            md: "50%",
            lg: "35%",
          },
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundImage: `url(${hero})`,
          position: "relative",
          zIndex: 1,
          "&::before": {
            content: '""',
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            pointerEvents: "none",
            background: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 3,
          }}
        >
          <Stack>
            <Typography sx={{ typography: { sm: "h2", xs: "h3" } }}>
              Свіжа органічна їжа
            </Typography>
            <Typography
              sx={{ typography: { sm: "h6", xs: "caption" } }}
              textAlign="center"
            >
              Ми дозволяємо насолоджуватися місцевими екологічно
              <br /> чистими та здоровими
              <br /> продуктами харчування за помірними цінами та зручною
              доставкою
            </Typography>
            <Button
              color="secondary"
              sx={{ width: "200px", mr: "auto", ml: "auto", mt: 2 }}
              variant="outlined"
              component={Link}
              to="/products"
            >
              Здійснити покупку
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
