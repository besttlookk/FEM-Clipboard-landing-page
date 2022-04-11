import React from "react";
import { Box, Typography } from "@mui/material";

const FeatureWithIcon = ({
  children,
  title,
  content,
}: {
  children: React.ReactNode;
  title: string;
  content: string;
}) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: {
          xs: "100%",
          md: "280px",
          lg: "340px",
        },
      }}
    >
      {children}
      <Typography variant="h3" marginTop="4rem">
        {title}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </Box>
  );
};

export default FeatureWithIcon;
