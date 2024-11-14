import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
} from "@mui/material";

const ShippingSteps = ({ title, titleMark, data, cardBg }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${cardBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: { xs: "10rem 1rem", sm: "10rem 2rem" },
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
        }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
            {title && (
              <Typography
                sx={{ fontSize: { xs: "1.8rem", sm: "4rem" } }}
                fontWeight={700}
              >
                {title ? title : ""}{" "}
                <span style={{ color: "#e01933" }}>
                  {titleMark ? titleMark : " "}
                </span>
                .{" "}
              </Typography>
            )}
          </Grid>
          {data &&
            data.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: "white",
                    textAlign: "center",
                    width: "90%",
                    p: "20px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    borderRadius: "20px",
                    ml: 4,
                  }}
                >
                  <CardContent>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        maxHeight: "200px",
                        objectFit: "contain",
                      }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    {item.description && (
                      <Typography variant="body2" color="textSecondary">
                        {item.description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShippingSteps;
