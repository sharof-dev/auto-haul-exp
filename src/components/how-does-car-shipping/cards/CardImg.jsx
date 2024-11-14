import { Box, Card } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

function CardImg({ img, mini, reverse }) {
  const cardMiniWidth = mini
    ? { xs: "597px", sm: "597px", md: "597px" }
    : { xs: "725px", sm: "755px", md: "520px" };
  const cardMiniHeight = mini
    ? { xs: "290px", sm: "290px", md: "389px" }
    : { xs: "396px", sm: "755px", md: "476px" };

  return (
    <Card
      component="li"
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: { xs: "10px", sm: "10px", md: "30px" },
        width: "100%",
        backgroundColor: "transparent",
        boxShadow: "0",
      }}
    >
      <Box
        component={"div"}
        sx={{
          width: "100%",
          maxWidth: cardMiniWidth,
          height: cardMiniHeight,
          flexGrow: 1,
          boxShadow: `${
            reverse
              ? "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)"
              : "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)"
          }`,
          borderRadius: "35px",
          overflow: "hidden",
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
    </Card>
  );
}

export default CardImg;
