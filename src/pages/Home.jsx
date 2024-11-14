import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import MainSection from "../components/home/MainSection";
import TextBox from "../components/home/TextBox";
import TransportCard from "../components/home/TransportCard";
import ClientsSaySlider from "../components/enclosed-auto-transport/ClientsSaySlider";
import OurServices from "../components/home/OurServices";
import UseDifferent from "../components/home/UseDifferent";
import MiniCard from "../components/home/MiniCard";
import LatestNews from "../components/home/LatestNews";
import WhatAreThe from "../components/cross-country/WhatAreThe";
import ShippingSteps from "../components/home/ShippingSets";
import { Box } from "@mui/material";

const steps = [
  {
    title: "Request a quote.",
    description: "",
    image:
      "https://uscargofreight.com/wp-content/uploads/2023/09/Get-a-Quote-and-Book-Your-Order-Img.png.webp",
  },
  {
    title: "We will arrange the pickup of your vehicle.",
    description: "",
    image:
      "https://uscargofreight.com/wp-content/uploads/2023/09/We-Pick-Up-Your-Vehicle-Img.png.webp",
  },
  {
    title: "Receive your vehicle at the designated location.",
    description: "",
    image:
      "https://uscargofreight.com/wp-content/uploads/2023/09/You-Receive-Your-Vehicle-Img.png.webp",
  },
];

const title = `How To Ship in`;
const titleMark = `3 easy steps`;

const shippingBox = {
  backgroundColor: "white",
  textAlign: "center",
  width: "90%",
  padding: "20px 20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  borderRadius: "20px",
  marginLeft: 4,
};

const cardBg = `https://uscargofreight.com/wp-content/uploads/2023/03/About-US-Car-Go-Freight-Bg.jpg`;

const sliderDataClients = {
  background:
    "https://uscargofreight.com/wp-content/uploads/2023/03/Auto-Transportation-Provider-Home-Bg.jpg",
  backgroundColor: false,
  title: (
    <>
      What Our{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Clients Say!!​
      </Box>
    </>
  ),
  subTitle:
    "US Car-Go freight is a trusted industry leader in US car and vehicle shipping, providing reliable and exceptional transportation services  to satisfied clients nationwide. With an outstanding customer satisfaction rating of 97%, we are the go-to choice for most affordable, efficient and safest vehicle transportation.",
  slidesPerView: 3,
  sliderData: [
    {
      id: 0,
      userName: "David Brown",
      description:
        "I was worried about finding the Best auto shipping company to transport my car from Abilene, TX to Petersburg, VA, But Uscargofreight proved me wrong. They were responsive and provided a quick and affordable Estimate. the driver was punctual and their tools were impressive. My car arrived safely and on time. highly recommended to all, who are looking for the best car shipping company.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 1,
      userName: "James Anthony",
      description:
        "Great service. Did everything from my cellphone and email. Staff texted and called as needed. Drivers stayed in touch. Had the whole job completed in about 5 days. Very professional. Car arrived on time and in great shape. Reasonable shipping cost. Would definitely recommend and use again.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 2,
      userName: "JContu",
      description:
        "OUTSTANDING!! Never having contracted to move a vehicle, I had no idea what to expect. But I did my “due diligence “ and read reviews and took note that the company representative also read the reviews…and responded. That is as rare as a unicorn and justified my decision to work with Us Cargo.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 3,
      userName: "Tan Group ",
      description:
        "This is my first time ever relying on a vehicle transport company, Us Cargo has a great experience. Mark's coordination with customer service and human touch was excellent, 10/10 recommendations.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 4,
      userName: "MB Badamsuren",
      description:
        "Very smooth and easy process. Had my car shipped from Texas to Hawaii and it arrived within like 2 weeks!! Didn't experience any issues and my car arrived safely with no damages whatsoever. Highly recommend. professional broker.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 5,
      userName: "Jeffrey",
      description:
        "Everything goes according to plan. we were notified about an hour before our car was delivered to our exact address. The driver pulled right up our street and was prompt, despite the unpredictable Midwest winter weather. My kids were so excited to see the car arrive! The driver and his dispatcher who notified us were very professional and friendly. Would definitely use again.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 6,
      userName: "Butch cutshaw",
      description:
        "my experience with Jason at US car-go transportation was very pleasant and very easy. everything was done as requested with no problem. My car was actually delivered a day before the delivery date.  I am very satisfied with us cargo and Jason and the young man who delivered my car was very professional and very pleasant and on time. Thank you Derrick.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 7,
      userName: "Emilzapata ",
      description:
        "Good service got my motorcycle within three days of booking driver great communication with driver constantly texting and call me about his location would recommend this company to other.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 8,
      userName: "Rohan sharma",
      description:
        "thanks US cargo for shipping my vehicle on last moment last company made false promises, I was worried to use another but my friend suggested me to go with Us Cargo as she shipped her Rv with them. Highly recommended.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 9,
      userName: "Latondra Brown",
      description:
        "Outstanding service. Very easy to ship and have the vehicle delivered. Rafael was amazing Driver, very professional. You will not be disappointed using Us Cargo Freight. As I shipped my first car with them but my experience is quite good and agent is very polite and explained the situtation , As I changed date for 2 times thaT raised a price a bit, but still affordable.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 10,
      userName: "Taylor Wilkins",
      description:
        "Communication, timeliness and reliability-all on point. If I ever need to ship my car again, I would hands down choose them. The price was correct and all of my questions were answered promptly. The driver kept in great communication with me and my car arrived in the same condition as it was picked up in. Wonderful service! Highly recommend!",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 11,
      userName: "Kiho ",
      description:
        "I was extremely pleased with you company. The transport driver was extremely efficient and professional took photos of the whole car and even had to call my next-door neighbor in Florida and show her the entire car and drop off the keys.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 12,
      userName: "Leyton burgos",
      description:
        "Is a very caring company and is reliable. US Cargo Freight helped me get the best prices during Christmas in a storm which is tough. He got the job done tho.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 13,
      userName: "DeAngelo Samuel",
      description:
        "i was happy with the fact that they worked with me on delivery time and car was unharmed and i would recommend !! i was called by the driver many times and updated on here he was and how far away he would be which helped make this so much easier for me.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 14,
      userName: "Giorgi Gogolashvili",
      description:
        "My family relocated from Minneapolis to Houston and we received our three vehicles and motorcycle earlier than anticipated. They really provided excellent customer service throughout the entire process. Would definitely use again in the future if we happen to move again. Overall great experience with quality service.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 15,
      userName: "Jose Magos",
      description:
        "I shipped my 6 vehicles with US Cargo they help me alot with my 3 vehicles for the first and then again they ship my another 2 cars and 1 pickup truck. They never change my price and never ask for more money, they take reasonable price.. I have more cars to transport and I would like to work with them only for the future tho.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 16,
      userName: "Judith Lopez maldonado",
      description:
        "They delivered our car in less than 4 days and price was quite reasonable. I learned about the company on Transport Reviews as well and I was very pleased to go with them. I shipped my classic car and they found a carrier who was professional, on time and took excellent care of my car while in transit. Good job guys! Thank you!",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 17,
      userName: "Dennis Kraft",
      description:
        "Us Cargo helps me alot to in shipping, It was my right decision to choose this come become none of the other company was able to move my vehicle for week, only chris and US Cargo was there for my help, I'm really thankful to them.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 18,
      userName: "Molly Adams",
      description:
        "This car transport company is very good. I use them and they were on-time. Their prices are very reasonable and they get the job done if I could’ve given them more than five stars I would’ve I would’ve given them 10, so God bless Max. He is a really great guy and I am very happy and very satisfied with the service that I received. They delivered my car perfectly. Thank you so much, Molly.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 19,
      userName: "Don Young",
      description:
        "I highly recommend US CARGO and special thanks to Brian Jones for helping me in my shipment process. I shipped my car on urgent basis helped me in getting the driver and explained every step properly. Thanks Brian and Us Cargo!",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 20,
      userName: "Tiko lomtatidze",
      description:
        "1st time user. Handled my vintage Corvette excellently. Great service. Cibsrant contact. Right on time,  as predicted. Definitely will use Us Cargo again.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 21,
      userName: "Henry Armaah",
      description:
        "I have used US cargo for first time to ship my vehicles, they are proactive in giving the services and drivers in the scheduled timings. I have shipped 5 vehicles and it has been so easy and hasle free.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      id: 22,
      userName: "Daniel Doronceanu",
      description:
        "Everything went great, the communication was excellent and my car showed up in perfect condition. I recommend anyone shipping there vehicles anywhere to contact them first. Enclosed shipped my Lamborghini Gallardo from PA to NV.",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      id: 23,
      userName: "Melanie Dominguez",
      description:
        "Lowest price! Fast! Reliable! I had to ship my car from Georgia to Texas and comparing prices they were the lowest out there, they were very attentive and fast!",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
  ],
};

const whyChooseData = [
  {
    img: "/assets/home_img/1.webp",
    title: "Driving You Crazy? Sit Back and Relax",
    text: "As a highly-rated auto transport company, you can trust us to seamlessly transport your car from one location to another without you having to worry. By opting for door-to-door service, you allow our experts to handle every aspect of the process, guaranteeing a smooth journey without any hiccups along the way.",
  },
  {
    img: "/assets/home_img/2.jpg",
    title: "Relocation Refined",
    text: "Why should you choose our vehicle shipping company? US Car-Go Freight Logistics works closely with you throughout your car or truck’s relocation. Experience hassle-free shipping when you select us as your car transporter and enjoy a simple and effortless transit process.",
  },
  {
    img: "/assets/home_img/3.webp",
    title: "Advisors Extraordinaire",
    text: "Our team of professional auto transport Service advisors is dedicated to ensuring that you work with the best vehicle transportation company. They diligently monitor your transport around the clock, providing you with peace of mind.",
  },
  {
    img: "/assets/home_img/4.webp",
    title: "The best in the business",
    text: "Wondering why customers consider US Car-Go Freight Logistics LLC the best company for shipping a car? Take a look at our online reviews to see why we are widely recognized as one of the top car moving companies and car hauling companies in the industry.",
  },
  {
    img: "/assets/home_img/5.webp",
    title: "Insurance coverage",
    text: "When you receive a shipping quote from car transport companies, insurance coverage is included. Our carefully selected auto haulers meet strict insurance standards and guarantee delivery of your vehicle in pristine condition.",
  },
  {
    img: "/assets/home_img/6.webp",
    title: "15K+ auto carriers",
    text: "Our Cargo auto transport company boasts an extensive network of over 15,000 vetted auto shipping experts who are part of our auto hauler network. These trusted industry professionals will treat your car with the utmost care and respect, just as if it were their own.",
  },
  {
    img: "/assets/home_img/7.webp",
    title: "Extended hours",
    text: "We’re not your typical 9-to-5 auto transport services. We’re available throughout the year and work extended hours to address all your vehicle transportation inquiries. Whether you have questions or want to know what sets us apart as the best among car moving companies, we’re here to assist you.",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>Auto haul express LLC</title>
        <meta
          name="description"
          content="We offer a range of options to meet your specific needs, including open auto transport, enclosed car shipping, and more. Reach out to us for a quote!"
        />
        <meta
          name="keywords"
          content="logistic, cargo, machine, deliver, delivery service"
        />
        <meta
          property="og:title"
          content="A1 Auto Shipping Services | Top Car Shipping Company"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <MainSection />
      <TextBox />
      <ShippingSteps
        title={title}
        titleMark={titleMark}
        data={steps}
        cardStyle={shippingBox}
        cardBg={cardBg}
      />
      <TransportCard />
      <ClientsSaySlider {...sliderDataClients} />
      <WhatAreThe
        data={whyChooseData}
        title={`Why choose`}
        titleCustome={`US Car-Go.`}
      />
      <OurServices />
      <UseDifferent />
      <MiniCard />
      <LatestNews />
    </>
  );
};

export default Home;
