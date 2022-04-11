import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "../components/Logo";

const LogosSection = () => {
  return (
    <Stack
      component="section"
      alignItems="center"
      justifyContent="center"
      spacing="5rem"
      direction={{
        xs: "column",
        md: "row",
      }}
      sx={{
        paddingBlock: {
          xs: "3rem",
          md: "5rem",
        },
      }}
    >
      <Logo alt="google" />
      <Logo alt="ibm" />
      <Logo alt="microsoft" />
      <Logo alt="hp" />

      <Box position="relative" height="40px" width="120px" marginY="3rem">
        <Image
          alt="vector-graphics"
          src={`/logo-vector-graphics.png`}
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </Stack>
  );
};

export default LogosSection;
