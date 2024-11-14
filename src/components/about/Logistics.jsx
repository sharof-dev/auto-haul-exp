import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Logistics() {
  useEffect(() =>{
    AOS.init({
      duration: 1000,
    });
  })
  return (
    <>
      <Box
        component={"section"}
        id="logistics"
        sx={{
          padding: { xs: "0 0 50px 0", sm: "0 0 50px 0", md: "0 0 100px 0" },
          position: "relative",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            overflow: "hidden",
            padding: { xs: "0px", sm: "0px", md: "0 24px" },
          }}
        >
          <Box
            component={"ul"}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
              },
            }}
          >
            <Card
              component="li"
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: { xs: "0 10px 10px 10px", sm: "10px", md: "25px" },
                width: "100%",
                boxShadow: "0",
                backgroundColor: "#ffffff00",
              }}
              data-aos="fade-right"
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "520px", sm: "900px", md: "500px" },
                  boxShadow:
                    "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  padding: 0,
                  backgroundColor: "#11172B",
                }}
              >
                <CardContent sx={{ padding: "30px", width: "100%" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: "30px",
                      fontSize: {
                        xs: "35px",
                        sm: "35px",
                        md: "45px",
                      },
                      fontWeight: 600,
                      lineHeight: "1em",
                      color: "white",
                    }}
                  >
                    Logistics that <br />
                    <span style={{ fontWeight: 700, color: "#E01933" }}>
                      Deliver Reliably.
                    </span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "1.4em",
                      color: "white",
                    }}
                  >
                    At{" "}
                    <em>
                      <strong>US Car-Go Freight</strong>
                    </em>
                    , we make your life easier by providing reliable and
                    affordable vehicle transport services. Whether you're moving
                    across the country or need to transport your car, our
                    experienced team has you covered. We handle all the hard
                    work, ensuring your vehicle reaches its destination without
                    worries. With a full range of options to meet your unique
                    needs, you can trust us to deliver with care and integrity,
                    whether moving, purchasing a new car, or shipping a show
                    car.
                  </Typography>
                  <br />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "1.4em",
                      color: "white",
                    }}
                  >
                    We utilize state-of-the-art logistics solutions to offer
                    accurate pricing for your transport. Our highly trained team
                    competes for available spaces on vehicle transport carriers'
                    trucks, using data-driven technology to evaluate the
                    historical pricing of your vehicle's transport route. It
                    enables us to determine affordable and precise pricing for
                    your transit. With a continuous focus on building our
                    network and leveraging new technologies, we strive to
                    provide reliable and affordable delivery options for our
                    valued customers. Sit back & relax, and let US CAR-GO
                    FREIGHT take care of all your{" "}
                    <strong>vehicle transport</strong> needs!
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            <Card
              data-aos="fade-left"
              component="li"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: { xs: "10px", sm: "10px", md: "30px" },
                backgroundColor: "transparent",
                boxShadow: "0",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  maxWidth: "550px",
                  height: "893px",
                  flexGrow: 1,
                  boxShadow:
                    "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  overflow: "hidden",
                  backgroundImage: `url(/assets/about/logistics.webp)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Logistics;
