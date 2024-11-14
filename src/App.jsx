import { Routes, Route, useParams } from "react-router-dom";
import { Header, Footer, Navbar } from "./components/";
import {
  Home,
  About,
  Contact,
  WhatWeDo,
  TermsOfUse,
  FAQs,
  Privacypolicy,
  AtvRtvShipping,
  BoatOrYacht,
  BusinessServices,
  CarCollector,
  ClassicCar,
  DoorToDoor,
  EnclosedAutoTransport,
  ExpeditedCar,
  HeavyShipping,
  InoperableVehicles,
  MilitaryCar,
  MotorCycle,
  OnlinePurches,
  OpenAuotTransport,
  SnowBirds,
  StudentAuto,
  Blog,
  BlogPost,
  MotorcycleShipping,
  GetQuote,
  OurGallery,
} from "./pages/";

import CarShippingCost from "./pages/how-it-works/CarShippingCost";
import CrosCountry from "./pages/how-it-works/CrosCountry";
import HowDoesCarShipping from "./pages/how-it-works/HowDoesCarShipping";
import BlogRout from "./layout/BlogRout";

import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ScrollToTop
        smooth
        style={{ bottom: 200, right: 15, fontSize: "18px" }}
        width="20"
        height="20"
        color="#E01933"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-gallery" element={<OurGallery />} />
        <Route path="/get-a-quote" element={<GetQuote />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/terms-of-use?" element={<TermsOfUse />} />
        <Route path="/faq?" element={<FAQs />} />
        <Route path="/privacy-policy?" element={<Privacypolicy />} />
        <Route path="/atv-rtv-shipping" element={<AtvRtvShipping />} />
        <Route path="/boat-or-yacht" element={<BoatOrYacht />} />
        <Route path="/business-services" element={<BusinessServices />} />
        <Route path="/car-collector" element={<CarCollector />} />
        <Route path="/classic-car" element={<ClassicCar />} />
        <Route path="/door-to-door" element={<DoorToDoor />} />
        <Route
          path="/enclosed-auto-transport"
          element={<EnclosedAutoTransport />}
        />
        <Route path="/motorcycle-shipping" element={<MotorcycleShipping />} />
        <Route path="/expedited-car" element={<ExpeditedCar />} />
        <Route path="/heavy-shipping" element={<HeavyShipping />} />
        <Route path="/innoperable-vehicles" element={<InoperableVehicles />} />
        <Route path="/military-car" element={<MilitaryCar />} />
        <Route path="/motor-cycle" element={<MotorCycle />} />
        <Route path="/online-purches" element={<OnlinePurches />} />
        <Route path="/open-auto-transport" element={<OpenAuotTransport />} />
        <Route path="/snow-birds" element={<SnowBirds />} />
        <Route path="/student-auto" element={<StudentAuto />} />
        <Route
          path="/how-does-car-shipping-work"
          element={<HowDoesCarShipping />}
        />
        <Route path="/car-shipping-costs" element={<CarShippingCost />} />
        <Route path="/cross-country-car-shipping" element={<CrosCountry />} />
        {/* BLOG page */}
        <Route path="/blog" element={<BlogRout />}>
          <Route index element={<Blog />} />
          <Route path=":name" element={<BlogPost />} />
        </Route>
        <Route path="/get-quote/:id" element={<GetQuote />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
