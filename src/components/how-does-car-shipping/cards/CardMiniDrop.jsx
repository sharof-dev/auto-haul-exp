import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CardMiniDrop({ icon, step, title, bodyText, hiddenText, reverse }) {
  const [collapse, setCollapse] = useState(false);

  const collapseHandler = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <Card
      component="li"
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: { xs: "0 10px 10px 10px", sm: "10px", md: "30px" },
        width: "100%",
        boxShadow: "0",
        backgroundColor: "#ffffff00",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "520px", sm: "900px", md: "900px", lg: "520px" },
          minHeight: "389px",
          flexGrow: 1,
          boxShadow: `${
            reverse
              ? "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)"
              : "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)"
          }`,

          borderRadius: "35px",
          overflow: "hidden",
          backgroundColor: "#11172B",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "flex-start",
            padding: "30px",
            width: "100%",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box
            component={"div"}
            sx={{
              width: "60px",
              height: "60px",
              margin: "10px 30px 0 0",
              padding: "15px",
              borderRadius: "50%",
              backgroundColor: "#E01933",
            }}
          >
            <Box
              width={30}
              height={30}
              component={"img"}
              src={icon}
              alt="card icon"
            ></Box>
          </Box>
          <Box component={"div"}>
            <Typography
              variant="h3"
              sx={{
                marginBlockStart: "0.5rem",
                marginBlockEnd: "0",
                fontSize: "1.75rem",
                fontWeight: 600,
                lineHeight: "1.2",
                color: "white",
              }}
            >
              {step}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                marginBlockStart: "0",
                marginBlockEnd: "1rem",
                fontSize: "1.75rem",
                fontWeight: 700,
                lineHeight: "1.2",
                color: "#E01933",
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "1.4em",
                color: "white",
              }}
            >
              {bodyText}
              {!collapse && <span>....</span>}
              <span
                className={`long-text ${collapse ? "expanded" : ""}`}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  maxHeight: `${collapse ? "50rem" : "0"}`,
                }}
              >
                <br />
                {hiddenText}
              </span>
            </Typography>

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
        </CardContent>
      </Box>
    </Card>
  );
}

export default CardMiniDrop;
