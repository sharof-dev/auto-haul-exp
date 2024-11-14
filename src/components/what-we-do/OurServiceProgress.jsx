import { Heading, Section, Title4 } from "../../pages/how-it-works/styles";
import { Box, Container, useMediaQuery } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTheme } from "@emotion/react";
import SliderCard from "../car-shipping-cost/cards/SliderCard";
import AdjustIcon from "@mui/icons-material/Adjust";

function OurServiceProgress({ data, title, text, titleColor }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));
  const separate = (num) => {
    if (num % 2) {
      return "left";
    }
    return "right";
  };

  return (
    <>
      <Section component={"section"} id="what-are-the">
        <Container maxWidth="xl">
          <Box component={"div"} sx={{ marginBottom: "30px" }}>
            <Heading
              variant="h4"
              color={"#11172B"}
              sx={{
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              {title ? (
                title
              ) : (
                <>
                  Our Service{" "}
                  <Box component="span" sx={{ color: "#E01933" }}>
                    Process.
                  </Box>
                </>
              )}
            </Heading>

            <Title4
              variant="h4"
              textcolor={"#7A7A7A"}
              sx={{ margin: "10px 0px", fontWeight: 500, textAlign: "center" }}
            >
              {text ? (
                text
              ) : (
                <>
                  Look no further than US Car-Go Freight! Our team of seasoned
                  professionals is dedicated to crafting custom shipping
                  solutions tailored to your specific requirements. We offer a
                  range of services, from door-to-door to expedited, and can
                  accommodate both enclosed and open auto transport. Plus, with
                  our expedited and standard delivery options, you can get your
                  vehicles where they need to go on your timeline.
                  <br />
                  <br />
                  Here's how the process of moving your vehicle with us works:
                </>
              )}
            </Title4>
          </Box>
          <VerticalTimeline
            layout={"2-columns"}
            animate={true}
            lineColor={"#E01933"}
            style={{ boxShadow: "none", border: "0" }}
          >
            {data?.map((card, idx) => (
              <VerticalTimelineElement
                style={{ marginTop: `${matches ? "50px" : "20px"}` }}
                date={matches ? null : card.title}
                dateClassName={titleColor ? "timeline-title-black" : ""}
                iconStyle={{ background: "#E01933", color: "#fff" }}
                icon={<AdjustIcon />}
                key={idx}
                position={separate(idx)}
              >
                <SliderCard
                  {...card}
                  // dark={"true"}
                  timeline={"true"}
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

export default OurServiceProgress;
