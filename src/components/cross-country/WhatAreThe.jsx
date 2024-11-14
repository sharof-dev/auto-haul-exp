import React from "react";
import {
  BannerColor,
  BannerImage,
  Section,
  Title2,
  Title4,
} from "../../pages/how-it-works/styles";
import { Box, Container, styled, useMediaQuery } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTheme } from "@emotion/react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SliderCard from "../car-shipping-cost/cards/SliderCard";
import "./custom.css";

// Styled VerticalTimeline
const VerticalTimelineText = styled(VerticalTimeline)(({ theme }) => ({
  "&:before": {
    top: "8% !important",
    height: "84% !important",
  },
}));

function WhatAreThe({ title, titleCustome, data, text, background, br }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));
  const separate = (num) => (num % 2 ? "left" : "right");

  return (
    <>
      <Section component={"section"} id="what-are-the">
        {/* Banner Image */}
        <BannerImage
          image={background ? background : ""}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={
            background
              ? "linear-gradient(180deg, #11172b 40%, #11172B 100%)"
              : ""
          }
        />
        <Container maxWidth="xl">
          <Title2
            variant="h2"
            sx={{
              fontWeight: 600,
              marginBottom: "20px",
              textAlign: "center",
              color: background ? "#fff" : "#11172B",
            }}
          >
            {title} {br && <br />}{" "}
            <span style={{ color: "#e01933" }}>{titleCustome}</span>
          </Title2>
          {text && (
            <Title4
              variant="h4"
              textcolor={"#7A7A7A"}
              sx={{
                margin: "10px 0px",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              {text}
            </Title4>
          )}
          <VerticalTimelineText
            animate={true}
            lineColor={background ? "#fff" : "#E01933"}
            style={{ boxShadow: "none", border: "0" }}
          >
            {data?.map((card, idx) => (
              <VerticalTimelineElement
                dateClassName={background ? "date-dark" : "date-light"}
                date={matches ? null : card.title}
                iconStyle={{ background: "#E01933", color: "#fff" }}
                icon={<RadioButtonCheckedIcon />}
                position={separate(idx)}
                key={idx}
              >
                <SliderCard
                  {...card}
                  background={background}
                  matches={matches}
                />
              </VerticalTimelineElement>
            ))}
          </VerticalTimelineText>
        </Container>
      </Section>
    </>
  );
}

export default WhatAreThe;
