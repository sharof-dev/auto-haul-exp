import TransportServices from "../../components/enclosed-auto-transport/TransportServices";
import FullyLicensed from "../../components/enclosed-auto-transport/FullyLicensed";
import ClientsSaySlider from "../../components/enclosed-auto-transport/ClientsSaySlider";
import { Box } from "@mui/material";
import WhyChoose from "../../components/door-to-door/WhyChoose";
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import GetQuote from "../../components/enclosed-auto-transport/GetQuote";

import {
  transportServicesData,
  fullyLicensedCards3,
  fullyLicensedCards4,
  fullyLicensedCards5,
  clientsSaySliderData2,
  doorToDoorSliderData,
  getQuoteData2,
} from "../../constans";

const DoorToDoor = () => {
  return (
    <>
      <TransportServices {...transportServicesData} />
      <FullyLicensed {...fullyLicensedCards3} />
      <FullyLicensed {...fullyLicensedCards4} />
      <FullyLicensed {...fullyLicensedCards5} />
      <ClientsSaySlider {...clientsSaySliderData2} />
      <WhyChoose sliderData={doorToDoorSliderData} />
      <GetQuote {...getQuoteData2} />
      <OurAuto />
    </>
  );
};

export default DoorToDoor;
