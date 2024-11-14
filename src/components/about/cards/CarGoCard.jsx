import { Box, Card, CardContent } from "@mui/material";
import { BodyText1 } from "../../../pages/how-it-works/styles";

function CarGoCard({ icon, text, miniIcon }) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "100%", md: "373px" },
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "50px",
        transition: "all 0.2s",
        boxShadow: "0",
        "&:hover": {
          scale: "1.07",
        },
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "150px",
          height: "150px",
          marginBottom: "30px",
          border: "4px solid #818181",
          backgroundColor: "#11172B",
          borderRadius: "50%",
        }}
      >
        <Box
          width={"50px"}
          component={"img"}
          src={icon}
          sx={{
            transform: `${miniIcon ? "translateY(10px) scale(1.5) " : ""}`,
          }}
          alt={"#"}
        />
      </Box>
      <CardContent sx={{ padding: 0 }}>
        <BodyText1 sx={{ textAlign: "center" }} color={"#F9F9F9"}>
          {text}
        </BodyText1>
      </CardContent>
    </Card>
  );
}

export default CarGoCard;
