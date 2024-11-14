import {
  BodyText1,
  ButtonStyled,
  FormContainer,
  FormInput,
  FormTitle,
  Section,
} from "../../pages/how-it-works/styles";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Box, Button, Container, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

function CostToShip() {
  return (
    <>
      <Section id="cost-to-ship" component={"section"}>
        <Container maxWidth="xl" sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
              },
            }}
          >
            <Box
              sx={{
                padding: { xs: "0px", sm: "10px", md: "30px" },
                maxWidth: { sm: "900px", md: "587px" },
                width: "100%",
              }}
              data-aos="fade-up"
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  fontSize: { xs: "30px", sm: "35px", md: "45px" },
                  fontWeight: 600,
                }}
                gutterBottom
              >
                Want to know the cost to ship car across country with us?
              </Typography>
              <BodyText1
                color={"#7A7A7A"}
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                }}
                gutterBottom
              >
                Put the power of an auto relocation leader to work for you.
              </BodyText1>

              <ButtonStyled
                startIcon={<PhoneAndroidIcon />}
                component={"a"}
                href={"tel:+18882498840"}
                variant="contained"
                disableRipple
                disableElevation
                sx={{
                  transition: "0.1s linear",
                  margin: { xs: "0 auto", sm: "0 auto", md: "0" },
                  "&:hover": {
                    backgroundColor: "#E01933",
                    opacity: 0.8,
                  },
                }}
                data-aos="fade-right"
              >
                Call At (888) 249-8840
              </ButtonStyled>
            </Box>
            <Box
              sx={{
                maxWidth: { sm: "900px", md: "513px" },
                width: "100%",
                padding: { xs: "10px 0 0 0", sm: "10px" },
              }}
            >
              <FormContainer sx={{ marginBottom: "20px" }} data-aos="fade-left">
                <Box>
                  <FormTitle variant="h2">Fill Up the Get Quote Form</FormTitle>
                  <FormTitle variant="h4">
                    And Get a Guaranteed Best Competitive Price
                    <span style={{ color: "#E01933" }}>.</span>
                  </FormTitle>
                </Box>
                <Box>
                  <FormInput
                    type="text"
                    name="origin-zip"
                    placeholder="Origin Zip or City"
                    variant="plain"
                  />
                  <FormInput
                    type="text"
                    name="destination-zip"
                    placeholder="Destination Zip or City"
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    margin: "0 auto",
                    maxWidth: "146px",
                    width: "100%",
                    padding: "15px 40px",
                    fontSize: "16px",
                    borderRadius: "50px",
                    backgroundColor: "#E01933",
                    transition: "0.1s linear",
                    "&:hover": {
                      backgroundColor: "#E01933",
                      opacity: 0.8,
                    },
                  }}
                  disableRipple
                >
                  Continue
                </Button>
              </FormContainer>
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default CostToShip;
