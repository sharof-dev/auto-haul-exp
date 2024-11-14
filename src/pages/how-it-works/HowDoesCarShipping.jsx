import CarShipping from "../../components/how-does-car-shipping/CarShipping";
import ProcessOf from "../../components/how-does-car-shipping/ProcessOf";
import HowToShip from "../../components/how-does-car-shipping/HowToShip";
import GetQuote from "../../components/how-does-car-shipping/GetQuote";
import WePick from "../../components/how-does-car-shipping/WePick";
import Receive from "../../components/how-does-car-shipping/Receive";
import WantTo from "../../components/how-does-car-shipping/WantTo";
import AOS from "aos";
import "aos/dist/aos.css";

const HowDoesCarShipping = () => {
  return (
    <>
      <CarShipping />
      <ProcessOf />
      <HowToShip />
      <GetQuote />
      <WePick />
      <Receive />
      <WantTo />
    </>
  );
};

export default HowDoesCarShipping;
