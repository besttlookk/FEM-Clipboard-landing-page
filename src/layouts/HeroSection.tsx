import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Buttons from "../components/Button";

const HeroSection = () => {
  return (
    <Box component="section">
      <Typography variant="h1" sx={{ textAlign: "center" }} gutterBottom={true}>
        A history of{" "}
        <Box
          component="span"
          sx={{
            display: {
              xs: "block",
              md: "inline",
            },
          }}
        >
          everything you copy
        </Box>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        maxWidth="680px"
        marginX="auto"
        marginBottom="5rem"
      >
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </Typography>
      <Buttons />
    </Box>
  );
};

export default HeroSection;
