import TransportServices from "../../components/enclosed-auto-transport/TransportServices";
import FullyLicensed from "../../components/enclosed-auto-transport/FullyLicensed";
import ClientsSaySlider from "../../components/enclosed-auto-transport/ClientsSaySlider";
import GetQuote from "../../components/enclosed-auto-transport/GetQuote";
import WhyChoose from "../../components/door-to-door/WhyChoose";
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import {
  fullyLicensedCards10,
  transportServicesData1,
  clientsSaySliderData,
  fullyLicensedCards11,
  fullyLicensedCards12,
  fullyLicensedCards13,
  getQuoteData1,
  heavyShippingSliderData,
} from "../../constans";

const HeavyShipping = () => {
  return (
    <>
      <TransportServices {...transportServicesData1} />
      <FullyLicensed {...fullyLicensedCards10} />
      <ClientsSaySlider {...clientsSaySliderData} />
      <FullyLicensed {...fullyLicensedCards11} />
      <FullyLicensed {...fullyLicensedCards12} />
      <FullyLicensed {...fullyLicensedCards13} />
      <GetQuote {...getQuoteData1} />
      <WhyChoose
        sliderData={heavyShippingSliderData}
        title={"Why Rely on "}
        background={"/assets/heavy-shipping/why_choose_background.jpg"}
      />
      <OurAuto />
    </>
  );
};

export default HeavyShipping;
