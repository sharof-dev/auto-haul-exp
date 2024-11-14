import { Box, Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

function SliderCard({ starLength = 5, description, userName, logo }) {
  let starArr = [];
  for (let i = 0; i < starLength; i++) starArr.push(i);
  return (
    <Card
      sx={{
        width: "100%",
        padding: "30px",
        minHeight: " 462px",
        borderRadius: "35px",
        overflow: "visible",
        boxShadow:
          "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        "&:hover": {
          boxShadow:
            "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        },
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Typography
          variant="body1"
          sx={{
            margin: "25px 0",
            fontSize: "18px",
            lineHeight: "1.2em",
            color: "#7A7A7A",
          }}
        >
          {description}
        </Typography>
        <Box component={"div"} sx={{ marginBottom: "20px" }}>
          <Box
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Box component={"img"} src={logo} alt={"company logo"} />
            <Typography
              variant="caption"
              sx={{
                color: "#333",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: "1.5",
              }}
            >
              {starLength} Star Customer Rating
            </Typography>
          </Box>

          <Box component={"div"}>
            {starArr.map((_, idx) => (
              <StarIcon
                sx={{ fontSize: "1.5rem", color: "#7a7a7a" }}
                key={idx}
              />
            ))}
          </Box>
        </Box>

        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            "&:hover": {
              h5: {
                color: "red",
              },
              svg: {
                fill: "red",
              },
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#11172B",
              transition: "color 0.2s",
            }}
          >
            {userName}
          </Typography>
          <FormatQuoteOutlinedIcon
            sx={{
              fontSize: "90px",
              color: "#11172B",
              transition: "fill 0.2s",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default SliderCard;
