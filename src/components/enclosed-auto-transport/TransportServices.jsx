import { Box, Container } from "@mui/material";
import React from "react";
import {
  BannerColor,
  BannerImage,
  ButtonStyled,
  Title,
  Title4,
} from "../../pages/how-it-works/styles";

function TransportServices({ background, title, text, text1 }) {
  return (
    <Box
      id="transport-services"
      component={"section"}
      sx={{ padding: { xs: "80px 0", sm: "150px 0" }, position: "relative" }}
    >
      {/* Banner Image */}
      <BannerImage
        image={
          background
            ? background
            : "/assets/enclosed-auto-transport/transport_services_background.jpg"
        }
        parallax={"true"}
        component={"div"}
      />
      {/* Banner Color */}
      <BannerColor
        color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
      />
      <Container maxWidth="xl">
        <Box component={"div"}>
          <Title sx={{ textAlign: "center" }}>
            {title ? title : "Enclosed Auto Transport"}{" "}
            <Box component={"span"} sx={{ color: "#E01933" }}>
              Services.
            </Box>
          </Title>

          <Title4 sx={{ textAlign: "center", fontWeight: "500" }} gutterBottom>
            {text
              ? text
              : `When it comes to protecting your fancy, expensive, or vintage car,
            enclosed carrier auto transport is the preferred choice for smart
            and careful car owners. They might not be as common as open
            carriers, but they’re definitely the topmost choice. At US Car-Go
            Enclosed Auto Transport, we understand the importance of
            safeguarding your valuable investment. Our enclosed carrier car
            shipping option provides the ultimate protection against potential
            harm and weather conditions.`}
          </Title4>

          <Title4 sx={{ textAlign: "center", fontWeight: "500" }}>
            {text1 ? (
              text1
            ) : (
              <>
                With our{" "}
                <em>
                  <strong>enclosed auto transport </strong>
                </em>
                services, your vehicle receives top-notch shielded transport.
                Equipped with cutting-edge features, our carriers ensure your
                car arrives at its destination in pristine condition. We take
                pride in delivering exceptional care for your vehicle, giving
                you peace of mind throughout the journey. Choose US Car-Go Auto
                Transport and join the elite group of car owners who settle for
                nothing less than the best.
              </>
            )}
          </Title4>

          <ButtonStyled
            component="a"
            href="#get-quote"
            sx={{
              color: "#fff",
              margin: "30px auto",
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
  );
}

export default TransportServices;
