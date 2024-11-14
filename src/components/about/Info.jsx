import { Box, Container, Grid, Typography } from "@mui/material";
import { Title4 } from "../../pages/how-it-works/styles";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const infoCardData = [
  {
    icon: LocalShippingOutlinedIcon,
    title: "Top Class Professional Service Company",
    text: "We offer a top-class professional service, committed to exceeding our customers' expectations with quality and expertise.",
  },
  {
    icon: SupportAgentOutlinedIcon,
    title: "Monday to Saturday, Throughout the Year",
    text: "We provides reliable & consistent service from Monday to Saturday, year-round. Whether rain or shine, we are committed to delivering top-notch services to our customers.",
  },
  {
    icon: PinDropOutlinedIcon,
    title: "Shipping Door to Door",
    text: "We provide seamless transportation solutions, delivering your car or any vehicle from your doorstep to any destination across the country.",
  },
  {
    icon: AttachMoneyOutlinedIcon,
    title: "Fair and Square Pricing",
    text: "Our pricing is designed to be competitive and transparent, reflecting our commitment to providing affordable and accessible services to all our customers.",
  },
];

function Info() {
  return (
    <>
      <Box component={"section"} id={"info"}>
        <Container maxWidth="xl">
          <Grid
            container
            sx={{
              padding: { xs: "25px", sm: "25px", md: "50px" },
              borderRadius: "35px",
              backgroundColor: "#11172B",
              transform: "translateY(-80px)",
              justifyContent: "space-between",
            }}
          >
            {infoCardData.map((card, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  padding: "15px",
                  backgroundColor: "#11172B",
                }}
                key={idx}
              >
                <Box component={"div"} sx={{ marginBottom: "15px" }}>
                  <card.icon sx={{ color: "#fff", fontSize: "60px" }} />
                </Box>
                <Box component={"div"}>
                  <Title4
                    variant="h3"
                    weight={"600"}
                    textcolor={"#E01933"}
                    sx={{ margin: "10px 0px" }}
                  >
                    {card.title}
                  </Title4>

                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    {card.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Info;
