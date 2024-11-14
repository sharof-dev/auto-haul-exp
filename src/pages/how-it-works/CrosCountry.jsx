import UtimateWay from "../../components/cross-country/UtimateWay";
import WhatIsCross from "../../components/cross-country/WhatIsCross";
import ClientsSay from "../../components/cross-country/ClientsSay";
import HowDoesCross from "../../components/cross-country/HowDoesCross";
import WhatToConsider from "../../components/cross-country/WhatToConsider";
import CostToShip from "../../components/cross-country/CostToShip";
import HowMuchDoes from "../../components/cross-country/HowMuchDoes";
import HowGet from "../../components/cross-country/HowGet";
import WhatAreThe from "../../components/cross-country/WhatAreThe";
import { Box } from "@mui/material";

const defaultSliderData = [
  {
    img: "/assets/how-it-works/what_are_the_card0.webp",
    title: "Level of Expertise",
    text: `You probably want to maintain your car in top shape since it represents a considerable financial investment. Whatever your shipping needs are, US Car-G0 can handle them. Every day, we carry dozens of automobiles for our clients, and we treat each one with the utmost respect.`,
  },
  {
    img: "/assets/how-it-works/what_are_the_card1.webp",
    title: "Shipping Timing",
    text: `Yet, not all companies that provide interstate shipping live up to their claims of speed. We at US Car-G0 understand how crucial it is for you to get your car on schedule, and we work tirelessly to make that a reality. Your car will arrive on time since we have planned the best route and taken into account weather and traffic.`,
  },
  {
    img: "/assets/how-it-works/what_are_the_card2.jpg",
    title: "Flexibility and Reliability",
    text: `We understand that the cost of cross country vehicle transport may be significant, and we work hard to provide you with competitive rates and premium services. US Car-G0 only employs trained professionals that are properly geared to transport your car. They will keep your car safe and on schedule. When you need something, we have it.`,
  },
  {
    img: "/assets/how-it-works/what_are_the_card3.webp",
    title: "Transport Option",
    text: (
      <>
        When shipping with US Car-G0, you may choose between an
        <Box
          component={"a"}
          href={"#"}
          target="_blank"
          sx={{ textDecoration: "none", color: "#fff" }}
        >
          open carrier trailer
        </Box>
        and a fully
        <Box
          component={"a"}
          href={"#"}
          target="_blank"
          sx={{ textDecoration: "none", color: "#fff" }}
        >
          enclosed carrier truck. If you need to ship your automobile but are on
          a tight budget, open carriers are an option to explore. If you need to
          ship a vintage or luxury vehicle, however, you should do it in an
          enclosed carrier.
        </Box>
      </>
    ),
  },
];

const CrosCountry = () => {
  return (
    <>
      <UtimateWay />
      <WhatIsCross />
      <ClientsSay />
      <HowDoesCross />
      <WhatToConsider />
      <CostToShip />
      <HowMuchDoes />
      <HowGet />
      <WhatAreThe
        data={defaultSliderData}
        background={"/assets/how-it-works/costs.jpg"}
        title={"What Are the Factors to Consider "}
        titleCustome={"When Shipping a Car?"}
        br={true}
      />
    </>
  );
};

export default CrosCountry;
