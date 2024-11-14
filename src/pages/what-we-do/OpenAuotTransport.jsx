import Nationwide from "../../components/what-we-do/Nationwide";
import LookingFor from "../../components/open-auot-transport/LookingFor";
import ClientsSay from "../../components/about/ClientsSay";
import OpenAuto from "../../components/what-we-do/OpenAuto";
import HowMuchDoes from "../../components/cross-country/HowMuchDoes";
import ShipYour from "../../components/what-we-do/ShipYour";
import WantToKnow from "../../components/what-we-do/WantToKnow ";
import HowGet from "../../components/cross-country/HowGet";
import WhatAreThe from "../../components/cross-country/WhatAreThe";
import HowMuch from "../../components/car-shipping-cost/HowMuch";
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import EnclosedAuto from "../../components/what-we-do/EnclosedAuto";
import {
  HowGetDataCard,
  wantToKnowData,
  whatAreTheSliderData,
} from "../../constans";

const OpenAuotTransport = () => {
  const text =
    "Your Trusted Partner for Reliable and Affordable Vehicle Shipping";

  return (
    <>
      <Nationwide text={text} />
      <LookingFor />
      <ClientsSay text={true} />
      <OpenAuto text={true} />
      <HowMuchDoes text={true} />
      <ShipYour text={true} />
      <WantToKnow {...wantToKnowData} />
      <HowGet data={HowGetDataCard} />
      <WhatAreThe
        data={whatAreTheSliderData}
        background={"https://uscargofreight.com/wp-content/uploads/2023/04/open-auto-transport-option.jpg"}
        title={"Why choose US Car-Go for  "}
        titleCustome={"Open Car Shipping?"}
      />
      <HowMuch text={true} />
      <EnclosedAuto text={true} />
      <OurAuto />
    </>
  );
};

export default OpenAuotTransport;
