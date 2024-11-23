import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#FFA50088",
          },
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
    mode: "light",
    primary: {
      main: "#00693E",
    },
    secondary: {
      main: "#FFA500",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#000000",
      secondary: "#4F4F4F",
    },
  },
});

export const lightTheme = responsiveFontSizes(theme);
