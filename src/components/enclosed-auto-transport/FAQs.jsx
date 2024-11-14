import React from "react";
import {
  BannerColor,
  BannerImage,
  BodyText1,
  Section,
  Title3,
} from "../../pages/how-it-works/styles";
import { Box, Container, Stack } from "@mui/material";
import CardMiniDrop from "../how-does-car-shipping/cards/CardMiniDrop";
import CardImg from "../how-does-car-shipping/cards/CardImg";
import ItemDrop from "../how-does-car-shipping/ItemDrop";

function FAQs({
  background,
  backgroundColor,
  title,
  text,
  step,
  data,
  listDot,
}) {
  return (
    <>
      <Section component={"section"} id="we-pick">
        {background && (
          <>
            <BannerImage
              image={background}
              parallax={"true"}
              component={"div"}
            />
            {/* Banner Color */}
            <BannerColor
              color={
                backgroundColor
                  ? backgroundColor
                  : "linear-gradient(180deg, #11172b 40%, #11172B 100%)"
              }
            />
          </>
        )}

        <Container maxWidth="xl">
          {step && (
            <Box
              component={"ul"}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: {
                  xs: "column-reverse",
                  sm: "column-reverse",
                  md: "column-reverse",
                  lg: "row-reverse",
                },
              }}
            >
              <CardMiniDrop
                id={"#"}
                reverse={true}
                icon={"/assets/how-it-works/svg/truck-icon.svg"}
                step={"Step 2"}
                title={`We Pick Up Your Vehicle.`}
                bodyText={`
						Our team is ready to make your vehicle pickup easy and hassle-free. Once you've scheduled your pickup, our allocated carrier will reach out to you to arrange a convenient time, date, and location.`}
                hiddenText={`
              We know that waiting around for a pickup can be frustrating, so our carrier will give you a heads up a few hours before they arrive. When they roll up, we'll take a good look at your vehicle and make notes on any issues we spot. Don't worry, we'll get your approval before we move forward and provide you with a copy of the Bill of Lading for your records. We understand that you'll want to keep tabs on your vehicle, which is why we'll keep you updated frequently as it travels to its destination. You can trust that your vehicle is in good hands with us.
            `}
              />
              <CardImg
                reverse={true}
                mini={true}
                img={"/assets/how-it-works/we_pick.jpg"}
              />
            </Box>
          )}

          <Box component={"div"} sx={{ marginTop: "70px" }}>
            <Title3 variant="h3" sx={{ marginBottom: "20px" }}>
              {title}
            </Title3>

            {text && <BodyText1>{text}</BodyText1>}

            <Stack spacing={"15px"}>
              {data.map((item, idx) => (
                <ItemDrop {...item} listDot={listDot} dark={true} key={idx} />
              ))}
            </Stack>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default FAQs;
