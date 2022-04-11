import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(171, 66%, 44%)",
    },

    secondary: {
      main: "hsl(233, 100%, 69%)",
    },
  },
  typography: {
    fontFamily: ["Bai Jamjuree", "sans-serif"].join(","),
    h1: {
      fontSize: "3.2rem",
      "@media (min-width:600px)": {
        fontSize: "4.2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "4.6rem",
      },
      fontWeight: 600,
      color: "hsl(210, 10%, 33%)",
    },
    h2: {
      fontSize: "2.8rem",
      "@media (min-width:600px)": {
        fontSize: "3.4rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3.6rem",
      },
      fontWeight: 600,
      marginBottom: "1.8rem",
      color: "hsl(210, 10%, 33%)",
    },

    h3: {
      fontSize: "2.8rem",
      marginBottom: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.4rem",
        marginBottom: "1.6rem",
      },
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.8rem",
      "@media (min-width:600px)": {
        fontSize: "1.9rem",
      },
      lineHeight: "1.5",
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 24,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          paddingBlock: "1.4rem",
          borderRadius: "10rem",
          fontSize: "1.8rem",
          fontWeight: "600",
          color: "white",
        },
      },
    },
  },
});

export default theme;
