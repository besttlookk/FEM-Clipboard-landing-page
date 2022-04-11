import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Logo = ({ alt }: { alt: string }) => {
  return (
    <Box position="relative" height="50px" width="180px" marginY="3rem">
      <Image
        alt={alt}
        src={`/logo-${alt}.png`}
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default Logo;
