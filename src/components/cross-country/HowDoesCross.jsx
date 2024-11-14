import { Section } from "../../pages/how-it-works/styles";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

function HowDoesCross() {
  return (
    <>
      <Section component={"section"} id="how-does-cross">
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
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "520px", sm: "900px", md: "500px" },
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
                    How Does Cross Country Car Shipping <br />
                    <span style={{ fontWeight: 700, color: "#E01933" }}>
                      Work?
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
                    The first step in transporting an automobile across the
                    nation is for the consumer to seek an estimate from a
                    shipping firm. The{" "}
                    <Box
                      component={"a"}
                      href={"#"}
                      sx={{ textDecoration: "none", color: "#fff" }}
                    >
                      <strong>quote to ship a car</strong>
                    </Box>{" "}
                    is based on a number of variables, such as the shipping
                    distance, the kind of vehicle being shipped, and the mode of
                    transportation chosen. If the consumer approves the
                    estimate, the shipping firm will schedule a pickup.
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
                    The car will subsequently be put onto a trailer or truck and
                    driven to its final location. To protect the car during
                    transit, belts or other restraints are used to secure it.
                    After the car has arrived at the location, it will be
                    unloaded and delivered to the client.
                  </Typography>
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
                  height: "679px",
                  flexGrow: 1,
                  boxShadow:
                    "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  overflow: "hidden",
                  backgroundImage: `url(/assets/how-it-works/how_does_cross.webp)`,
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

export default HowDoesCross;
