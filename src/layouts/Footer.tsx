import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Logo from "../images/logo.svg";
import FbLogo from "../images/icon-facebook.svg";
import TwIcon from "../images/icon-twitter.svg";
import InstaIcon from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <Box bgcolor="#f1f1f1" component="footer">
      <Container sx={{ padding: "6rem" }}>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          alignItems="center"
          spacing="4rem"
          justifyContent={{
            xs: "center",
            md: "space-between",
          }}
        >
          <Logo />
          <Stack
            component="ul"
            alignItems="center"
            spacing="2rem"
            direction={{ xs: "column", md: "row" }}
          >
            <Box component="li" fontSize="1.6rem">
              FAXs
            </Box>
            <Box component="li" fontSize="1.6rem">
              Contact Us
            </Box>
            <Box component="li" fontSize="1.6rem">
              Privacy Policy
            </Box>
            <Box component="li" fontSize="1.6rem">
              Press Kit
            </Box>
            <Box component="li" fontSize="1.6rem">
              Install Guide
            </Box>
          </Stack>
          <Stack direction="row" spacing="3rem">
            <FbLogo />
            <TwIcon />
            <InstaIcon />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
