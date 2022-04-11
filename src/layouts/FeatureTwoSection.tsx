import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FeatureImage from "../components/FeatureImage";
import FeatureItem from "../components/FeatureItem";
import BlacklistIcon from "../images/icon-blacklist.svg";
import TextIcon from "../images/icon-text.svg";
import PreviewIcon from "../images/icon-preview.svg";
import FeatureWithIcon from "../components/FeatureWithIcon";

const FeatureTwoSection = () => {
  return (
    <Box component="section" paddingTop="15rem">
      <Typography variant="h2" gutterBottom={true} align="center">
        Access Clipboard{" "}
        <Box
          sx={{
            display: {
              xs: "block",
              md: "inline",
            },
          }}
        >
          anywhere
        </Box>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        maxWidth="700px"
        marginX="auto"
        marginBottom="6rem"
      >
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </Typography>

      <Box
        position="relative"
        sx={{
          height: {
            xs: "340px",
            md: "500px",
            lg: "600px",
          },
          marginBlock: {
            xs: "3rem",
            md: "6rem",
            lg: "10rem",
          },
        }}
      >
        <Image
          alt="computer"
          src={`/image-devices.png`}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Stack spacing="2.8rem">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h2">Supercharge your workflow</Typography>
          <Typography variant="body1" gutterBottom={true}>
            Easily search your snippets by content, category, web address,
            application, and more.
          </Typography>
        </Box>
        <Stack
          spacing={{
            xs: "8rem",
            md: "2rem",
            lg: "2.5rem",
          }}
          paddingY="5rem"
          direction={{
            xs: "column",
            md: "row",
          }}
          justifyContent="center"
        >
          <FeatureWithIcon
            title=" Create blacklists"
            content="Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources."
          >
            <BlacklistIcon />
          </FeatureWithIcon>

          <FeatureWithIcon
            title="Plain text snippets"
            content="Remove unwanted formatting from copied text for a consistent look."
          >
            <TextIcon />
          </FeatureWithIcon>

          <FeatureWithIcon
            title="Sneak preview"
            content="Quick preview of all snippets on your Clipboard for easy access."
          >
            <PreviewIcon />
          </FeatureWithIcon>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FeatureTwoSection;
