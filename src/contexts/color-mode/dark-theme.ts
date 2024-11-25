import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.teamContainer": {
            backgroundColor: "#06aed5",
          },
        },
      },
    },
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
      "900": "#f0c26e",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
    grey: {
      "500": "#999",
    },
  },
});

export const darkTheme = responsiveFontSizes(theme);
