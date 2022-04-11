import React from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import GoToTopButton from "../components/GoToTopButton";
import theme from "../styles/theme";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container
          component="main"
          sx={{
            width: "90vw",
          }}
        >
          {children}
        </Container>
        {/* <GoToTopButton /> */}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
