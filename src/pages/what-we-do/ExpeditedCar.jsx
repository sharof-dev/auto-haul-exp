import GetQuote from "../../components/enclosed-auto-transport/GetQuote";
import FullyLicensed from "../../components/enclosed-auto-transport/FullyLicensed";
import ClientsSaySlider from "../../components/enclosed-auto-transport/ClientsSaySlider";
import WantToKnow from "../../components/what-we-do/WantToKnow ";
import WhyChoose from "../../components/door-to-door/WhyChoose";
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import {
  getQuoteData3,
  fullyLicensedCards6,
  clientsSaySliderData3,
  fullyLicensedCards7,
  fullyLicensedCards8,
  fullyLicensedCards9,
  wantToKnowData1,
  expeditedCarSliderData,
} from "../../constans";

const ExpeditedCar = () => {
  return (
    <>
      <GetQuote {...getQuoteData3} />
      <FullyLicensed {...fullyLicensedCards6} />
      <ClientsSaySlider {...clientsSaySliderData3} />
      <FullyLicensed {...fullyLicensedCards7} />
      <FullyLicensed {...fullyLicensedCards8} />
      <FullyLicensed {...fullyLicensedCards9} />
      <WantToKnow {...wantToKnowData1} />
      <WhyChoose
        sliderData={expeditedCarSliderData}
        background={"/assets/expedited-car/why_choose_background.jpg"}
      />
      <OurAuto />
    </>
  );
};

export default ExpeditedCar;
