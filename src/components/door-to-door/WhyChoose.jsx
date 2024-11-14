import React from "react";
import {
  BannerColor,
  BannerImage,
  Section,
  Title2,
} from "../../pages/how-it-works/styles";
import { Box, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TimelineCard from "./card/TimelineCard";

function WhyChoose({ background, backgroundColor, sliderData, title }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <>
      <Section component={"section"} id="fully-licensed">
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
          <Title2
            color={background ? "#fff" : "#11172B"}
            sx={{ textAlign: "center" }}
          >
            {title ? title : " Why Choose"}
            <Box component="span" sx={{ color: "#E01933" }}>
              {title ? "US Car-Go." : "Us?"}
            </Box>
          </Title2>
          <VerticalTimeline
            layout={"1-columns"}
            animate={true}
            lineColor={"#E01933"}
            style={{ boxShadow: "none", border: "0" }}
          >
            {sliderData.map((card, idx) => (
              <VerticalTimelineElement
                style={{ marginTop: `${matches ? "50px" : "20px"}` }}
                date={null}
                iconStyle={{ background: "#E01933", color: "#fff" }}
                icon={<card.icon />}
                key={idx}
                position={"right"}
              >
                <TimelineCard
                  {...card}
                  image={false}
                  timeline={"true"}
                  background={background}
                  matches={matches}
                />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Container>
      </Section>
    </>
  );
}

export default WhyChoose;
