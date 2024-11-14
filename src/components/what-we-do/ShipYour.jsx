import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Section } from "../../pages/how-it-works/styles";

function ShipYour({ text }) {
  return (
    <>
      <Section component={"section"} id="ship-your">
        <Container
          maxWidth="xl"
          sx={{
            overflow: "visible",
            padding: { xs: "0px", sm: "0px", md: "0 24px" },
          }}
        >
          <Box
            component={"ul"}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
              },
            }}
          >
            {" "}
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
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: {
                    xs: "520px",
                    sm: "900px",
                    md: text ? "600px" : "500px",
                  },
                  boxShadow:
                    "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  padding: 0,
                  overflow: "hidden",
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
                    {text
                      ? "Nationwide Carriers for Maximum Flexibility"
                      : "Ship Your"}

                    <Box
                      component={"span"}
                      sx={{ fontWeight: 700, color: "#E01933" }}
                    >
                      {text ? "." : "SUV"}
                    </Box>
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
                    {text ? (
                      <>
                        For maximum flexibility, Us Car-Go Freight, nationwide
                        carriers offer daily shipping options, eliminating the
                        frustration of long wait times. Regarding vehicle
                        shipping, we highly recommend open carrier auto
                        transport as an affordable and reliable choice for
                        standard-sized vehicles. Trusted by car dealerships,
                        this method ensures your vehicle's safety, speed, and
                        efficient transportation on an{" "}
                        <strong>open trailer</strong>, alongside other cars,
                        without compromising on quality.
                      </>
                    ) : (
                      `  At US Car-Go, we offer a variety of vehicle shipping
                    options, so you can get your car, motorcycle, or vintage
                    collector car where it needs to go hassle-free. Whether you
                    need to transport one vehicle or multiple cars to different
                    locations, we’ve got you covered.`
                    )}
                  </Typography>
                  {!text && (
                    <>
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
                        We offer open trailer shipping , which is the most
                        affordable option, and enclosed trailer shipping for
                        those who want extra protection from the elements during
                        transportation.
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
                        Our team of highly skilled and qualified auto transport
                        professionals will take the utmost care of your vehicle,
                        so you can relax and enjoy peace of mind.
                      </Typography>
                    </>
                  )}
                </CardContent>
              </Box>
            </Card>
            <Card
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
                  height: text ? "426px" : "550px",
                  flexGrow: 1,
                  boxShadow:
                    "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  overflow: "hidden",
                  backgroundImage: `url(${
                    text
                      ? "/assets/open-transport/ship_your.webp"
                      : "/assets/what-we-do/ship-your.webp"
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Card>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default ShipYour;
