import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Section } from "../../pages/how-it-works/styles";
import CardImg from "../how-does-car-shipping/cards/CardImg";

function Teamwork() {
  return (
    <>
      <Section component={"section"} id="team-work">
        <Container maxWidth="xl">
          <Box
            component={"ul"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
              },
            }}
          >
            <CardImg
              img={"/assets/about/team_work.webp"}
              reverse={"true"}
              mini={"true"}
            />
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
                  height: { md: "auto", lg: "389px" },
                  boxShadow:
                    "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
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
                    Teamwork at its Finest
                    <span style={{ fontWeight: 700, color: "#E01933" }}>.</span>
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
                    Our competitive prices and outstanding track record of happy
                    customers mean you won't need to search any further. We're
                    committed to providing top-notch service and ensuring your
                    freight is delivered safely and on time. Let us help you
                    keep your business moving forward with US CAR-GO FREIGHT!
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Teamwork;
