import { Box, Card, CardContent, Typography } from "@mui/material";
import { BodyText, Title4 } from "../../../pages/how-it-works/styles";

function TimelineCard({ title, text, background }) {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          backgroundColor: "transparent",
          boxShadow: "none",
          borderRadius: "0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "25px", sm: "25px", md: "30px" },
            fontWeight: { xs: 500, sm: 500, md: 600 },
            color: background ? "#fff" : "#11172B",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "16px", sm: "16px", md: "18px" },
            color: background ? "#F9F9F9" : "#7A7A7A",
            fontWeight: 400,
          }}
        >
          {text}
        </Typography>
      </Card>
    </>
  );
}

export default TimelineCard;
