import React from "react";
import {
  BannerColor,
  BannerImage,
  Section,
  Title3,
} from "../../pages/how-it-works/styles";
import { Box, Container, Stack } from "@mui/material";
import CardMiniDrop from "../how-does-car-shipping/cards/CardMiniDrop";
import CardImg from "../how-does-car-shipping/cards/CardImg";
import ItemDrop from "../how-does-car-shipping/ItemDrop";

const itemStep2Data = [
  {
    title: "How do I prepare my vehicle for transport?",
    text: "If you’re planning to move your car from one place to another, it’s a smart move to give it a good cleaning beforehand. This will help you see if there are any existing damages, so you can make sure you don’t get charged for them later. When it comes to shipping your car, it’s best to remove any valuable items or things you don’t need during the trip. This can help prevent them from getting lost or damaged, which could end up costing you a lot of money. Before you hand over your car to the driver, there are a few things to check. Make sure all the windows and vents are closed, and turn off any alarms or electronic passes. This way, you can have peace of mind knowing your car is ready to hit the road.",
  },
  {
    title: "Can I change my pickup and delivery date?",
    text: "We totally get it, sometimes things come up and plans change. If you need to reschedule your first pick-up and delivery date, no problem! You can let us know by sending us an email or giving us a call, either before or after you make your booking. We’re here to help and want to make sure you have a smooth experience with us.",
  },
  {
    title: "Is Bill of Lading and importance document? ",
    text: "A Bill of Lading is a critical document that verifies the shipper has paid for the shipment, the carrier has accepted the items for transport, and the shipper is the owner of the goods being transported. The document is issued and given to the shipper by the carrier or its agent. The conditions of transportation are laid out in great detail. The following are a few of the most important reasons why the Bill of Lading is so crucial:",
    list: [
      {
        name: "Evidence of ownership:",
        listText:
          " The Bill of Lading serves as a legal contract between the shipper and the recipient, detailing the quantity and type of vehicles being shipped. It’s also something you can use to prove ownership.",
      },
      {
        name: "Proof of contract:",
        listText:
          " It serves as evidence that the shipper and the carrier have reached an agreement on the shipment’s terms, including the freight rate, the terms of payment, and each party’s responsibilities.",
      },
      {
        name: "Legal protection:",
        listText:
          " In the event of a loss or disagreement during transport, the shipper and the carrier. Additionally, it can be used as legal evidence if presented as such.",
      },
    ],
  },
  {
    title: "Must I be present at the pick-up location?",
    text: "When you order a pickup, it’s important to have someone there with the keys. But we know life can get busy, so if nobody’s available, you can hide the keys in a secret spot and let the driver know where to find them. Don’t worry, your chat with the driver will be kept confidential.",
  },
];

function WePick() {
  return (
    <>
      <Section component={"section"} id="we-pick">
        <BannerImage
          image={"/assets/how-it-works/we_pick.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl"  sx={{ overflow: "hidden" }}>
          <Box
            component={"ul"}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "column-reverse",
                lg: "row-reverse",
              },
            }}
          >
            <CardMiniDrop
              id={"#"}
              reverse={true}
              icon={"/assets/how-it-works/svg/truck-icon.svg"}
              step={"Step 2"}
              title={`We Pick Up Your Vehicle.`}
              bodyText={`
						Our team is ready to make your vehicle pickup easy and hassle-free. Once you've scheduled your pickup, our allocated carrier will reach out to you to arrange a convenient time, date, and location.`}
              hiddenText={`
              We know that waiting around for a pickup can be frustrating, so our carrier will give you a heads up a few hours before they arrive. When they roll up, we'll take a good look at your vehicle and make notes on any issues we spot. Don't worry, we'll get your approval before we move forward and provide you with a copy of the Bill of Lading for your records. We understand that you'll want to keep tabs on your vehicle, which is why we'll keep you updated frequently as it travels to its destination. You can trust that your vehicle is in good hands with us.
            `}
            />
            <CardImg
              reverse={true}
              mini={true}
              img={"/assets/how-it-works/we_pick.jpg"}
            />
          </Box>

          <Box component={"div"} sx={{ marginTop: "70px" }}>
            <Title3 variant="h3" sx={{ marginBottom: "20px" }}>
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
              {itemStep2Data.map((item, idx) => (
                <ItemDrop {...item} dark={true} key={idx} />
              ))}
            </Stack>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default WePick;
