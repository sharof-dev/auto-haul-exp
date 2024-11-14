import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

function WhatToConsiderCard({ text, hiddenText, img }) {
  return (
    <Grid
      item
      sx={{
        width: { xs: "100%", sm: "100%", md: "auto" },
        margin: "10px",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25px",
        minHeight: "350px",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow .2s",
        cursor: "default",
        boxShadow:
          "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        "&:hover": {
          boxShadow:
            "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
          ".hidden-text": {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: "1",
          },
        },
      }}
    >
      <Box
        component={"div"}
        sx={{
          padding: "0 30px",
          width: "100%",
          maxWidth: { xs: "500px", sm: "500px", md: "260px" },
        }}
      >
        <Box
          width={188}
          height={130}
          component={"img"}
          src={img}
          sx={{
            borderRadius: "25px",
            width: "100%",
            maxWidth: "100%",
            height: "auto",
          }}
          alt={"#"}
        />
        <Typography
          variant="h4"
          sx={{
            fontSize: "26px",
            fontWeight: 600,
            color: "#11172B",
            textAlign: "center",
          }}
        >
          {text}
        </Typography>
      </Box>

      {/* Hidden text */}
      <Box
        component={"div"}
        className="hidden-text"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(.9)",
          opacity: "0",
          padding: "20px 30px",
          textAlign: "center",
          backgroundColor: "#fff",
          transition: "all 0.5s",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "1.5",
            color: "#333",
          }}
        >
          {hiddenText}
        </Typography>
      </Box>
    </Grid>
  );
}

export default WhatToConsiderCard;
