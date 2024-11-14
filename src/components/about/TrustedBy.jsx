import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container } from "@mui/material";
import { Heading, Section } from "../../pages/how-it-works/styles";
import { Navigation, Autoplay } from "swiper/modules";

const TrustedByCardData = [
  {
    logo: "https://uscargofreight.com/wp-content/uploads/2023/08/trustpilot-logo.png.webp",
  },
  {
    logo: "https://uscargofreight.com/wp-content/uploads/2022/07/secure90x72.png.webp",
  },
  {
    logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
  },
  {
    logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
  },
  {
    logo: "https://uscargofreight.com/wp-content/uploads/2023/08/trustpilot-logo.png.webp",
  },
  {
    logo: "https://uscargofreight.com/wp-content/uploads/2022/07/secure90x72.png.webp",
  },
  {
    logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
  },
  {
    logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
  },
];

function TrustedBy() {
  return (
    <>
      <Section component={"section"} id="trusted-by">
        <Container maxWidth="xl">
          <Box component={"div"}>
            <Heading color={"#11172B"} sx={{ textAlign: "center" }}>
              Trusted By
              <Box component={"span"} sx={{ color: "#E01933" }}>
                .
              </Box>
            </Heading>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  navigation: false,
                },
                738: {
                  slidesPerView: 3,
                },
                1028: {
                  slidesPerView: 4,
                },
              }}
              spaceBetween={10}
              slidesPerView={2}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {TrustedByCardData.map((card, idx) => (
                <SwiperSlide key={idx}>
                  <Box
                    component={"div"}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "35px",
                      width: "100%",
                      maxWidth: "210px",
                      minHeight: "170px",
                      // border: "1px solid #d00",
                    }}
                  >
                    <Box
                      component={"img"}
                      src={card.logo}
                      sx={{
                        objectFit: "cover",
                        objectPosition: "center",
                        width: "100%",
                        height: "auto",
                        userSelect: "none",
                      }}
                      alt="logo"
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default TrustedBy;
