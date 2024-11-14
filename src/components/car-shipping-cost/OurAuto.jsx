import { Box, Container, IconButton, Typography } from "@mui/material";
import { Section, Title2 } from "../../pages/how-it-works/styles";
import OurAutoCard from "./cards/OurAutoCard";
import { useNavigate } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ourAutoData = [
  {
    icon: "/assets/how-it-works/svg/sport-car.svg",
    title: "Enclosed Auto Transport",
    text: "For your Prized Asset - Shipping with Expertise and Care",
    path: "/",
  },
  {
    icon: "/assets/how-it-works/svg/big-car.svg",
    title: "Open Auto Transport",
    text: "Affordable and Convenient",
    path: "/",
  },
  {
    icon: "/assets/how-it-works/svg/big-car2.svg",
    title: "Door to Door Auto Transport",
    text: "Peace of Mind & Hassle-Free Car Shipping",
    path: "/",
  },
  {
    icon: "",
    title: "Expedited Car Shipping",
    text: "The Fastest Way to Transport Your Vehicle",
    path: "/",
  },
];

const ourAutoSliderData = [
  { text: "Shipping Non-Running Vehicles", path: "/" },
  { text: "Military Car Transport", path: "/" },
  { text: "Snowbirds Car Shipping", path: "/" },
  { text: "Online Car Purchase Shipping Service", path: "/" },
];

function OurAuto() {
  const navigat = useNavigate();

  return (
    <>
      <Section component={"section"} id="our-auto">
        <Container maxWidth="xl">
          <Box component={"div"}>
            <Title2
              variant="h4"
              color="#11172B"
              sx={{
                textAlign: "center",
              }}
            >
              Our Auto Transport{" "}
              <Box component="span" sx={{ color: "#E01933" }}>
                Services.
              </Box>
            </Title2>

            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", m: "column", md: "row" },
                marginTop: "30px",
                marginBottom: "20px",
              }}
            >
              {ourAutoData.map((card, idx) => (
                <OurAutoCard {...card} index={idx} key={idx} />
              ))}
            </Box>

            <Box
              component={"div"}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: {
                  xs: "flex-start",
                  sm: "flex-start",
                  md: "center",
                },
                gap: "20px",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "100%",
                  padding: "15px",
                  borderRadius: "35px",
                  backgroundColor: "#11172B",
                  color: "#fff",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: "1.5",
                    textAlign: "center",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  Other Services
                </Typography>
              </Box>

              {/* text slider */}
              <Swiper
                style={{ width: "100%" }}
                spaceBetween={10}
                centeredSlides={true}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swipper-button-next",
                  prevEl: ".swipper-button-prev",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
              >
                {ourAutoSliderData.map(({ text, path }, idx) => (
                  <SwiperSlide key={idx}>
                    <Typography
                      variant="h4"
                      sx={{
                        textAlign: "center",
                        padding: "8px 12px",
                        lineHeight: "1.8",
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#11172B",
                      }}
                      onClick={() => navigat(path)}
                    >
                      {text}
                    </Typography>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Box
                component={"div"}
                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
              >
                <IconButton className="swipper-button-prev">
                  <ArrowBackIosNewIcon
                    sx={{
                      color: "#11172B",
                    }}
                  />
                </IconButton>
                <IconButton className="swipper-button-next">
                  <ArrowForwardIosIcon
                    sx={{
                      color: "#11172B",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default OurAuto;
