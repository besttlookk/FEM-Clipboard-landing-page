import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FeatureImage from "../components/FeatureImage";
import FeatureItem from "../components/FeatureItem";

const FeatureOneSection = () => {
  return (
    <Box component="section" paddingTop="15rem">
      <Typography variant="h2" gutterBottom={true} align="center">
        Keep track of your{" "}
        <Box
          sx={{
            display: {
              xs: "block",
              md: "inline",
            },
          }}
        >
          snippets
        </Box>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        maxWidth="700px"
        marginX="auto"
        marginBottom="6rem"
      >
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: "0", md: "4rem", lg: "6rem" }}
        alignItems="center"
      >
        <FeatureImage alt="computer" image="image-computer.png" />
        <Stack
          spacing="2.8rem"
          sx={{
            width: {
              xs: "100%",
              md: "40%",
            },
          }}
        >
          <FeatureItem title="Quick Search">
            Easily search your snippets by content, category, web address,
            application, and more.
          </FeatureItem>

          <FeatureItem title="iCloud Sync">
            Instantly saves and syncs snippets across all your devices.
          </FeatureItem>

          <FeatureItem title="Complete History">
            Retrieve any snippets from the first moment you started using the
            app.
          </FeatureItem>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FeatureOneSection;
