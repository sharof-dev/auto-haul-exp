import { Box, Card, CardContent, Typography } from "@mui/material";

function CardStep({ step, text, img, id }) {
  return (
    <Card
      component={"a"}
      href={id}
      title={text}
      className="text-d"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: { xs: "900px", sm: "900px", md: "373px" },
        width: "100%",
        height: "inherit",
        padding: { xl: "20px", sm: "20px", md: "20px 50px" },
        margin: { xs: "0", sm: "0", md: "0 10px" },
        backgroundColor: "#ffffff",
        boxShadow:
          "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        borderRadius: "35px",
        cursor: "pointer",
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow:
            "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        },
        textDecoration: "none",
      }}
    >
      <Box component={"div"}>
        <img
          width={"253px"}
          height={"253px"}
          loading="lazy"
          src={img}
          sx={{
            maxWidth: { xs: "253px", sm: "400px", md: "253px" },
            width: "100%",
            height: "auto",
          }}
          alt={`${step}-${text}`}
        />
      </Box>

      <CardContent sx={{ padding: 0 }}>
        <Typography
          variant="h3"
          sx={{
            color: "#11172B",
            textAlign: "center",
            fontSize: "26px",
            fontWeight: 700,
            lineHeight: "2em",
          }}
        >
          {step}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#7A7A7A",
            textAlign: "center",
            fontSize: { xl: "19px", sm: "19px", md: "22px" },
            fontWeight: 600,
            lineHeight: "1.2em",
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardStep;
