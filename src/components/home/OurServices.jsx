import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import React, { useEffect } from "react";
import {
  BannerColor,
  BannerImage,
  Section,
} from "../../pages/how-it-works/styles";
import bgImg from "/assets/home_img/our_servis.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <DirectionsCarIcon style={{ fontSize: 50 }} />,
    title: "Open Auto Transport",
    description: "Affordable and Convenient",
  },
  {
    icon: <EmojiTransportationIcon style={{ fontSize: 50 }} />,
    title: "Enclosed Auto Transport",
    description: "For your Prized Asset - Shipping with Expertise and Care",
  },
  {
    icon: <LocalShippingOutlinedIcon style={{ fontSize: 50 }} />,
    title: "Door to Door Auto Transport",
    description: "Peace of Mind & Hassle-Free Car Shipping",
  },
  {
    icon: <LocalShippingIcon style={{ fontSize: 50 }} />,
    title: "Expedited Car Shipping",
    description: "The Fastest Way to Transport Your Vehicle",
  },
  {
    icon: <LocalShippingTwoToneIcon style={{ fontSize: 50 }} />,
    title: "Heavy Equipment Shipping",
    description: "Big or Small, We Ship it All",
  },
  {
    icon: <TwoWheelerIcon style={{ fontSize: 50 }} />,
    title: "Motorcycle Shipping",
    description: "Safe and Secure Motorcycle Shipping with Us",
  },
];

function OurServices() {
    console.log(bgImg);
    return (
        <Section component={"div"} >
            <BannerImage image={'/assets/home_img/our_servis.jpg'} parallax={"true"} />
            <BannerColor color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"} />
            <Container maxWidth="lg" sx={{ color: '#fff', py: { xs: 6, sm: 6 }, textAlign: 'center', }}>
                <Typography variant="h3" gutterBottom>
                    Our <span style={{ color: '#e01933' }}> Services</span>
                </Typography>
                <Typography variant="h6" gutterBottom>
                    We take care of your vehicle as if it were our own while being transported. <br />
                    We are an easy, fast, and reliable shipping company.
                </Typography>
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mt: 10 }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper elevation={3} sx={{ p: 3, display: 'grid', placeItems: 'center', boxShadow: 'none', backgroundColor: 'transparent', color: '#fff' }}>
                                <Box mb={2}
                                    sx={{
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: '#11172b',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        border: '3px solid silver'
                                    }}
                                >
                                    {service.icon}
                                </Box>
                                <Typography variant="h6" gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body1">
                                    {service.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Section component={"div"}>
      <BannerImage
        image={"/assets/home_img/our_servis.jpg"}
        parallax={"true"}
      />
      <BannerColor
        color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
      />
      <Container
        maxWidth="lg"
        sx={{ color: "#fff", py: { xs: 6, sm: 6 }, textAlign: "center" }}
      >
        <Typography variant="h3" gutterBottom data-aos="fade-up">
          Our <span style={{ color: "#e01933" }}> Services</span>
        </Typography>
        <Typography variant="h6" gutterBottom data-aos="fade-up">
          We take care of your vehicle as if it were our own while being
          transported. <br />
          We are an easy, fast, and reliable shipping company.
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mt: 10 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                data-aos="fade-up"
                elevation={3}
                sx={{
                  p: 3,
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  color: "#fff",
                }}
              >
                <Box
                  mb={2}
                  sx={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#11172b",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    cursor: "pointer",
                    border: "3px solid silver",
                    margin: "15px auto",
                  }}
                >
                  {service.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1">{service.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default OurServices;
