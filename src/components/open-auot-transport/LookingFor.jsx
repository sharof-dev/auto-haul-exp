import React from "react";
import { Section, Title2, Title4 } from "../../pages/how-it-works/styles";
import { Box, Container } from "@mui/material";

function LookingFor() {
  return (
    <>
      <Section component={"section"} id="looking-for">
        <Container maxWidth="xl">
          <Box component={"div"} sx={{ maxWidth: "1140px", margin: "0 auto" }}>
            <Title2 color={"#11172B"} sx={{ textAlign: "center" }}>
              Looking for a{" "}
              <Box component={"span"} sx={{ color: "#E01933" }}>
                reliable and affordable
              </Box>{" "}
              way to transport your car?
            </Title2>
            <Title4
              textcolor={"#7A7A7A"}
              sx={{ textAlign: "center", fontWeight: "500" }}
            >
              Look no further than open auto transport. As the most common and
              widely used method of car shipping, open transport offers numerous
              benefits. At US Car-Go Freight, we specialize in
              <strong>open car transport</strong> and provide top-notch services
              to meet your needs.
            </Title4>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default LookingFor;
