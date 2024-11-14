import { Box, Container } from "@mui/material";
import {
  Title,
  Section,
  BannerImage,
  BannerColor,
  ButtonStyled,
} from "../../pages/how-it-works/styles";
import CarGoCard from "./cards/CarGoCard";

const CarGoCardData = [
  {
    miniIcon: true,
    icon: "/assets/about/svg/commitment.svg",
    text: `Our experienced senior transport coordinators are always available to lend a helping hand and answer any questions you may have.`,
  },
  {
    icon: "/assets/about/speech_star.png",
    text: `With our wide coverage of 48 states, you can trust us to get your vehicle where it needs to go.                `,
  },
  {
    icon: "/assets/about/cup_star.png",
    text: `And when it comes to our drivers, we only work with the best and most reliable in the business, so you can rest assured that your precious cargo is in good hands.                `,
  },
];

function CarGo() {
  return (
    <>
      <Section component={"section"} id={"car-go"}>
        {/* Banner Image */}
        <BannerImage
          image={"/assets/about/car_go_background.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          <Box component={"div"}>
            <Box component={"div"} sx={{ marginBottom: "50px" }}>
              <Title variant="h3" color={"#fff"} sx={{ textAlign: "center" }}>
                US Car-Go Freight{" "}
              </Title>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "center", sm: "center", md: "flex-start" },
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              {CarGoCardData.map((card, idx) => (
                <CarGoCard {...card} key={idx} />
              ))}
            </Box>
            <ButtonStyled
              component={"a"}
              href={"#about-form"}
              variant="contained"
              disableRipple
              disableElevation
              sx={{
                margin: "0 auto",
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
      </Section>
    </>
  );
}

export default CarGo;
