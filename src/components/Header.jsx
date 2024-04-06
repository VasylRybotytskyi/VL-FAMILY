import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SlBasket } from "react-icons/sl";

const links = [
  { icon: <AppsIcon />, pageLink: "/products" },
  { icon: <FavoriteBorderIcon />, pageLink: "/favorite" },
  { icon: <SlBasket size={21} />, pageLink: "/basket" },
];

const Header = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        backgroundColor: "#2A2B2C",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "inherit" }} // Додайте стилізацію тексту
          >
            VL-FAMILY
          </Typography>

          <Stack direction="row">
            {links.map(({ icon, pageLink }, index) => (
              <IconButton
                component={Link}
                to={pageLink}
                key={index}
                color="secondary"
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
