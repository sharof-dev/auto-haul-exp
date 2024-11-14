import { Box, Card, CardContent, Typography } from "@mui/material";
import { Title4 } from "../../../pages/how-it-works/styles";

const CardIcon = ({ Icon }) => {
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        top: "-75px",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: "-1",
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          padding: "4px",
          marginBottom: "14px",
          border: "4px solid #E01933",
          backgroundColor: "#fff",
          borderRadius: "50%",
        }}
      >
        <Icon fontSize="large" sx={{ color: "#E01933" }} />
      </Box>
      <Box
        component={"div"}
        sx={{
          width: "20px",
          height: "20px",
          backgroundColor: "#11172B",
          rotate: "135deg",
        }}
      />
    </Box>
  );
};

function SliderCard({ Icon, img, title, text, timeline, matches, background }) {
  return (
    <Card
      sx={{
        // marginTop: `${Icon ? "75px" : "0px"}`,
        marginTop: matches ? "30px" : "0px",
        maxWidth: `${matches ? "100%" : "493px"}`,
        width: "100%",
        minHeight: matches ? "auto" : `${timeline ? "auto" : "570px"}`,
        padding: "30px",
        boxShadow:
          "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        borderRadius: "35px",
        backgroundColor: `${background ? "#ffffff" : "#11172B"}`,
        position: "relative",
        overflow: "visible",
        "&:hover": {
          boxShadow:
            "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        },
      }}
    >
      {img && (
        <Box
          component={"div"}
          sx={{
            borderRadius: "35px",
            maxWidth: `${
              timeline ? "100%" : { xs: "400px", sm: "400px", md: "433px" }
            }`,
            width: "100%",
            overflow: "hidden",
            marginBottom: "10px",
          }}
        >
          {Icon && <CardIcon Icon={Icon} />}
          <Box
            component={"img"}
            width={"433px"}
            height={"288px"}
            loading="lazy"
            src={img}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              objectPosition: "top",
            }}
            alt="FAQ image"
          />
        </Box>
      )}

      <CardContent sx={{ padding: "0" }}>
        <Title4
          variant="h6"
          textcolor={`${background ? "#000000" : "#E01933"}`}
          sx={{
            display: `${timeline ? `${matches ? "block" : "none"}` : "block"}`,
            marginBottom: "10px",
          }}
        >
          {title}
        </Title4>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: "0.8rem", md: "1rem" },
            fontWeight: "400",
            lineHeight: "1.5",
            color: `${background ? "#000000" : "#ffffff"}`,
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SliderCard;
