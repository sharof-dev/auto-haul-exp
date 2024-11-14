import { Box, Container } from "@mui/material";
import { BodyText1, Heading, Section } from "../../pages/how-it-works/styles";
import { NavLink } from "react-router-dom";
import ServicesCard from "./cards/ServicesCard";

const servicesCardData = [
  {
    icon: "/assets/about/svg/goal.svg",
    title: "Our Goal",
    text: "Looking to move your prized vehicle across the country without any hassle or worry? .",
    hiddenText: `
US Car-Go Freight has got your back! With our cutting-edge AI-based software, tools, and platforms, we'll find you the perfect carriers to get your valuable asset to its destination safely and on time. Trust us to handle all your auto transport needs, whether you're transporting a single car or an entire fleet. We're committed to delivering unique and high-quality services that meet and exceed your expectations.`,
  },
  {
    icon: "/assets/about/svg/commitment.svg",
    bigIcon: true,
    title: "Our Commitment",
    text: `At US Car-Go Freight, we prioritize building a trustworthy relationship with our valued customers..`,
    hiddenText: `
Our commitment to providing a seamless and safe auto transport service has made us the go-to choice for many. Plus, with our reliable customer support team, you'll never be left in the dark. We're here to provide instant help and keep you informed every step of the way. Let us take care of your cargo auto transport needs today!

We don't just settle for finding you the perfect carrier. We go the extra mile to ensure that every step of the process is transparent and stress-free, leaving you completely satisfied with our services. Trust us to safely transport your vehicle to its destination, because with our help, you're always in the driver's seat. `,
  },
  {
    icon: "/assets/about/svg/chart.svg",
    title: "Our Success",
    text: `
						Look no further than US Car-Go Freight! Our cutting-edge technology and top-notch team.`,
    hiddenText: `
have propelled us to the top of the industry, and our clients agree among the pool of others.


With our exceptional track record and commitment to excellence, you can trust us to deliver your vehicle with care and efficiency. Let us show you why we're the best in the business.

When it comes to auto Shipping, we know that communication is key. We don't just transport your vehicle - we take you on the journey with us. By keeping you informed every step of the way, we've earned a reputation as the best in the business. Our commitment to treating customers with the utmost respect and care sets us apart from our competitors. With a friendly and knowledgeable team on hand, we're here to help make your auto car transport  experience as stress-free as possible. `,
  },
];

function Services() {
  return (
    <>
      <Section component={"section"} id={"services"}>
        <Container maxWidth="xl">
          <Box component={"div"}>
            <Box component={"div"} sx={{ marginBottom: "50px" }}>
              <Heading
                variant="h3"
                color={"#11172B"}
                sx={{ textAlign: "center" }}
              >
                Auto Transport Services{" "}
                <Box component={"span"} sx={{ color: "#E01933" }}>
                  Provider.
                </Box>
              </Heading>
              <BodyText1
                variant="body1"
                color={"#7A7A7A"}
                sx={{ textAlign: "center", marginTop: "10px" }}
              >
                Our{" "}
                <NavLink
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "#E01933",
                  }}
                >
                  <strong>auto transport services</strong>
                </NavLink>{" "}
                “US Car-Go Freight” ensure that your prized possession arrives
                safely and securely at its destination. With years of experience
                in the industry, we've built a solid reputation for matching our
                clients with the perfect carriers for their specific needs.
                Whether you're shipping across town or across the country, our
                expertise and commitment to quality will give you peace of mind
                every step of the way.
              </BodyText1>
            </Box>

            <Box
              component={"div"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                gap: "40px",
              }}
            >
              {servicesCardData.map((card, idx) => (
                <ServicesCard {...card} key={idx} />
              ))}
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Services;
