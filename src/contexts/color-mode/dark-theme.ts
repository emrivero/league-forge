import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
  },
  typography: {
    h2: {
      fontFamily: '"Sporting", sans-serif',
    },
    button: {
      fontFamily: '"Sporting", sans-serif',
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#00af3E",
    },
    secondary: {
      main: "#FFA500",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },
});

export const darkTheme = responsiveFontSizes(theme);
