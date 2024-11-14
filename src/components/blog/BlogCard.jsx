import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { BodyText1 } from "../../pages/how-it-works/styles";
import { useNavigate } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function BlogCard({ img, title, date, text }) {
  const navigate = useNavigate();

  function navigatePath() {
    navigate(title.toLowerCase().replaceAll(" ", "-"));
  }

  return (
    <>
      {title && (
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            maxWidth: "350px",
            margin: { xs: "10px 0px", sm: "10px 0px", md: "15px" },
            borderRadius: "35px",
            backgroundColor: "#11172B",
            border: "3px solid #11172B",
            boxShadow:
              "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
            "&:hover": {
              boxShadow:
                "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
            },
          }}
        >
          <Box
            component={"div"}
            sx={{
              borderRadius: "35px",
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                ".card-shadow": {
                  opacity: 1,
                  zIndex: 1,
                },
              },
            }}
            onClick={navigatePath}
          >
            <Box
              component={"img"}
              width={"345px"}
              height={"172px"}
              loading="lazy"
              src={img}
              alt={"#"}
              sx={{
                borderRadius: "35px",
                width: "100%",
                maxWidth: "345px",
              }}
            />
            <Box
              className="card-shadow"
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#252D3899",
                borderRadius: "35px",
                transition: "all 0.2s",
                opacity: 0,
                zIndex: -1,
              }}
            >
              <ArrowForwardIcon sx={{ color: "#fff" }} />
            </Box>
          </Box>
          <CardContent sx={{ padding: "15px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#fff",
                transition: "color 0.2s",
                cursor: "pointer",
                marginBottom: "15px",
                "&:hover": {
                  color: "#E01933",
                },
              }}
              onClick={navigatePath}
            >
              {title}
            </Typography>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#fff",
                marginBottom: "15px",
              }}
            >
              <AccessTimeIcon />
              <time>{date}</time>
            </Box>
            <Box component={"div"}>
              <Typography sx={{ color: "#fff" }}>{text}</Typography>
            </Box>
            <Button
              variant="text"
              sx={{
                color: "#fff",
                textTransform: "capitalize",
                padding: "10px 0px",
                transition: "color 0.2s",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 500,
                "&:hover": {
                  color: "#E01933",
                },
              }}
              onClick={navigatePath}
            >
              Read More...
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default BlogCard;
