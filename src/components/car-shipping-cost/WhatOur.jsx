import { Box, Container, IconButton, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BannerColor,
  BannerImage,
  Section,
} from "../../pages/how-it-works/styles";
import SliderOurCard from "./cards/SliderOurCard";
import { Autoplay, Navigation } from "swiper/modules";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const sliderData = [
  {
    description:
      "This car transport company is very good. I use them and they were on-time. Their prices are very reasonable and they get the job done if I could’ve given them more than five stars I would’ve I would’ve given them 10, so God bless Max. He is a really great guy and I am very happy and very satisfied with the service that I received. They delivered my car perfectly. Thank you so much, Molly.",
    userName: "Molly Adams",
    logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
  },
  {
    description:
      "Us Cargo helps me alot to in shipping, It was my right decision to choose this come become none of the other company was able to move my vehicle for week, only chris and US Cargo was there for my help, I'm really thankful to them.",
    userName: "Tiko lomtatidze",
    logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
  },
  {
    description:
      "I highly recommend US CARGO and special thanks to Brian Jones for helping me in my shipment process. I shipped my car on urgent basis helped me in getting the driver and explained every step properly. Thanks Brian and Us Cargo!",
    userName: "Don Young",
    logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
  },
  {
    description:
      "Lowest price! Fast! Reliable! I had to ship my car from Georgia to Texas and comparing prices they were the lowest out there, they were very attentive and fast!",
    userName: "Melanie Dominguez",
    logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
  },
];

function WhatOur({ data, sliderDataClients }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <Section component={"section"} id="what-our">
        {/* Banner Image */}
        <BannerImage
          image={"/assets/how-it-works/costs.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{
              marginBottom: "20px",
              fontWeight: 700,
              fontSize: { sm: "35px", md: "60px" },
              color: "#fff",
              textAlign: "center",
            }}
            data-aos="fade-up"
          >
            What Our {""}
            <Box component="span" sx={{ color: "#E01933" }}>
              Clients Say!
            </Box>
          </Typography>
          {data && (
            <Typography
              sx={{
                marginBottom: "20px",
                fontWeight: 400,
                fontSize: { sm: "35px", md: "18px" },
                color: "#fff",
                textAlign: "center",
              }}
            >
              US Car-Go freight is a trusted industry leader in US car and
              vehicle shipping, providing reliable and exceptional <br />
              transportation services to satisfied clients nationwide. With an
              outstanding customer satisfaction rating of <br /> 97%, we are the
              go-to choice for most affordable, efficient and safest vehicle
              transportation.
            </Typography>
          )}

          <Box
            component={"div"}
            sx={{
              position: "relative",
              padding: { xs: "0", sm: "0", md: "0 50px" },
            }}
            data-aos="fade-up"
          >
            <Swiper
              style={{ padding: "5px" }}
              centeredSlides={false}
              spaceBetween={data ? 30 : 10}
              navigation={{
                nextEl: ".swipper-button-next",
                prevEl: ".swipper-button-prev",
              }}
              speed={2500}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              modules={[Navigation, Autoplay]}
            >
              {data ? (
                <>
                  {data.map((card, idx) => (
                    <SwiperSlide key={idx}>
                      <SliderOurCard {...card} text={true} />
                    </SwiperSlide>
                  ))}
                </>
              ) : (
                <>
                  {sliderData.map((card, idx) => (
                    <SwiperSlide key={idx}>
                      <SliderOurCard {...card} text={data} />
                    </SwiperSlide>
                  ))}
                </>
              )}
            </Swiper>

            <Box
              component={"div"}
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
            >
              <IconButton
                className="swipper-button-prev"
                sx={{
                  borderRadius: "50%",
                  border: "3px solid #fff",
                  transition: "border 0.2s",
                  "&:hover": {
                    border: "3px solid #E01933",
                    svg: {
                      fill: "#E01933",
                    },
                  },
                }}
                disableRipple
              >
                <ArrowBackIosNewIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </IconButton>
              <IconButton
                className="swipper-button-next"
                sx={{
                  border: "3px solid #fff",
                  transition: "border 0.2s",
                  "&:hover": {
                    border: "3px solid #E01933",
                    svg: {
                      fill: "#E01933",
                    },
                  },
                }}
                disableRipple
              >
                <ArrowForwardIosIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default WhatOur;
