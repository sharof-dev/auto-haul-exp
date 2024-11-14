import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PolicyIcon from "@mui/icons-material/Policy";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { styled } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BannerColor,
  BannerImage,
  Heading,
  Section,
  Title4,
} from "../../pages/how-it-works/styles";

// Styled components
const CircleContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "600px",
  height: "600px",
  borderRadius: "50%",
  border: "1px solid silver",
  margin: "120px auto",
  marginBottom: "150px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    border: "0px",
    height: "auto",
    margin: "40px auto",
  },
}));

const ServiceItem = styled("div")(
  ({ top, left, backgroundColor, isActive, theme }) => ({
    position: "absolute",
    width: "150px",
    height: "150px",
    backgroundColor: isActive ? "#e01933" : backgroundColor || "#0D1B2A",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "10px",
    top: top,
    left: left,
    transform: "translate(-50%, -50%)",
    transition:
      "transform 0.5s ease, background-color 0.3s ease, z-index 0.3s ease",
    zIndex: isActive ? 2 : 1,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: 0,
      left: 0,
      transform: "translate(0%, 0%)",
    },
  })
);

const ServiceDescription = styled("div")({
  color: "#0D1B2A",
  borderRadius: "5px",
  padding: "10px",
  width: "100%",
  textAlign: "center",
  lineHeight: 1.5,
  fontSize: "20px",
  marginTop: "10px",
});

const HighlightedSpan = styled("span")({
  color: "#e01933",
});

const serviceTxt = [
  {
    id: 1,
    desc: "Trusted by thousand plus clients, we are the go-to choice for reliable and affordable vehicle shipping services nationwide. Experience the peace of mind that comes with our trusted reputation and entrust us with getting your vehicle safely to its destination.",
  },
  {
    id: 2,
    desc: "Get an instant quote for our top-notch vehicle shipping services, providing hassle-free and efficient transport with a focus on affordability, safety, reliability, and competitive pricing.",
  },
  {
    id: 3,
    desc: "Secure your peace of mind with US Car-Go's fully insured carriers and comprehensive coverage, ensuring the utmost safety and reliability for your valuable vehicle.",
  },
  {
    id: 4,
    desc: "US Car-Go Freight team goes above and beyond to understand your preferences and provide customized solutions that exceed your expectations.",
  },
  {
    id: 5,
    desc: "Our commitment to budget-friendly solutions ensures that you receive exceptional value without compromising on reliability or customer satisfaction.",
  },
  {
    id: 6,
    desc: "Our exceptional customer support team is here to assist you every step of the way. With a commitment to prompt and effective resolution of your inquiries and concerns, we strive to provide unparalleled support that exceeds your expectations.",
  },
];

const services = [
  {
    id: 1,
    icon: <PeopleIcon style={{ fontSize: 30, color: "white" }} />,
    desc: serviceTxt[0].desc,
    title: "Thousands of Trusted Clients",
    top: "0%",
    left: "50%",
    backgroundColor: "#0D1B2A",
  },
  {
    id: 2,
    icon: <FormatQuoteIcon style={{ fontSize: 30, color: "white" }} />,
    desc: serviceTxt[1].desc,
    title: "Instant Quote",
    top: "35%",
    left: "95%",
    backgroundColor: "#0D1B2A",
  },
  {
    id: 3,
    icon: <PolicyIcon style={{ fontSize: 30, color: "white" }} />,
    desc: serviceTxt[2].desc,
    title: "Insurance Coverage",
    top: "75%",
    left: "90%",
    backgroundColor: "#0D1B2A",
  },
  {
    id: 4,
    icon: <DirectionsBusIcon style={{ fontSize: 30, color: "white" }} />,
    desc: serviceTxt[3].desc,
    title: "Personalized Services",
    top: "98%",
    left: "50%",
    backgroundColor: "#0D1B2A",
  },
  {
    id: 5,
    icon: <AttachMoneyIcon style={{ fontSize: 30, color: "white" }} />,
    desc: serviceTxt[4].desc,
    title: "Affordable Services",
    top: "75%",
    left: "5%",
    backgroundColor: "#0D1B2A",
  },
  {
    id: 6,
    icon: <SupportAgentIcon style={{ fontSize: 30, color: "white" }} />,
    desc: serviceTxt[5].desc,
    title: "Customer Support",
    top: "35%",
    left: "3%",
    backgroundColor: "#0D1B2A",
  },
];

function App({ background, backgroundColor, title, text }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeServiceId, setActiveServiceId] = useState(null);

  const getServiceDesc = (id) => {
    const service = serviceTxt.find((item) => item.id === id);
    return service ? service.desc : "";
  };

  return (
    <>
      <Section>
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
        <Container
          maxWidth="lg"
          style={{ textAlign: "center", marginTop: title ? "0" : "50px" }}
        >
          <Heading
            variant="h2"
            fontWeight={600}
            sx={{ color: background ? "#fff" : "#11172B" }}
          >
            {title ? (
              title
            ) : (
              <>
                What Makes <HighlightedSpan>Us Different?</HighlightedSpan>
              </>
            )}
          </Heading>
          <Title4 variant="h5" textcolor={"silver"} sx={{ fontWeight: 400 }}>
            {text ? (
              text
            ) : (
              <>
                Affordable, reliable, experienced - the pillars of our{" "}
                <strong>auto shipping services</strong>
              </>
            )}
          </Title4>
          <CircleContainer>
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <ServiceItem
                  top={service.top}
                  left={service.left}
                  backgroundColor={service.backgroundColor}
                  isActive={activeServiceId === service.id}
                  onClick={() => setActiveServiceId(service.id)}
                >
                  {service.icon}
                  <Typography variant="body1">{service.title}</Typography>
                </ServiceItem>

                <Typography
                  variant="body1"
                  sx={{
                    display: { xs: "block", sm: "block", md: "none" },
                    color: background ? "#fff" : "#0D1B2A",
                  }}
                >
                  {serviceTxt[index].desc}
                </Typography>
              </Box>
            ))}
            <Box
              position="absolute"
              top="40%"
              left="20%"
              transform="translate(-50%, -50%)"
              width="60%"
              textAlign="center"
              zIndex="0"
              display={"grid"}
              placeItems="center"
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              <Typography
                variant="body1"
                style={{ color: background ? "#fff" : "#0D1B2A" }}
              >
                {getServiceDesc(activeServiceId)
                  ? getServiceDesc(activeServiceId)
                  : serviceTxt[0].desc}
              </Typography>
            </Box>
          </CircleContainer>
        </Container>
      </Section>
    </>
  );
}

export default App;
