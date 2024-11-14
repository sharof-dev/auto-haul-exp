import { Box, Button, Container } from "@mui/material";
import { Section, Title2 } from "../../pages/how-it-works/styles";
import SliderCard from "./cards/SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CalculateIcon from "@mui/icons-material/Calculate";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const sliderData = [
  {
    img: "/assets/how-it-works/faq_slider0.webp",
    Icon: DirectionsCarIcon,
    title: "What is Car Transport?",
    text: `
    Car transport
     is a service that helps people move their cars from one place to another. It is a service that many car dealerships, car manufacturers, and people who need to move their cars over long distances use. Companies that move cars use special trucks, trailers, and carriers to get the job done quickly and safely.
    `,
  },
  {
    img: "/assets/how-it-works/faq_slider1.webp",
    Icon: LocalShippingIcon,
    title: "How do I get is car transport quote?",
    text: (
      <>
        Car transport companies give different car shipping quotes based on the
        distance, type of transport, and other factors. So, the best way to get
        a quote that fits your needs is to answer all the questions on the{" "}
        <Box
          component={"a"}
          href="#"
          sx={{
            textDecoration: "none",
            color: "#fff",
            "&:hover": {
              color: "#E01933",
            },
          }}
        >
          "Get a quote"
        </Box>{" "}
        page about your transport.
      </>
    ),
  },
  {
    img: "/assets/how-it-works/faq_slider2.png",
    Icon: LocalShippingIcon,
    title: "Overview of the auto transport industry",
    text: `
   The auto transport industry is an important part of the transportation industry. It offers a variety of services to move cars from one place to another. Over the past few years, the industry has grown a lot, and that growth is expected to continue because more and more people need services to move cars.
    `,
  },
  {
    img: "/assets/how-it-works/faq_slider3.webp",
    Icon: CalculateIcon,
    title: "Calculating my car shipping estimate and auto shipper math",
    text: (
      <>
        Getting an <strong>estimate of shipping costs</strong> with auto-shipper
        math is pretty easy. But you need to know how it works and figure out
        the distance between where you pick up and where you drop off, the type
        of transport, the size and weight of your vehicle, and any extra fees.
      </>
    ),
  },
];

function Faq() {
  const silderBreakPoint = {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    738: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
  };

  return (
    <>
      <Section
        component={"section"}
        id="faq"
        sx={{ backgroundColor: "#F5F5F5" }}
      >
        <Container maxWidth="xl">
          <Box component={"div"}>
            <Title2
              variant="h3"
              color="#11172B"
              sx={{ textAlign: "center", marginBottom: "50px" }}
            >
              FAQ
              <Box component={"span"} sx={{ color: "#E01933" }}>
                .
              </Box>
            </Title2>

            <Box component={"div"} sx={{ position: "relative" }}>
              <Box
                component={"div"}
                className="button-Atrrangment"
                sx={{
                  width: "100%",
                  position: "absolute",
                }}
              >
                <Box
                  component={"div"}
                  className="button-swipper"
                  sx={{
                    display: "flex",
                    height: "48px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button className="swipper-button-prev">
                    <ArrowBackIosNewIcon
                      sx={{
                        color: "#E01933",
                        position: "relative",
                        zIndex: 10,
                      }}
                    />
                  </Button>
                  <Box
                    component={"div"}
                    sx={{
                      maxWidth: "1150px",
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#E01933",
                    }}
                  />
                  <Button className="swipper-button-next">
                    <ArrowForwardIosIcon
                      sx={{
                        color: "#E01933",
                        position: "relative",
                        zIndex: 10,
                      }}
                    />
                  </Button>
                </Box>
              </Box>

              <Swiper
                style={{
                  maxWidth: "1052px",
                  width: "100%",
                  padding: "78px 10px 20px 10px",
                }}
                slidesPerView={1}
                spaceBetween={70}
                lazy={"true"}
                breakpoints={silderBreakPoint}
                navigation={{
                  nextEl: ".swipper-button-next",
                  prevEl: ".swipper-button-prev",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]} // Ensure the necessary modules are included
                className="mySwiper"
              >
                {sliderData.map((card, idx) => (
                  <SwiperSlide
                    style={{
                      maxWidth: "493px",
                      width: "100%",
                    }}
                    key={idx}
                  >
                    <SliderCard {...card} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Faq;
