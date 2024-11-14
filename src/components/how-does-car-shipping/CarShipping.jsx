import { Box, Button, Container } from "@mui/material";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BannerColor,
  BannerImage,
  BodyText1,
  FormContainer,
  FormInput,
  FormTitle,
  Title,
} from "../../pages/how-it-works/styles";
import { useNavigate } from "react-router-dom";
function CarShipping() {
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
        date: 3
      }
      localStorage.setItem('data', JSON.stringify(setData))

      navigate(`/get-quote/${setData.date}`);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <Box
        id="card-shipping"
        component={"section"}
        sx={{ padding: { xs: "80px 0", sm: "150px 0" }, position: "relative" }}
      >
        {/* Banner Image */}
        <BannerImage
          image={"/assets/how-it-works/car_shipping.jpg"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl" sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "center", md: "flex-start" },
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                padding: { xs: "0px", sm: "10px", md: "30px" },
                maxWidth: { sm: "900px", md: "697px" },
                width: "100%",
              }}
            >
              <Title
                variant="h1"
                sx={{ textAlign: { xs: "center", sm: "left" } }}
                data-aos="fade-up"
              >
                How does Car <br /> Shipping Work
                <Box
                  component="span"
                  sx={{
                    fontSize: { xs: "30px", sm: "35px", lg: "45px" },
                    color: "#E01933",
                  }}
                >
                  ?
                </Box>
              </Title>

              <BodyText1
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                At US Car-Go Freight, we believe that shipping your automobile,
                Vehicle or Car should be hassle-free, budget-friendly, and super
                reliable. That’s why we have a team of{" "}
                <Box
                  component={"a"}
                  href="#"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    transition: "0.1s linear",
                    "&:hover": {
                      color: "#E01933",
                    },
                  }}
                >
                  auto shipping
                </Box>{" "}
                experts who are dedicated to making sure that your experience is
                as smooth as possible.
              </BodyText1>
            </Box>
            <Box
              sx={{
                maxWidth: { sm: "900px", md: "513px" },
                width: "100%",
                padding: { xs: "10px 0 0 0", sm: "10px" },
              }}
            >
              <FormContainer data-aos="fade-left">
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

export default CarShipping;
