import { Box, Typography } from "@mui/material";
import React from "react";
import Buttons from "../components/Button";

const BottomSection = () => {
  return (
    <Box component="section" paddingY="15rem">
      <Typography variant="h2" gutterBottom={true} align="center">
        Clipboard for iOS and
        <Box
          sx={{
            display: {
              xs: "block",
              md: "inline",
            },
          }}
        >
          Mac OS
        </Box>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        maxWidth="700px"
        marginX="auto"
        marginBottom="4rem"
      >
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </Typography>
      <Buttons />
    </Box>
  );
};

export default BottomSection;
