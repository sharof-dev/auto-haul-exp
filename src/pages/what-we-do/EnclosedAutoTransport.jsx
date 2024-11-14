import TransportServices from "../../components/enclosed-auto-transport/TransportServices";
import FullyLicensed from "../../components/enclosed-auto-transport/FullyLicensed";
import ClientsSaySlider from "../../components/enclosed-auto-transport/ClientsSaySlider";
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import FAQs from "../../components/enclosed-auto-transport/FAQs";
import GetQuote from "../../components/enclosed-auto-transport/GetQuote";

import {
  fullyLicensedCards,
  enclosedClientsSaySliderData,
  fullyLicensedCards2,
  faqs,
  getQuoteData,
} from "../../constans";

const EnclosedAutoTransport = () => {
  return (
    <>
      <TransportServices />
      <FullyLicensed {...fullyLicensedCards} />
      <ClientsSaySlider {...enclosedClientsSaySliderData} />
      <FullyLicensed {...fullyLicensedCards2} />
      <FAQs {...faqs} />
      <GetQuote {...getQuoteData} />
      <OurAuto />
    </>
  );
};

export default EnclosedAutoTransport;
