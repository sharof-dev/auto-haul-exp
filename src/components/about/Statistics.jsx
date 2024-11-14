import { useState } from "react";
import {
  BannerColor,
  BannerImage,
  Section,
} from "../../pages/how-it-works/styles";
import StatisticsCard from "./cards/StatisticsCard";
import { Box, Container } from "@mui/material";
import ScrollTrigger from "react-scroll-trigger";

const StatisticsCardData = [
  {
    icon: "/assets/about/statistics_people.png",
    count: 15000,
    plus: true,
    text: "Happy Customers",
  },
  {
    icon: "/assets/about/statistics_sedan.png",
    count: 20000,
    plus: true,
    text: "Vehicles Shipped",
  },
  {
    icon: "/assets/about/statistics_human.png",
    count: 4,
    percent: 8,
    text: "Overall Customer Rating",
  },
];

function Statistics() {
  const [counterOn, setCounteron] = useState(false);
  return (
    <>
      <ScrollTrigger onEnter={() => setCounteron(true)}>
        <Section component={"section"} id="statistics">
          <BannerImage
            image={"/assets/about/statistics_background.jpg"}
            parallax={"true"}
            component={"div"}
          />
          {/* Banner Color */}
          <BannerColor
            color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
          />
          <Container maxWidth="xl">
            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              {StatisticsCardData.map((card, idx) => (
                <StatisticsCard counterOn={counterOn} {...card} key={idx} />
              ))}
            </Box>
          </Container>
        </Section>
      </ScrollTrigger>
    </>
  );
}

export default Statistics;
