import { Box, Button, Card, Container, Typography } from "@mui/material";
import {
  FormContainer,
  FormTitle,
  FormInput,
  BannerImage,
  BannerColor,
  Heading,
  BodyText,
} from "../../pages/how-it-works/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AboutForm() {
  const navigate = useNavigate()
  const [originZip, setOriginZip] = useState("");
  const [destinationZip, setDestinationZip] = useState("");
  const handleSubmit = (e) => {
    if(originZip === '' || destinationZip === ''){
      alert("Please fill in both fields");
      return;
    }else{
      const setData ={
        originZip: originZip,
        destinationZip: destinationZip,
        date: 2
      }
      localStorage.setItem('data', JSON.stringify(setData))

      navigate(`/get-quote/${setData.date}`);
    }
  };
  return (
    <>
      <Box
        id="about-form"
        component={"section"}
        sx={{
          padding: { xs: "80px 0 180px 0", sm: "150px 0 180px 0" },
          position: "relative",
        }}
      >
        {/* Banner Image */}
        <BannerImage
          image={"/assets/about/about_background.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                padding: { xs: "0px", sm: "10px", md: "30px" },
                maxWidth: { sm: "900px", md: "587px" },
                width: "100%",
              }}
            >
              <Heading
                variant="h1"
                sx={{ textAlign: { xs: "center", sm: "left" } }}
              >
                About
                <Box
                  component="span"
                  sx={{
                    fontSize: { xs: "30px", sm: "35px", lg: "45px" },
                    color: "#E01933",
                  }}
                >
                  .
                </Box>
              </Heading>

              <BodyText
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <strong>US CAR-GO FREIGHT</strong>: We are your personal
                concierge of vehicle logistics with one mission:
                <br />
              </BodyText>
              <BodyText
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <em>
                  “Vehicle shipping made easy, fast and reliable at affordable
                  prices”
                </em>
                .
              </BodyText>
            </Box>
            <Box
              sx={{
                maxWidth: { sm: "900px", md: "513px" },
                width: "100%",
                padding: { xs: "10px 0 0 0", sm: "10px" },
              }}
            >
              <FormContainer>
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
                    onChange={e => setOriginZip(e.target.value)}
                  />
                  <FormInput
                    type="text"
                    name="destination-zip"
                    placeholder="Destination Zip or City"
                    onChange={e => setDestinationZip(e.target.value)}
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
                  onClick={handleSubmit}
                >
                  Continue
                </Button>
              </FormContainer>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AboutForm;
