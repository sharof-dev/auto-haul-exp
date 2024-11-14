import { Box, Card, CardContent } from "@mui/material";
import { BodyText1, Title2 } from "../../../pages/how-it-works/styles";
import CountUp from "react-countup";

function StatisticsCard({ counterOn, icon, count, text, plus, percent }) {
  return (
    <Card
      sx={{
        padding: "15px",
        width: "100%",
        maxWidth: "380px",
        backgroundColor: "transparent",
        boxShadow: 0,
      }}
    >
      <Box
        component={"div"}
        sx={{ padding: "15px", display: "flex", justifyContent: "center" }}
      >
        <Box
          component={"img"}
          width={"70px"}
          height={"70px"}
          src={icon}
          alt="icon"
        />
      </Box>

      <CardContent sx={{ padding: 0 }}>
        <Title2 variant="h3" sx={{ textAlign: "center" }} color={"#E01933"}>
          {counterOn && (
            <>
              <CountUp start={0} end={count} duration={2} delay={0} />
              {percent && "."}
              {plus && "+"}
              {percent && (
                <CountUp start={0} end={percent} duration={1} delay={0} />
              )}
            </>
          )}
        </Title2>
        <BodyText1 sx={{ textAlign: "center" }}>{text}</BodyText1>
      </CardContent>
    </Card>
  );
}

export default StatisticsCard;
