import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const FeatureImage = ({ alt, image }: { alt: string; image: string }) => {
  return (
    <Box
      position="relative"
      sx={{
        width: {
          xs: "100%",
          md: "60%",
        },
        height: {
          xs: "340px",
          md: "500px",
        },
        marginBlock: {
          xs: "3rem",
          md: "0",
        },
      }}
    >
      <Image alt={alt} src={`/${image}`} layout="fill" objectFit="contain" />
    </Box>
  );
};

export default FeatureImage;
