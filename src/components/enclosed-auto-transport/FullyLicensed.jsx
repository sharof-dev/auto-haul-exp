import {
  BannerColor,
  BannerImage,
  BodyText1,
  Section,
  Title,
} from "../../pages/how-it-works/styles";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

function FullyLicensed({
  title,
  text,
  background,
  backgroundColor,
  cardImage,
  cardTitle,
  Width,
  cardText,
  imageWidth,
  imageHeight,
  reverse,
}) {
  return (
    <Section component={"section"} id="fully-licensed">
      {background && (
        <>
          <BannerImage image={background} parallax={"true"} component={"div"} />
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
        {title && (
          <Title
            color={background ? "#fff" : "#11172B"}
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            {title}
          </Title>
        )}
        {text && (
          <BodyText1 sx={{ color: "#7A7A7A", textAlign: "center" }}>
            {text}
          </BodyText1>
        )}

        <Box
          component={"ul"}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: reverse ? "row" : "row-reverse",
            },
          }}
        >
          {" "}
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
                maxWidth: {
                  xs: "520px",
                  sm: "900px",
                  md: Width ? Width : "500px",
                },
                boxShadow: reverse
                  ? "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)"
                  : "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                borderRadius: "35px",
                padding: 0,
                overflow: "hidden",
                backgroundColor: background ? "#fff " : "#11172B",
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
                    color: background ? "#11172B" : "white",
                  }}
                >
                  {cardTitle}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "1.4em",
                    color: background ? "#7A7A7A" : "white",
                  }}
                >
                  {cardText}
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
                maxWidth: imageWidth ? imageWidth : "550px",
                height: imageHeight,
                flexGrow: 1,
                boxShadow: reverse
                  ? "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)"
                  : "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                borderRadius: "35px",
                overflow: "hidden",
                backgroundImage: `url(${cardImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Card>
        </Box>
      </Container>
    </Section>
  );
}

export default FullyLicensed;
