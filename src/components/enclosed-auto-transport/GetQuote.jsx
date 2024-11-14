import { Box, Button, Container } from "@mui/material";
import {
  FormContainer,
  FormTitle,
  FormInput,
  BannerImage,
  BannerColor,
  BodyText,
  Section,
  ButtonStyled,
  Title1,
} from "../../pages/how-it-works/styles";

function GetQuote({
  background,
  color,
  backgroundColor,
  title,
  text,
  buttonText,
  buttonIcon,
  buttonLink,
}) {
  return (
    <>
      <Section
        component={"section"}
        id="get-quote"
        sx={{ backgroundColor: color }}
      >
        {background && (
          <>
            <BannerImage
              image={background}
              parallax={"true"}
              component={"div"}
            />
            {/* Banner Color */}
            <BannerColor
              color={
                backgroundColor
                  ? backgroundColor
                  : "linear-gradient(180deg, #11172b 40%, #11172B 100%)"
              }
            />
          </>
        )}

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
              <Title1
                variant="h1"
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "left",
                    fontWeight: "500",
                    color: background ? "#fff" : "#11172B",
                  },
                }}
              >
                {title}
              </Title1>

              <BodyText
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "left",
                    fontWeight: "500",
                    color: background ? "#fff" : "#7A7A7A",
                  },
                }}
              >
                {text}
              </BodyText>
              {buttonText && (
                <ButtonStyled
                  component="a"
                  href={buttonLink}
                  sx={{
                    color: "#fff",
                    transition: "0.1s linear",
                    margin: { xs: "10px auto", sm: "10px auto", md: "0" },
                    "&:hover": {
                      backgroundColor: "#E01933",
                      opacity: 0.8,
                    },
                  }}
                  startIcon={buttonIcon} // Corrected here
                >
                  {buttonText}
                </ButtonStyled>
              )}
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

export default GetQuote;
