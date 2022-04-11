import { Stack, Box, Grid } from "@mui/material";
import React from "react";
import Logo from "../images/logo.svg";
import bgMobile from "../images/bg-header-mobile.png";

const Header = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        height: {
          xs: "40vh",
          md: "35vh",
        },
        backgroundImage: {
          xs: "url('/bg-header-mobile.png')",
          md: "url('/bg-header-desktop.png')",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% ",
      }}
    >
      <Logo />
    </Grid>
  );
};

export default Header;
