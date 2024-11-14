import TransportServices from "../../components/enclosed-auto-transport/TransportServices";
import OurServiceProgress from "../../components/what-we-do/OurServiceProgress";
import ClientsSaySlider from "../../components/enclosed-auto-transport/ClientsSaySlider";
import FullyLicensed from "../../components/enclosed-auto-transport/FullyLicensed";
import UseDifferent from "../../components/home/UseDifferent";
import GetQuote from "../../components/enclosed-auto-transport/GetQuote";
import WhyChoose from "../../components/door-to-door/WhyChoose";
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import {
  transportServicesData2,
  motorcycleShippingSliderData,
  clientsSaySliderData1,
  fullyLicensedCards14,
  useDifferentData,
  getQuoteData4,
  motorcycleShippingRightSliderData,
} from "../../constans";

function MotorcycleShipping() {
  return (
    <>
      <TransportServices {...transportServicesData2} />
      <OurServiceProgress
        data={motorcycleShippingSliderData}
        text={true}
        title={"How to Ship a Motorcycle"}
        titleColor={true}
      />
      <ClientsSaySlider {...clientsSaySliderData1} />
      <FullyLicensed {...fullyLicensedCards14} />
      <UseDifferent
        {...useDifferentData}
        background={"/assets/motorcycle-shipping/use_different_background.jpg"}
      />
      <GetQuote {...getQuoteData4} />
      <WhyChoose
        sliderData={motorcycleShippingRightSliderData}
        background={"/assets/expedited-car/why_choose_background.jpg"}
      />
      <OurAuto />
    </>
  );
}

export default MotorcycleShipping;
