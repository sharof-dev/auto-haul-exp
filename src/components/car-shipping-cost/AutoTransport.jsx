import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Section } from "../../pages/how-it-works/styles";
import CardImg from "../how-does-car-shipping/cards/CardImg";

function AutoTransport() {
  return (
    <>
      <Section component={"section"} id="auto-transport">
        <Container maxWidth="xl"  sx={{ overflow: "hidden" }}>
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
                    Auto Transport <br />
                    <span style={{ fontWeight: 700, color: "#E01933" }}>
                      Insurance.
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
                    Insurance is a very important thing to think about when
                    sending a car, whether it's an old model, a luxury car, or a
                    regular car. US Car-G0 offers different kinds of auto
                    transport insurance to protect your car while it's being
                    moved. These protect your car if it gets damaged or is
                    stolen.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            <CardImg img={"/assets/how-it-works/how_much.webp"} mini={"true"} />
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default AutoTransport;
