import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BodyText } from "../../../pages/how-it-works/styles";

function ServicesCard({ icon, title, text, hiddenText, bigIcon }) {
  const [collapse, setCollapse] = useState(false);

  const collapseHandler = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", ms: "100%", md: "33.333%" },
        padding: "20px",
        borderRadius: "35px",
        backgroundColor: "#11172B",
        transition: "all 0.2s",
        boxShadow:
          "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        "&:hover": {
          scale: "1.02",
          boxShadow:
            "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        },
      }}
    >
      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Box
          component={"img"}
          width={"70px"}
          height={"70px"}
          loading="lazy"
          sx={{
            scale: `${bigIcon ? "1.5" : "1"}`,
            transform: `translateY(${bigIcon ? "10px" : "0"})`,
          }}
          src={icon}
          alt={`${title} icon`}
        />
      </Box>
      <CardContent sx={{ padding: 0 }}>
        <BodyText variant="h4" sx={{ textAlign: "center" }}>
          {title}
          <Box component={"span"} sx={{ color: "#E01933" }}>
            .
          </Box>
        </BodyText>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "1.4em",
            color: "#F9F9F9",
            textAlign: "center",
          }}
        >
          {text}
          {collapse ? "" : "..."}
          <span
            className={`long-text ${collapse ? "expanded" : ""}`}
            style={{
              display: "inline-block",
              overflow: "hidden",
              maxHeight: `${collapse ? "50rem" : "0"}`,
            }}
          >
            <br />
            {/* Hidden text */}
            {hiddenText}
          </span>
        </Typography>
      </CardContent>

      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <IconButton
          variant="contained"
          disableRipple
          sx={{
            padding: "10px",
            marginTop: "15px",
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: "#eee",
            },
          }}
          onClick={collapseHandler}
        >
          {collapse ? <CloseIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
    </Card>
  );
}

export default ServicesCard;
