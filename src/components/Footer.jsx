import { Link } from "react-router-dom";
import { Typography, IconButton, Grid, Container } from "@mui/material";
import { icons } from "../data/footer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Footer = () => {
  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{
        backgroundColor: "#2A2B2C",
        py: { xs: 2, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent={{ xs: "center", sm: "start" }}
              alignItems="center"
            >
              <Typography
                variant="h6"
                noWrap
                color="secondary"
                component={Link}
                to="/"
                sx={{
                  display: "flex",
                  alignItems: "center",

                  textDecoration: "none",
                }}
              >
                VL-FAMILY
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent={{ xs: "center", sm: "end", md: "center" }}
              alignItems="center"
            >
              <Typography variant="caption" color="secondary">
                Усі права захищені "VL-FAMILY" © {new Date().getFullYear()}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              justifyContent={{ xs: "center", md: "end" }}
              alignItems="center"
            >
              {icons.map((icon, index) => (
                <IconButton
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ "&:hover": { transform: "scale(1.1)" } }}
                >
                  <img src={icon.icon} alt={`icon-${index}`} width={24} />
                </IconButton>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
