import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FeatureItem = ({
  title,
  children,
}: {
  title: string;
  children: string;
}) => {
  return (
    <Box
      sx={{
        textAlign: {
          xs: "center",
          md: "start",
        },
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1" gutterBottom={true}>
        {children}
      </Typography>
    </Box>
  );
};

export default FeatureItem;
