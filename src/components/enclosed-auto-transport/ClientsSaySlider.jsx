import { Box, Container, IconButton, Typography } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  BodyText1,
  Heading,
  Section,
} from "../../pages/how-it-works/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SliderOurCard from "../car-shipping-cost/cards/SliderOurCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function ClientsSaySlider({
  background,
  backgroundColor,
  title,
  subTitle,
  slidesPerView,
  sliderData,
}) {
  return (
    <Section component={"section"} id="fully-licensed">
      {background && (
        <>
          <BannerImage image={background} parallax={"true"} component={"div"} />
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
        <Container maxWidth="xl">
          <Heading
            variant="h4"
            sx={{
              marginBottom: "30px",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {title}
          </Heading>

          {subTitle && (
            <BodyText1
              variant="h4"
              sx={{
                marginBottom: "20px",
                fontWeight: 500,
                color: "#F9F9F9",
                textAlign: "center",
              }}
            >
              {subTitle}
            </BodyText1>
          )}

          <Box
            component={"div"}
            sx={{
              position: "relative",
              padding: { xs: "0", sm: "0", md: "0 45px" },
            }}
          >
            <Swiper
              style={{ padding: "5px" }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                738: {
                  slidesPerView: 2,
                },
                1028: {
                  slidesPerView: slidesPerView,
                },
              }}
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                nextEl: ".swipper-button-next",
                prevEl: ".swipper-button-prev",
              }}
              speed={2500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
            >
              {sliderData?.map((card, idx) => (
                <SwiperSlide key={idx} style={{ width: "50%" }}>
                  <SliderOurCard {...card} />
                </SwiperSlide>
              ))}
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
      </Container>
    </Section>
  );
}

export default ClientsSaySlider;
