import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2A2B2C",
    },
    secondary: {
      main: "#F2F3F8",
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
