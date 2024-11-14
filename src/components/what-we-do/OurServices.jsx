import { Box, Container, Grid, Typography } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  Heading,
  Section,
  Title4,
} from "../../pages/how-it-works/styles";
import { useNavigate } from "react-router-dom";

const CarGoCardData = [
  {
    icon: "/assets/what-we-do/svg/big-car.svg",
    title: `Expedited Car Shipping`,
    text: "The Fastest Way to Transport Your Vehicle",
    path: "/",
  },
  {
    icon: "/assets/what-we-do/svg/car.svg",
    title: `Classic Car Transports`,
    text: "A Premium Service with Expert Handling",
    path: "/",
  },
  {
    icon: "/assets/what-we-do/svg/motorcycle.svg",
    title: `Motorcycle Shipping`,
    text: "Safe and Secure Motorcycle Shipping with US CAR-GO",
    path: "/",
  },
  {
    icon: "/assets/what-we-do/svg/bus.svg",
    title: `RTV/ATV Shipping`,
    text: "Experienced Shipping with No Compromise",
    path: "/",
  },
  {
    icon: "/assets/what-we-do/svg/tractor.svg",
    title: `Heavy Equipment Shipping`,
    text: "Big or Small, We Ship it All",
    path: "/",
  },
  {
    icon: "/assets/what-we-do/svg/yacht.svg",
    title: `​Boat or Yacht Transport`,
    text: "Coast to Coast, Hassle-Free Boat Shipping",
    path: "/",
  },
];

function OurServices() {
  const navigate = useNavigate();

  return (
    <>
      <Section component={"section"} id="our-services">
        <BannerImage
          image={"/assets/what-we-do/our_services_background.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          <Box component={"div"}>
            <Heading variant="h2" sx={{ textAlign: "center", padding: "15px" }}>
              Our{" "}
              <Box component={"span"} sx={{ color: "#E01933" }}>
                Services
              </Box>
            </Heading>

            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {CarGoCardData.map(({ path, icon, text, title, idx }) => (
                <Grid
                  item
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", sm: "100%", md: "373px" },
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "20px",
                    transition: "all 0.2s",
                    boxShadow: "0",
                    "&:hover": {
                      scale: "1.07",
                    },
                  }}
                  onClick={() => navigate(path)}
                  key={idx}
                >
                  <Box
                    component={"div"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "150px",
                      height: "150px",
                      marginBottom: "30px",
                      border: "4px solid #818181",
                      backgroundColor: "#11172B",
                      borderRadius: "50%",
                    }}
                  >
                    <Box
                      width={"50px"}
                      component={"img"}
                      src={icon}
                      sx={{
                        transform: "scale(1.2)",
                      }}
                      alt={"#"}
                    />
                  </Box>
                  <Box sx={{ padding: 0 }}>
                    <Title4 variant="h2" sx={{ textAlign: "center" }}>
                      {title}
                    </Title4>
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#F9F9F9",
                        fontSize: "16px",
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default OurServices;
