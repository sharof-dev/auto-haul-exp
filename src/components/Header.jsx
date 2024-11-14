import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  MenuItem,
  Menu,
  Link,
} from "@mui/material";
import Phone from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const list = ["Home", "What-We-Do", "How-It-Works"];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = (
    <>
      {list.map((item) =>
        item.replace(/-/g, " ") === "How It Works" ? (
          <Button
            color="inherit"
            key={item}
            aria-controls={Boolean(anchorEl) ? "basic-menu" : undefined}
            aria-haspopup="true"
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
          >
            How It Works
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleMenuClose}
                style={{ borderBottom: "1px solid silver" }}
              >
                <Link
                  component={RouterLink}
                  to="/how-does-car-shipping-work"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  How does Car Shipping Work
                </Link>
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                style={{ borderBottom: "1px solid silver" }}
              >
                <Link
                  component={RouterLink}
                  to="/car-shipping-costs"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Car Shipping Costs
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  component={RouterLink}
                  to="/cross-country-car-shipping"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Cross Country Car Shipping
                </Link>
              </MenuItem>
            </Menu>
            <ArrowDropDownIcon />
          </Button>
        ) : (
          <Link
            to={item.replace(/-/g, " ").toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
            key={item}
            style={{ color: "white", textDecoration: "none" }}
            component={RouterLink}
          >
            <Button color="inherit">
              {item.replace(/-/g, " ")}
              <span
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginTop: 10,
                  color: "#e01933",
                }}
              >
                •
              </span>
            </Button>
          </Link>
        )
      )}
    </>
  );

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#0c0f25", fontWeight: 600 }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: { xs: "flex", lg: "" },
            justifyContent: { xs: "flex-end", lg: "" },
          }}
        >
          {isMobile || isTablet ? (
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "left" }}>
              <Link component={RouterLink} to={'/'}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  <img src="/assets/logo_re.png" alt="Logo" width="100px" />
                </Typography>
              </Link>
            </Box>
          ) : null}
          {isMobile || isTablet ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  {["Home", "What-We-Do", "How-It-Works", "About", "Our-Gallery", "Contact"].map(
                    (item) =>
                      item.replace(/-/g, " ") === "How It Works" ? (
                        <Button key={item}>
                          <ListItem
                            button
                            onMouseEnter={handleMenuOpen}
                            onMouseLeave={handleMenuClose}
                          >
                           How It Works
                            <ArrowDropDownIcon />
                          </ListItem>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <MenuItem
                              onClick={handleMenuClose}
                              style={{ borderBottom: "1px solid silver" }}
                            >
                              <Link
                                component={RouterLink}
                                to="/how-does-car-shipping-work"
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                How does Car Shipping Work
                              </Link>
                            </MenuItem>
                            <MenuItem
                              onClick={handleMenuClose}
                              style={{ borderBottom: "1px solid silver" }}
                            >
                              <Link
                                component={RouterLink}
                                to="/car-shipping-costs"
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                Car Shipping Costs
                              </Link>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              <Link
                                component={RouterLink}
                                to="/cross-country-car-shipping"
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                Cross Country Car Shipping
                              </Link>
                            </MenuItem>
                          </Menu>
                        </Button>
                      ) : (
                        <Link
                          to={
                            item.replace(/-/g, " ").toLowerCase() === "home"
                              ? "/"
                              : `/${item.toLowerCase()}`
                          }
                          key={item}
                          style={{
                            textDecoration: "none",
                          }}
                          component={RouterLink}
                        >
                          <ListItem button>
                            <ListItemText primary={item.replace(/-/g, " ")} />
                          </ListItem>
                        </Link>
                      )
                  )}
                </List>
              </Drawer>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#e01933",
                  color: "#fff",
                  borderRadius: 2,
                  mr: 3,
                  fontSize: 10,
                }}
                startIcon={<Phone />}
              >
                (000) 000-0000
              </Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              {menuItems}
            </Box>
          )}

          {/* Logo */}
          {!isMobile && !isTablet ? (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link component={RouterLink} to={'/'}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  <img src="/assets/logo_re.png" alt="Logo" width="100px" />
                </Typography>
              </Link>
            </Box>
          ) : null}

          {/* Right section with menu items and call button */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", lg: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {!isMobile && !isTablet ? (
              <>
                <Link
                  component={RouterLink}
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Button color="inherit">
                    About
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 10,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </Button>
                </Link>
                <Link
                  component={RouterLink}
                  to="/our-gallery"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Button color="inherit">
                    Our Gallery
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 10,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </Button>
                </Link>
                <Link
                  component={RouterLink}
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Button color="inherit">
                    Contact
                    <span
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: 10,
                        color: "#e01933",
                      }}
                    >
                      •
                    </span>
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#e01933",
                    color: "#fff",
                    marginLeft: 2,
                    borderRadius: 2,
                    "&:hover" : "none"
                  }}
                  startIcon={<Phone />}
                >
                  (000) 000-0000
                </Button>
              </>
            ) : null}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
