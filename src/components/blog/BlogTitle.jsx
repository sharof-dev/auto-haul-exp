import { Box, Container } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  Heading,
  Section,
} from "../../pages/how-it-works/styles";
import React from "react";

function BlogTitle() {
  return (
    <>
      <Section component={"section"} id="blog-title">
        {/* Banner Image */}
        <BannerImage
          image={"/assets/blog/blog_title_background.jpg"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172B 40%, #101010 100%)"}
        />
        <Container maxWidth={"xl"}>
          <Heading variant="h1" sx={{ textAlign: "center" }}>
            Blog
            <Box component={"span"} sx={{ color: "#E01933" }}>
              .
            </Box>
          </Heading>
        </Container>
      </Section>
    </>
  );
}

export default BlogTitle;
