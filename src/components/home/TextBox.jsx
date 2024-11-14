import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import { Heading, Title2 } from "../../pages/how-it-works/styles";

const TextBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: { xs: "4rem 1rem", sm: "6rem 2rem", md: "8rem 4rem" },
        textAlign: "center",
        borderRadius: "20px",
        boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.08)",
        "& h4": {
          color: "#333",
        },
        "& p": {
          color: "#999",
        },
      }}
    >
      <Container maxWidth="xl">
        <Title2
          variant="h4"
          fontWeight={600}
          // sx={{
          //   fontSize: { xs: "1.2rem", sm: "3rem" },
          //   lineHeight: 1.2,
          //   letterSpacing: "-0.015em",
          //   marginBottom: "2rem",
          // }}
        >
          Looking for the{" "}
          <span style={{ color: "#e01933" }}>best auto shipping services</span>{" "}
          in{" "}
          <Box
            component={"br"}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          />{" "}
          the nation
        </Title2>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: ".8rem", sm: "1.5rem" } }}
        >
          Look no further than US Car-Go Freight, your top-rated choice for
          efficient and dependable vehicle <br /> transportation. With our
          commitment to excellence and a proven track record, we have
          established ourselves as the leading name in the industry.
        </Typography>
      </Container>
    </Box>
  );
};

export default TextBox;
