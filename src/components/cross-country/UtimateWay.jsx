import React from "react";
import {
  BannerColor,
  BannerImage,
  
  ButtonStyled,
  Title,
} from "../../pages/how-it-works/styles";
import { Box, Container, Typography } from "@mui/material";

function UtimateWay() {
  return (
    <>
      <Box
        id="utimate-way"
        component={"section"}
        sx={{ padding: { xs: "80px 0", sm: "150px 0" }, position: "relative" }}
      >
        {/* Banner Image */}
        <BannerImage
          image={"/assets/how-it-works/utimate-way.jpg"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Title variant="h2" gutterBottom sx={{ lineHeight: "1.2em" }}>
              Cross Country Car Shipping: <br />
              <Box component={"span"} sx={{ color: "#E01933" }}>
                The Ultimate Way to Move your Vehicle.
              </Box>
            </Title>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: "18px", sm: "18px", md: "20px", lg: "29px" },
                fontWeight: 500,
                lineHeight: "1.4em",
                color: "#ffffff",
                marginBottom: "30px",
              }}
            >
              Vehicle owners and shippers alike can take use of{" "}
              <em>
                <strong>cross country car shipping</strong>
              </em>
              services to relocate their automobiles across the country. Those
              who are moving great distances or who need to transport their
              vehicles for other reasons, such as selling a car to someone who
              lives far away, will find this to be a valuable and practical
              choice.
            </Typography>

            <ButtonStyled
              component={"a"}
              href={"#get-a-quote"}
              variant="contained"
              disableRipple
              disableElevation
              sx={{
                transition: "0.1s linear",
                "&:hover": {
                  backgroundColor: "#E01933",
                  opacity: 0.8,
                },
              }}
            >
              Get a Quote
            </ButtonStyled>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default UtimateWay;
