import { BodyText1, Section, Title2 } from "../../pages/how-it-works/styles";
import { Box, Container, Grid, Typography } from "@mui/material";
import HowGetCard from "./cards/HowGetCard";
import AOS from "aos";
import "aos/dist/aos.css";

const howGetCardData = [
  {
    icon: "/assets/how-it-works/svg/location.svg",
    title: "Pickup and Delivery Locations",
  },
  {
    icon: "/assets/how-it-works/svg/crash-car.svg",
    title: "Type of Vehicle and Its Dimensions",
  },
  {
    icon: "/assets/how-it-works/svg/norm-car.svg",
    title: "Method of Transportation Preferred",
  },
  {
    icon: "/assets/how-it-works/svg/date.svg",
    title: "Date of Transportation",
  },
];

function HowGet({ data }) {
  return (
    <>
      <Section component={"section"} id="how-get">
        <Container maxWidth="xl">
          <Box
            component={"div"}
            sx={{
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <Title2
              variant="h2"
              color={"#11172B"}
              // data-aos="fade-up"
            >
              {data
                ? "Factor Affects Car Shipping Cost"
                : " How to Get a Quote for"}{" "}
              {!data && <br />}
              <Box component="span" sx={{ color: "#E01933" }}>
                {data ? "." : " Shipping Car Across Country"}
              </Box>
            </Title2>
            <BodyText1
              variant="subtitle1"
              color={"#7A7A7A"}
              sx={{ marginTop: "10px" }}
            >
              {data ? (
                <>
                  US CAR-GO FREIGHT, understand that the cost and transit time
                  of an <b>open carrier car shipping</b> are influenced by
                  various factors. Here are some of the key factors that can
                  impact the cost and transit time of your shipment:
                </>
              ) : (
                <>
                  Getting an accurate{" "}
                  <Box
                    component={"a"}
                    href={"#"}
                    sx={{ textDecoration: "none", color: "#7A7A7A" }}
                  >
                    <strong>quote to ship</strong>
                  </Box>
                  , a car depends on the following information:
                </>
              )}
            </BodyText1>
          </Box>

          <Grid
            container
            justifyContent="center"
            columnSpacing={2}
            rowSpacing={1}
            sx={{ padding: "20px 0" }}
          >
            {data ? (
              <>
                {data?.map((card, idx) => (
                  <HowGetCard {...card} key={idx} data={data} />
                ))}
              </>
            ) : (
              <>
                {howGetCardData.map((card, idx) => (
                  <HowGetCard {...card} key={idx} />
                ))}
              </>
            )}
          </Grid>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                marginTop: "10px",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "center",
                color: "#7A7A7A",
              }}
            >
              {data
                ? "At US CAR-GO FREIGHT, we take all these factors into consideration when providing you with a quote for shipping your vehicle. Our team of experts will work with you to determine the most efficient and cost-effective shipping solution for your unique needs, ensuring that your vehicle arrives safely and on time."
                : `  A price from the shipping business will be based on the details
              you supply. It is smart to inquire about any extra expenses that
              may be incurred, such those for insurance or rush delivery.`}
            </Typography>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default HowGet;
