import { Box, Container, useMediaQuery } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  Section,
  Title2,
} from "../../pages/how-it-works/styles";
import SliderCard from "./cards/SliderCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@emotion/react";
import AdjustIcon from "@mui/icons-material/Adjust";

const sliderData = [
  {
    img: "/assets/how-it-works/what_factors_timeline0.webp",
    title: "Distance of the Transport",
    text: `
    One of the biggest things that can affect how much it costs to ship a car  is how far it has to go. In general, the farther away something is, the more it will cost to ship it. For instance, it will cost more to ship a car from New York to California than it will to ship a car from New York to Pennsylvania.
    `,
  },
  {
    img: "/assets/how-it-works/what_factors_timeline1.jpg",
    title: "Vehicle Make & Model",
    text: `
      Most of the time, it costs more to ship trucks or SUVs than it does to ship smaller cars. Also, luxury or classic cars may need extra safety measures and specialized tools to be transported safely, which can add to the cost.`,
  },
  {
    img: "/assets/how-it-works/what_factors_timeline2.jpg",
    title: "Auto Transport Type",
    text: `
   Another thing that can affect how much it costs to ship a car  is how it gets there. There are two main ways to ship a car:  and. Open transport is the most frequent and least expensive way to move a car, but it leaves your car open to the weather while it’s being moved. On the other hand, enclosed transportation is safer and better protected, but it costs more.
    `,
  },
  {
    img: "/assets/how-it-works/what_factors_timeline3.jpg",
    title: "Seasonality",
    text: `
    The time of year can have a big effect on car shipping costs. Most of the time, the summer is the busy time of year for car shipping companies because more people move during this time. Because of this, prices can be higher during peak season than when it’s not. If you can ship your car when it’s not busy, you can save money.
    `,
  },
  {
    img: "/assets/how-it-works/what_factors_timeline4.jpg",
    title: "Location",
    text: `
   Car shipping cost depends on where the car is picked up and dropped off. If you’re shipping your car from a big city, you may pay less than shipping it from the middle of nowhere. In the same way, if you’re shipping your car to a big city, it may cost less than if you were shipping it to a small town. Also, the farther you go, the more you’ll have to pay.
    `,
  },
  {
    img: "/assets/how-it-works/what_factors_timeline5.jpg",
    title: "Route",
    text: `
  The route the carrier takes to ship your car can have a big effect on how much it costs. Shipping costs may go up because of longer distances, remote locations, or rough terrain. In the same way, shipping to and from big cities can add to the cost because of traffic and higher demand.
    `,
  },
  {
    img: "/assets/how-it-works/what_factors_timeline6.webp",
    title: "Shipping Date",
    text: `
  The vehicle shipping quote can also depend on when you send your package. When there are a lot of people looking for car shipping services at the same time, prices tend to go up. Also, if you need to ship your car quickly, you might have to pay more for “expedited” services.
    `,
  },
  {
    img: "/assets/how-it-works/what_factors_timeline7.jpg",
    title: "Vehicle Condition",
    text: `
  If your car doesn’t run, you might need special tools or services to load and unload it. This can add to the cost. Also, if your car is too big or needs special care, like a classic or luxury car, you may have to pay more for enclosed transport or extra insurance.
    `,
  },
  {
    img: "/assets/how-it-works/what_factors_timeline8.webp",
    title: "Vehicle Details",
    text: `
 Vehicles that are bigger and heavier often need more fuel and space on the carrier, which can raise the price. Also, if your car has been customized or has aftermarket parts, they may need extra care during shipping, which can add to the cost.
    `,
  },
];

function WhatFactors() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <>
      <Section component={"section"} id="what-factors">
        {/* Banner Image */}
        <BannerImage
          image={"/assets/how-it-works/what_factors.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl" sx={{ overflow: "hidden" }}>
          <Title2
            variant="h4"
            sx={{
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            What Factors Are Used to Calculate <br />
            <Box component="span" sx={{ color: "#E01933" }}>
              Car Shipping Costs?
            </Box>
          </Title2>
          <VerticalTimeline
            animate={true}
            lineColor={"#E01933"}
            style={{ boxShadow: "none", border: "0" }}
          >
            {sliderData.map((card, idx) => (
              <VerticalTimelineElement
                style={{ marginTop: `${matches ? "50px" : "20px"}` }}
                date={matches ? null : card.title}
                iconStyle={{ background: "#E01933", color: "#fff" }}
                icon={<AdjustIcon />}
                key={idx}
              >
                <SliderCard
                  {...card}
                  dark={"true"}
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

export default WhatFactors;
