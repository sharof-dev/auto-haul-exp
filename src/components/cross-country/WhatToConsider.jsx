import { Box, Container, Grid } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  BodyText1,
  Section,
  Title2,
} from "../../pages/how-it-works/styles";
import WhatToConsiderCard from "./cards/WhatToConsiderCard";

const CardData = [
  {
    img: "/assets/how-it-works/what_to_consider_card0.webp",
    text: "Experience",
    hiddenText:
      "US Car-G0 has years of experience with cross country transport  and can manage any problems.",
  },
  {
    img: "/assets/how-it-works/what_to_consider_card1.webp",
    text: "Insurance",
    hiddenText:
      "If something were to happen to your car while US Car-G0 was transporting it, you could rest easy knowing that it would be covered by our insurance policy.",
  },
  {
    img: "/assets/how-it-works/what_to_consider_card2.webp",
    text: "Price",
    hiddenText:
      "Our rates are reasonable and customized to match the demands of our clients. We do our best to keep our prices as low as possible, but please be aware that going with the least expensive choice among our rivals may not necessarily provide the greatest service or enough insurance coverage.",
  },
  {
    img: "/assets/how-it-works/what_to_consider_card3.webp",
    text: "Customer Service",
    hiddenText:
      "We know how crucial it is to protect your car while shipping. Our staff is available to answer your questions and address your issues, and they regularly inform you on the progress of your transit.",
  },
];

function WhatToConsider() {
  return (
    <>
      <Section component={"section"} id="what-to-consider">
        <BannerImage
          image={"/assets/how-it-works/what_to_know.jpg"}
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
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <Title2 variant="h2">
              What to Consider When Choosing a <br />
              <Box component="span" sx={{ color: "#E01933" }}>
                Cross Country Car Shipping Company?
              </Box>
            </Title2>
            <BodyText1 variant="subtitle1">
              There are a few things to keep in mind when picking a{" "}
              <em>
                <strong>cross country auto transport</strong>
              </em>{" "}
              firm to guarantee a trouble-free delivery of your vehicle. These
              factors comprise of:
            </BodyText1>
          </Box>

          <Grid
            container
            justifyContent="center"
            columnSpacing={0}
            rowSpacing={1}
          >
            {CardData.map((card, idx) => (
              <WhatToConsiderCard {...card} key={idx} />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}

export default WhatToConsider;
