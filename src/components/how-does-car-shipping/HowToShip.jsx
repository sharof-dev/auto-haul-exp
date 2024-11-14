import {
  BannerColor,
  BannerImage,
  BodyText1,
  Section,
  Title,
} from "../../pages/how-it-works/styles";
import { Box, Container } from "@mui/material";
import CardStep from "../how-does-car-shipping/cards/CardStep";

const cardStepData = [
  {
    img: "/assets/how-it-works/how_to_ship_card0.webp",
    step: "Step 1",
    text: "Request a quote.",
    id: "#get-quote",
  },
  {
    img: "/assets/how-it-works/how_to_ship_card1.webp",
    step: "Step 2",
    text: "We will arrange the pickup of your vehicle.",
    id: "#we-pick",
  },
  {
    img: "/assets/how-it-works/how_to_ship_card2.png",
    step: "Step 3",
    text: "Receive your vehicle at the designated location.",
    id: "#receive",
  },
];

function HowToShip() {
  return (
    <>
      <Section component={"section"} id="how-to-ship">
        <BannerImage
          image={"/assets/how-it-works/how_to_ship.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl"  sx={{ overflow: "hidden" }}>
          <Box
            component={"div"}
            sx={{ marginBottom: "30px", textAlign: "center" }}
          >
            <Title variant="h2">
              How to Ship a Car
              <span style={{ color: "#E01933" }}> in Three Simple Steps?</span>
            </Title>
            <BodyText1 variant="subtitle1">
              Getting your ride shipped with us is as easy as 1, 2, 3!
            </BodyText1>
            <BodyText1 variant="body1">
              First give us a call and we’ll work with you to figure out the
              cost and schedule for shipping your vehicle. Secondly, Sit back
              and relax while our team of experts checks out your car and picks
              it up from any location you choose. Third step, enjoy some
              downtime as we safely transport and deliver your vehicle right to
              your doorstep. We’ll even give it a final inspection to make sure
              everything’s A-OK.
            </BodyText1>
            <BodyText1 variant="body1">
              No need to worry, we’ve got you covered every step of the way. So,
              let’s get your car on the road and to its destination hassle-free!
            </BodyText1>
          </Box>

          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: { xs: "20px", sm: "20px" },
            }}
          >
            {cardStepData.map((card, idx) => (
              <CardStep {...card} key={idx} />
            ))}
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default HowToShip;
