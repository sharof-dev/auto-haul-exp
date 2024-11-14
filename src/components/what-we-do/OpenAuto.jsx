import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { Section } from "../../pages/how-it-works/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function OpenAuto({ text }) {
  const navigate = useNavigate();

  return (
    <>
      <Section component={"section"} id="open-auto">
        <Container maxWidth="xl">
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
            {" "}
            <Card
              component="li"
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: { xs: "0 10px 10px 10px", sm: "10px", md: "15px" },
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
                    md: text ? "500px" : "578px",
                  },
                  boxShadow:
                    "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  padding: 0,
                  overflow: "hidden",
                  backgroundColor: "#11172B",
                }}
              >
                <CardContent
                  sx={{
                    padding: text ? "30px" : "15px 25px 0px 25px",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: "10px",
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
                      ? "Speedy and Convenient Service"
                      : "Open Auto Transport"}

                    <Box
                      component={"span"}
                      sx={{ fontWeight: 700, color: "#E01933" }}
                    >
                      .
                    </Box>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "18.5px",
                      fontWeight: 500,
                      lineHeight: "1.4em",
                      color: "white",
                    }}
                  >
                    {text
                      ? "When time is of the essence, open car transport is the fastest way to ship your vehicle. Over 90% of truckers utilize open road auto transport trailers, ensuring a wide range of options for convenient pick-up and delivery."
                      : `  Open Auto Transport are a popular and cost-effective choice
                    for many customers. These carriers utilize large trailers or
                    flatbeds to transport multiple vehicles simultaneously.
                    While your vehicle is exposed to the open environment during
                    transportation, open carriers provide reliable service at an
                    affordable price. They are commonly used for everyday
                    vehicles like sedans and SUVs, making them an excellent
                    option when extra protection is not required.`}
                  </Typography>
                  {!text && (
                    <IconButton
                      sx={{ background: "#E01933", marginTop: "10px" }}
                      onClick={() => navigate("/open-auto-transport")}
                      disableRipple
                    >
                      <ArrowForwardIosIcon sx={{ color: "#fff" }} />
                    </IconButton>
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
                  maxWidth: "526px",
                  height: text ? "290px" : "368px",
                  flexGrow: 1,
                  boxShadow:
                    "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  overflow: "hidden",
                  backgroundImage: `url(${
                    text
                      ? "/assets/open-transport/open_auto_transport_card_img.jpg"
                      : "/assets/what-we-do/open_auto_background.webp"
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

export default OpenAuto;
