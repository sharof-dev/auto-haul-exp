import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Typewriter from "typewriter-effect/dist/core";
import React, { useEffect, useRef } from "react";
import GetQuote from "../GetQuote";
import { BodyText, Heading } from "../../pages/how-it-works/styles";

const MainSection = () => {
  const typewriterContainerRef = useRef(null);

  useEffect(() => {
    if (typewriterContainerRef.current) {
      new Typewriter(typewriterContainerRef.current, {
        strings: ["Affordable.", "Reliable.", "Experienced."],
        autoStart: true,
        loop: true,
      });
    }
  }, []);
  useEffect(() => {
    const handleAosIn = (event) => console.log("animated in", event.detail);
    const handleAosOut = (event) => console.log("animated out", event.detail);

    document.addEventListener("aos:in", handleAosIn);
    document.addEventListener("aos:out", handleAosOut);

    return () => {
      document.removeEventListener("aos:in", handleAosIn);
      document.removeEventListener("aos:out", handleAosOut);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://uscargofreight.com/wp-content/uploads/2023/04/Home-Page-Bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: {
          xs: "25rem 1rem",
          sm: "15rem 2rem",
          md: "20rem 3rem",
          lg: "23rem 4rem",
        },
        color: "white",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(180deg, #11172B 40%, #101010 100%)",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          opacity: 0.8,
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ padding: "10px 5px", overflow: "hidden" }}
        >
          <Grid container spacing={2}>
            {/* Left section */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                textAlign: { xs: "center", sm: "left" },
                mb: { xs: 0, sm: 0 },
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: { xs: "2.5rem", sm: "3rem" } }}
                  color={"#e01933"}
                  fontWeight={600}
                  gutterBottom
                  ref={typewriterContainerRef}
                ></Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2.4rem",
                      sm: "3rem",
                      lineHeight: "normal",
                    },
                  }}
                  fontWeight={500}
                >
                  auto shipping services.
                </Typography>
                <br />
                <BodyText sx={{ fontWeight: 500 }}>
                  Welcome to{" "}
                  <span style={{ color: "#e01933" }}>US CAR-GO FREIGHT</span>.{" "}
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                  />
                  Your one-stop solution for shipping your vehicle nationwide.
                </BodyText>
              </Box>
            </Grid>

            {/* Right section */}
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <GetQuote />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MainSection;
