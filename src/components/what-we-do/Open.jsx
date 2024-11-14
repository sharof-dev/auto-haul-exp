import { Box, Container } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  BodyText1,
  Section,
  Title,
} from "../../pages/how-it-works/styles";

function Open() {
  return (
    <>
      <Section component={"section"} id="open">
        <BannerImage
          image={"/assets/what-we-do/open_background.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          <Title variant="h3" sx={{ textAlign: "center" }}>
            Open vs Enclosed Car Shipping: <br />
            <Box component={"span"} sx={{ color: "#E01933" }}>
              Making the Right Choice for Your Vehicle.
            </Box>
          </Title>
          <BodyText1 variant="body1" sx={{ textAlign: "center" }}>
            Transporting vehicles involves two main types of carriers: open and
            enclosed. For newcomers to auto transport, it’s vital to grasp the
            difference and choose the best option for your vehicle. Our
            knowledgeable and friendly specialists are committed to helping you
            navigate the process, explore alternatives, and make an informed
            decision.
          </BodyText1>
        </Container>
      </Section>
    </>
  );
}

export default Open;
