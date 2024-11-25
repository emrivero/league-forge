import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.teamContainer": {
            backgroundColor: "#086788",
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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#FFA50088",
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: "#00693E",
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
    mode: "light",
    primary: {
      main: "#00693E",
    },
    secondary: {
      main: "#FFA500",
      "900": "#ba7d0d",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#4F4F4F",
    },
    grey: {
      "500": "#eee",
    },
  },
});

export const lightTheme = responsiveFontSizes(theme);
