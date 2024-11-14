import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CardDrop() {
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
          maxWidth: { xs: "520px", sm: "900px", md: "520px" },
          flexGrow: 1,
          boxShadow:
            "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
          borderRadius: "35px",
          overflow: "hidden",
          backgroundColor: "#11172B",
        }}
      >
        <CardContent sx={{ padding: "30px", width: "100%" }}>
          <Typography
            variant="h3"
            sx={{
              marginBlockStart: "0.4rem",
              marginBlockEnd: "1rem",
              fontSize: { xs: "35px", sm: "35px", md: "45px", lg: "50px" },
              fontWeight: 600,
              lineHeight: "1em",
              color: "white",
            }}
          >
            Process of{" "}
            <span style={{ fontWeight: 700, color: "#E01933" }}>
              Shipping a vehicle.
            </span>
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
            {" "}
            We understand that your vehicle is more than just a car. It
            represents your personality, style, and sense of pride. That's why
            we take great care when shipping your vehicle. You can trust us to
            get your car to its destination safely and on time. We've made the
            process of moving your vehicle easy for you. All you need to do is
            give us a call, or use our simple{" "}
            <Box
              component="a"
              href="#card-shipping"
              sx={{
                textDecoration: "underline",
                color: "white",
                "&:hover": {
                  color: "#E01933",
                  textDecorationColor: "#fff",
                },
              }}
            >
              {" "}
              online quote
            </Box>{" "}
            process. With US Car-Go Freight, you can rest easy knowing that your
            vehicle is in good hands.{!collapse && <span>....</span>}
            <span
              className={`long-text ${collapse ? "expanded" : ""}`}
              style={{
                display: "inline-block",
                overflow: "hidden",
                maxHeight: `${collapse ? "50rem" : "0"}`,
              }}
            >
              <br />
              Whether you're moving across the country or just to a different
              state, we know how important your car is to you. That's why we use
              top-of-the-line technology to make sure your car is treated like
              royalty every step of the way. We offer and personalized customer
              support, so you can rest assured that your beloved car will arrive
              at its destination safe and sound. Trust us to take care of your
              precious vehicle - we're the pioneer in car shipping service you
              can count on!
              <br />
              <br />
              We treat your vehicle just like it's our own. Whether it's your
              vintage car, your trusty motorcycle, your ATV, your boat, or your
              everyday drive, we've got you covered. With our expert know-how
              and passion for automobiles, we'll ensure that your valuable
              possession gets to its final stop without a hitch. You can trust
              us to take care of your wheels with the utmost care and attention.
              <br />
              <br />
              US Car-Go Freight know that the thought of transporting a vehicle
              can be overwhelming, but don't worry, it's not as complicated as
              it may seem. We understand that there are many reasons why you may
              be stressed about this process, such as purchasing your dream car
              online or moving to a new state and needing to have your vehicle
              shipped to you. But don't fret, we've got your back! Keep reading
              as we guide you through the steps you need to know to ship your
              automobile like a pro.
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
        </CardContent>
      </Box>
    </Card>
  );
}

export default CardDrop;
