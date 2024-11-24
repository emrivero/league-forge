import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.sportingFont": {
            fontFamily: '"Sporting", sans-serif',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: "#00af3E",
        },
        subheader: {
          color: "#FFA500",
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
