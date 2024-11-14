import React, { useState } from "react";
import BlogCard from "../blog/BlogCard";
import { Section } from "../../pages/how-it-works/styles";
import { Box, Button, Container } from "@mui/material";

function BlogCardContainer({ handleClick, data, disabled }) {
  return (
    <>
      <Section component={"section"} id="blog-card-container">
        <Container maxWidth={"xl"}>
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: "15px 0", sm: "15px 0", md: "24px 0" },
            }}
          >
            {data?.map((card, idx) => (
              <BlogCard {...card} key={idx} />
            ))}
          </Box>
          <Box
            component={"div"}
            sx={{
              marginTop: "20px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                margin: "0 auto",
                padding: "15px 40px",
                fontSize: "16px",
                borderRadius: "50px",
                backgroundColor: "#E01933",
                transition: "0.1s linear",
                "&:hover": {
                  backgroundColor: "#E01933",
                  opacity: 0.8,
                },
              }}
              onClick={handleClick}
              disabled={disabled}
            >
              Load More
            </Button>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default BlogCardContainer;
