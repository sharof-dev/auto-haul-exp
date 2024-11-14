import AboutForm from "../components/about/AboutForm";
import Info from "../components/about/Info";
import CarGo from "../components/about/CarGo";
import ClientsSay from "../components/about/ClientsSay";
import Dynamic from "../components/about/Dynamic";
import Integrity from "../components/about/Integrity";
import Logistics from "../components/about/Logistics";
import Services from "../components/about/Services";
import Statistics from "../components/about/Statistics";
import Teamwork from "../components/about/Teamwork";
import TrustedBy from "../components/about/TrustedBy";

const About = () => {
  return (
    <>
      <AboutForm />
      <Info />
      <Logistics />
      <ClientsSay />
      <Services />
      <CarGo />
      <Teamwork />
      <Integrity />
      <Dynamic />
      <Statistics />
      <TrustedBy />
    </>
  );
};

export default About;
