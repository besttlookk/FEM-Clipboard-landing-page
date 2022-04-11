import { Button, Stack } from "@mui/material";
import React from "react";

const Buttons = () => {
  return (
    <Stack
      spacing={3}
      mt="2rem"
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
    >
      <Button variant="contained" sx={{ paddingInline: "6rem" }}>
        Download for iOS
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ paddingInline: "6rem" }}
      >
        Download for Mac
      </Button>
    </Stack>
  );
};

export default Buttons;
