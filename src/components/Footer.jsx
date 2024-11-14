import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  styled,
  Container,
} from "@mui/material";

const LinkMenu = styled(Link)(({ theme }) => ({
  color: "white",
  paddingLeft: 0,
  textDecoration: "none",
  transition: ".5s",
  "&:hover": {
    color: "#e01933",
  },
}));

const ListItems = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
}));

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          background:
            "url(https://uscargofreight.com/wp-content/uploads/2022/07/footer-bg_11zon.jpg)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          color: "white", // Setting the color to white here
          px: { xs: 3, sm: 10 },
          py: { xs: 5, sm: 10 },
        }}
      >
        <Box
          sx={{
            backgroundColor: "transparent",
            backgroundImage:
              "linear-gradient(180deg, #11172B 40%, #101010 100%)",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: "absolute",
            opacity: 0.8,
            zIndex: 1,
          }}
        />
        <Container maxWidth="xl">
          <Grid
            container
            spacing={5}
            justifyContent="space-between"
            sx={{ position: "relative", zIndex: 2 }}
          >
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="inherit" gutterBottom>
                USCarGoFreight
              </Typography>
              <Typography variant="body2" color="inherit" paragraph>
                Disclaimer: All pictures of equipment are meant for general
                reference and do not imply automatic use of that equipment. US
                Car-Go Freight operates as a brokerage working with a vetted
                group of contracted drivers. If you would like to view pictures
                of the equipment being used for your specific transport, please
                be sure to request those from your US Car-Go Freight
                representative.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography
                variant="h6"
                gutterBottom
                color="inherit"
              >
                Menu
              </Typography>
              <List>
                <ListItems>
                  <LinkMenu to="/" style={{ display: "flex" }}>
                    Home
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 5,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </LinkMenu>
                </ListItems>
                <ListItems>
                  <LinkMenu to="/what-we-do" style={{ display: "flex" }}>
                    What We Do
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 5,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </LinkMenu>
                </ListItems>
                <ListItems>
                  <LinkMenu to="/about" style={{ display: "flex" }}>
                    About
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 5,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </LinkMenu>
                </ListItems>
                <ListItems>
                  <LinkMenu to="/blog" style={{ display: "flex" }}>
                    Blog
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 5,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </LinkMenu>
                </ListItems>
                <ListItems>
                  <LinkMenu to="/our-gallery" style={{ display: "flex" }}>
                    Gallery
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 5,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </LinkMenu>
                </ListItems>
              </List>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="h6" gutterBottom color="inherit">
                Support
              </Typography>
              <List>
                <ListItems>
                  <LinkMenu to="/contact" style={{ display: "flex" }}>
                    Contact
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 5,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </LinkMenu>
                </ListItems>
                <ListItems>
                  <LinkMenu to="/faq" style={{ display: "flex" }}>
                    FAQs
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 5,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </LinkMenu>
                </ListItems>
                <ListItems>
                  <LinkMenu to="#" style={{ display: "flex" }}>
                    Terms & Conditions
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 5,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </LinkMenu>
                </ListItems>
                <ListItems>
                  <LinkMenu to="/privacy-policy" style={{ display: "flex" }}>
                    Privacy Policy
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 5,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </LinkMenu>
                </ListItems>
              </List>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom color="inherit">
                Connect
              </Typography>
              <Typography sx={{ mt: { lg: 3 } }} color="inherit">
                (888) 249-8840
              </Typography>
              <Typography sx={{ mt: { lg: 2 } }} color="inherit">
                1001 W Cleveland St
                <br />
                Tampa Florida 33606
              </Typography>
              <Typography sx={{ mt: { lg: 2 } }} color="inherit">
                info@uscargofreight.com
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <img
                  src="https://uscargofreight.com/wp-content/uploads/2022/07/FMCSA_50x50-1.png.webp"
                  alt="fmcsa"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body2" color="text.secondary">
                    DOT:3911910
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    MC:1444325
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Grid container spacing={2} sx={{ backgroundColor: "#11172B" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, p: "1rem 0" }}>
            <img
              src="https://uscargofreight.com/wp-content/uploads/elementor/thumbs/secure90x72-qbcv819vxcvid2868boyv5uos4pjuccvsb734jm9n4.png"
              alt="logo"
              width="36px"
              height="28.8px"
            />
            <img
              src="https://uscargofreight.com/wp-content/uploads/elementor/thumbs/logo-visa-qbcv819vxcvid2868boyv5uos4pjuccvsb734jm9n4.jpg"
              alt="logo"
              width="36px"
              height="28.8px"
            />
            <img
              src="https://uscargofreight.com/wp-content/uploads/elementor/thumbs/logo-discover-qbcv819vxcvid2868boyv5uos4pjuccvsb734jm9n4.jpg"
              alt="logo1"
              width="36px"
              height="28.8px"
            />
            <img
              src="https://uscargofreight.com/wp-content/uploads/elementor/thumbs/logo-american-express-qbcv819vxcvid2868boyv5uos4pjuccvsb734jm9n4.jpg"
              alt="logo2"
              width="36px"
              height="28.8px"
            />
            <img
              src="https://uscargofreight.com/wp-content/uploads/elementor/thumbs/logo-master-card-qbcv819vxcvid2868boyv5uos4pjuccvsb734jm9n4.jpg"
              alt="logo3"
              width="36px"
              height="28.8px"
            />
          </Box>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Typography variant="body1" sx={{p: '1rem 0'}}>
          Copyright © 2023 by US Car-Go Freight.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
