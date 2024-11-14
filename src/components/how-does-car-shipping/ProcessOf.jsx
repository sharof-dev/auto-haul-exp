import CardImg from "../how-does-car-shipping/cards/CardImg";
import CardDrop from "../how-does-car-shipping/CardDrop";
import { Section } from "../../pages/how-it-works/styles";
import { Box, Container } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";
function ProcessOf() {
  AOS.init({ duration: 1500 });
  return (
    <>
      <Section component={"section"} id="process-of">
        <Container
          maxWidth="xl"
          sx={{
            overflow: "hidden",
            padding: { xs: "0px", sm: "0px", md: "0 24px" },
          }}
        >
          <Box
            component={"ul"}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
              },
            }}
          >
            <CardDrop />
            <CardImg
              img={"/assets/how-it-works/process_of.webp"}
              data-aos="fade-left"
            />
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default ProcessOf;
