import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Section } from "../../pages/how-it-works/styles";

function Dynamic() {
  return (
    <>
      <Section component={"section"} id="how-much">
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
                  maxWidth: { xs: "520px", sm: "900px", md: "520px" },
                  height: { md: "auto", lg: "500px" },
                  boxShadow:
                    "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
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
                    Dynamic
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
                    At US CAR-GO FREIGHT, we're proud to be licensed and
                    regulated by the US Department of Transportation. This means
                    we meet all the requirements of the Federal Motor Carrier
                    Safety Administration (FMCSA) - the government organization
                    that oversees the transportation industry. <br />
                    One of these requirements is that property brokers, like us,
                    must maintain a surety bond or trust fund agreement of
                    $75,000. This ensures we meet the FMCSA's financial security
                    requirements and can provide you with peace of mind when you
                    trust us to ship your vehicle.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            <Card
              component="li"
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: { xs: "10px", sm: "10px", md: "30px" },
                width: "100%",
                backgroundColor: "transparent",
                boxShadow: "0",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  maxWidth: { xs: "725px", sm: "755px", md: "520px" },
                  height: { xs: "396px", sm: "755px", md: "500px" },
                  flexGrow: 1,
                  boxShadow:
                    "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  overflow: "hidden",
                  backgroundImage: `url(/assets/about/dynamic.webp)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Card>
          </Box>
          <Box
            component={"div"}
            sx={{ padding: { xs: "0 20px", sm: "0 20px", md: "0 25px" } }}
          >
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                marginTop: "30px",
                color: "#7A7A7A",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              US Car-Go is in compliance with all requirements of the{" "}
              <Box component={"a"} href="#" sx={{ color: "#7A7A7A" }}>
                Federal Motor Carrier Safety Administration (FMCSA)
              </Box>
              . This is the government organization that regulates the
              transportation industry. Property brokers must maintain a
              <Box component={"a"} href="#" sx={{ color: "#7A7A7A" }}>
                {" "}
                surety bond or trust fund agreement in the amount of $75,000
              </Box>{" "}
              to comply with the FMCSA’s financial security requirements.
            </Typography>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Dynamic;
