import { Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// TRUCK
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

function OurAutoCard({ icon, title, text, path, index }) {
  const navigat = useNavigate();
  const navigatHandler = (path) => navigat(path ? path : "/");
  const separate = (num) => {
    if (num % 2) {
      return "#11172B";
    }
    return "#252D38EB";
  };

  return (
    <Card
      sx={{
        width: { sm: "100%", md: "44.444%" },
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: `${separate(index + 1)}`,
        transition: "background-color 0.2s",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#E01933",
        },
      }}
      onClick={() => navigatHandler(path)}
    >
      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            border: "4px solid #868686",
          }}
        >
          {icon ? (
            <Box component={"img"} loading="lazy" src={icon} alt={"#"} />
          ) : (
            <LocalShippingOutlinedIcon
              sx={{ fontSize: "60px", color: "#11172B" }}
            />
          )}
        </Box>
      </Box>
      <Box component={"div"}>
        <Typography
          variant="h3"
          sx={{
            padding: { xs: "10px", sm: "10px", md: "15px" },
            margin: { xs: "0", sm: "0", md: "15px 0 0 0" },
            fontSize: { xs: "20px", sm: "25px", md: "30px" },
            fontWeight: 600,
            textAlign: "center",
            color: "#fff",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 400,
            lineHeight: { xs: "auto", sm: "26px" },
            color: "#fff",
            textAlign: "center",
          }}
          gutterBottom
        >
          {text}
        </Typography>
      </Box>
    </Card>
  );
}

export default OurAutoCard;
