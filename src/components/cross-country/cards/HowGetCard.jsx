import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function HowGetCard({ title, icon, data }) {
  return (
    <Grid
      item
      sx={{
        padding: "10px",
        width: "100%",
        maxWidth: data ? "351px" : "285px",
        backgroundColor: "#fff",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          h5: {
            color: "#E01933",
          },
        },
      }}
    >
      <Box
        component={"div"}
        sx={{
          margin: "10px auto",
          width: "100%",
          maxWidth: "138px",
          height: "138px",
          border: "4px solid #818181",
          padding: "35px",
          backgroundColor: "#11172B",
          borderRadius: "50%",
        }}
      >
        <Box
          width={60}
          height={60}
          component={"img"}
          src={icon}
          alt={`${title} icon`}
        />
      </Box>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          marginTop: "15px",
          padding: "15px",
          fontSize: "20px",
          fontWeight: 400,
          color: "#11172B",
          transition: "transform 0.3s",
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
}

export default HowGetCard;
