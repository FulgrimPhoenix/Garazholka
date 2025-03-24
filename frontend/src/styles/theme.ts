import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottomColor: "rgba(255, 255, 255, 0.7)",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Exo 2", "Arial", sans-serif', // Укажи свой шрифт
  },
  palette: {
    primary: {
      main: "#9F0040",
      contrastText: "#000",
      light: "#fff",
    },
    secondary: {
      main: "#09BEFF",
    },
    action: {
      active: "#fff",
      disabled: "rgba(255, 255, 255, 0.7)",
      disabledBackground: "rgba(255, 255, 255, 0.1)",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.6)",
    },
    background: {
      default: "#101010",
      paper: "#232323",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default theme;
