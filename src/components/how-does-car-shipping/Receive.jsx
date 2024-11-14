import { Section, Title3 } from "../../pages/how-it-works/styles";
import { Box, Container, Stack } from "@mui/material";
import CardMiniDrop from "../how-does-car-shipping/cards/CardMiniDrop";
import CardImg from "../how-does-car-shipping/cards/CardImg";
import ItemDrop from "../how-does-car-shipping/ItemDrop";

const itemStep3Data = [
  {
    title: "Can I know my car location during transit?",
    text: "If you’re curious about where your vehicle is during the shipping process, we’ve got you covered! You can keep tabs on it by giving us a call, sending us an email, or chatting with us live. We’ll be happy to give you updates whenever you’d like.",
  },
  {
    title: "How can I pay if I am not present at the delivery location?",
    text: "At checkout, you have a variety of payment methods to choose from including major credit cards, wire transfers, money orders, and cashier’s checks from banks. Plus, you can conveniently use CashApp, Zelle, or PayPal to pay for your purchase.",
  },
  {
    title: "What will happen if I notice any damages?",
    text: "Once we confirm the details, you’ll be able to head to a nearby auto shop to get an estimate for the damage. Simply file a claim with the insurance company and you should receive payment for the repairs in just a few weeks.",
  },
];

function Receive() {
  return (
    <>
      <Section component={"section"} id="receive">
        <Container maxWidth="xl" sx={{ overflow: "hidden" }}>
          <Box
            component={"ul"}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "column-reverse",
                lg: "row",
              },
            }}
          >
            <CardMiniDrop
              id={"#"}
              icon={"/assets/how-it-works/svg/check-icon.svg"}
              step={"Step 3"}
              title={
                <>
                  You Receive Your <br /> Vehicle.
                </>
              }
              bodyText={
                <>
                  The delivery company will be reaching out to you soon to let
                  you know that they're almost at your location with your <br />
                  vehicle.
                </>
              }
              hiddenText={
                <>
                  When they arrive, our team will carefully unload your car.
                  After that, it's all about you! Before you sign the Bill of
                  Lading, we recommend taking a quick look at your vehicle to
                  make sure everything looks good. Once you give us the okay,
                  your car is all yours to use whenever you want. So get excited
                  and get ready to hit the road!
                </>
              }
            />

            <CardImg mini={true} img={"/assets/how-it-works/receive.webp"} />
          </Box>

          <Box component={"div"} sx={{ marginTop: "70px" }}>
            <Title3
              variant="h3"
              textcolor={"#11172B"}
              sx={{ marginBottom: "20px" }}
            >
              FAQs
              <Box
                component="span"
                sx={{
                  color: "#E01933",
                }}
              >
                .
              </Box>
            </Title3>

            <Stack spacing={"15px"}>
              {itemStep3Data.map((item, idx) => (
                <ItemDrop {...item} key={idx} />
              ))}
            </Stack>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Receive;
