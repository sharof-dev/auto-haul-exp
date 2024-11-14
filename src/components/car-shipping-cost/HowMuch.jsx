import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Section } from "../../pages/how-it-works/styles";
import CardImg from "../how-does-car-shipping/cards/CardImg";
import AOS from "aos";
import "aos/dist/aos.css";

function HowMuch({ text }) {
  return (
    <>
      <Section component={"section"} id="how-much">
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
                md: text ? "row-reverse" : "row",
              },
            }}
          >
            <CardImg
              mini={text ? true : false}
              img={
                text
                  ? "/assets/open-transport/open_transport_card.jpg"
                  : "/assets/how-it-works/how_much.webp"
              }
              reverse={text ? false : true}
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
                  maxWidth: { xs: "520px", sm: "900px", md: "520px" },
                  height: { md: "auto", lg: text ? "378px" : "476px" },
                  boxShadow: text
                    ? "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)"
                    : "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
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
                    {text
                      ? "Benefits of planning ahead for your car shipping needs"
                      : " How Much Does"}
                    {!text && <br />}
                    <span style={{ fontWeight: 700, color: "#E01933" }}>
                      {text ? "." : "Car Shipping Cost?"}
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
                    {text ? (
                      `
                      Secure a stress-free car shipping experience by scheduling your vehicle transport at least 2-4 weeks in advance. Planning ahead allows for better coordination, ample carrier availability, and avoids higher prices and potential delays associated with last-minute bookings.
                    `
                    ) : (
                      <>
                        US Car-G0 Freight prices depend on many things, and we
                        try to give our customers the best service we can at a
                        price they can afford. We suggest that you call us
                        directly to get an accurate estimate of{" "}
                        <strong>car transport cost</strong>. We'll be happy to
                        give you a quote that's tailored to your wants and
                        preferences. Our expert team can help you figure out the
                        most affordable way to ship your vehicle.
                      </>
                    )}
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

export default HowMuch;
