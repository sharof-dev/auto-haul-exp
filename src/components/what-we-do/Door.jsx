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

function Door() {
  const navigate = useNavigate();

  return (
    <>
      <Section component={"section"} id="door">
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
                  maxWidth: "447px",
                  height: "447px",
                  flexGrow: 1,
                  boxShadow:
                    "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  overflow: "hidden",
                  backgroundImage: `url(/assets/what-we-do/door.webp)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Card>
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
                  maxWidth: { xs: "520px", sm: "900px", md: "518px" },
                  boxShadow:
                    "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  padding: 0,
                  overflow: "hidden",
                  backgroundColor: "#11172B",
                }}
              >
                <CardContent
                  sx={{
                    padding: {
                      xs: "25px",
                      md: "25px",
                      sm: "60px 30px",
                      lg: "60px 30px",
                    },
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
                    onClick={() => navigate("/door-to-door")}
                  >
                    Door to Door Auto Transport
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
                    Auto transport service to your doorstep provides a
                    stress-free option to pick up and deliver your prized
                    vehicle from one location to another. No more worrying about
                    meeting the carrier at a different location. Leave
                    everything to the auto transport company to handle. This
                    convenient service not only saves you time &amp; effort but
                    also guarantees the safe and secure transportation of your
                    valued possession.
                  </Typography>

                  <IconButton
                    sx={{ background: "#E01933", marginTop: "10px" }}
                    onClick={() => navigate("/door-to-door")}
                    disableRipple
                  >
                    <ArrowForwardIosIcon sx={{ color: "#fff" }} />
                  </IconButton>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Door;
