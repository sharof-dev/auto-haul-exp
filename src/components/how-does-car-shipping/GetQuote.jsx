import { Section, Title3 } from "../../pages/how-it-works/styles";
import { Box, Container, Stack } from "@mui/material";
import CardImg from "../how-does-car-shipping/cards/CardImg";
import CardMiniDrop from "../how-does-car-shipping/cards/CardMiniDrop";
import ItemDrop from "./ItemDrop";

const itemStep1Data = [
  {
    title: "How long is the quote valid?",
    text: "When you reach out to us, we give you a price quote that’s good for a whole week! You don’t have to rush to make a decision, and if anything changes or you want to tweak the details, just let us know and we’ll update the quote for you. We want to make sure you’re completely satisfied with your order.",
  },
  {
    title: "Do you provide insurance coverage for my car?",
    text: "When you’re shipping your vehicles, it’s important to make sure they’re protected. That’s where the shipping company’s cargo insurance comes in – it’ll take care of any damages that may occur during shipment. But if you’re exporting to places like Hawaii and Alaska, there are some important things to keep in mind. These areas may have certain restrictions when it comes to shipping vehicles, so it’s good to be aware of them beforehand.",
  },
  {
    title: "How do I pay for the service?",
    text: "Before we can get your items ready for shipping, we just need a small down payment. But no need to worry, you can pay the remaining balance in cash or any other accepted form of payment when our amazing crew brings your precious cargo to you.",
  },
  {
    title: "Do you provide discounts for your customers?",
    text: "We provide our consumers with some fantastic deals, but the specifics are subject to variables like service kind, location, and length of session. Feel free to contact us and we’ll see if we can help.",
  },
  {
    title: "Can you ship a car that is not running?",
    text: "Ready to rock with us? We’ve got you covered for transporting both working and non-working vehicles. But there’s a catch – transporting non-working vehicles will cost you a little extra. Just a heads up!",
  },
];

function GetQuote() {
  return (
    <>
      <Section component={"section"} id="get-quote">
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
              icon={"/assets/how-it-works/svg/document-icon.svg"}
              step={"Step 1"}
              title={`Get a Quote and Book Your Order.`}
              bodyText={`
						Ready to hit the road? Before you do, make sure your car is all set to go with a great quote. With just a click of a button, you can get an estimate that's tailored to your needs and budget.`}
              hiddenText={`
              All you need to do is fill out some info, like where you want your car picked up and delivered, what kind of car you have, and when you need it shipped. We'll even include taxes, fees, and insurance in the quote, so you don't have to worry about any surprises. If you like what you see, you can easily book online or give our auto shipping pros a call. So what are you waiting for? Let's hit the road and get you where you need to go!
            `}
            />
            <CardImg mini={true} img={"/assets/how-it-works/get_quote.webp"} />
          </Box>

          <Box component={"div"} sx={{ marginTop: "70px" }}>
            <Title3
              variant="h3"
              textcolor="#11172B"
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
              {itemStep1Data.map((item, idx) => (
                <ItemDrop {...item} key={idx} />
              ))}
            </Stack>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default GetQuote;
