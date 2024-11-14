import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import TuneIcon from "@mui/icons-material/Tune";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MapIcon from "@mui/icons-material/Map";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EngineeringIcon from "@mui/icons-material/Engineering";

const blogPostData = [
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/shutterstock_1727124235-1300x650.jpg.webp",
      title: "Auto Shipment Brokers vs Carriers",
      date: "August 9, 2024",
      text: "Auto Shipment Brokers vs Carriers Auto Shipment Brokers vs Carriers: What’s the Difference? Are you confused when you come across words like brokers and...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Louisiana-Car-Transport-US-CarGo-Freight-1300x650.jpg.webp",
      title: "Louisiana Car Transport",
      date: "July 31, 2024",
      text: "Louisiana Car Transport Louisiana Car Transport: A Comprehensive Guide by US Car-Go Freight When it comes to transporting vehicles in Louisiana, US Car-Go Freight...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/how-to-start-car-hauling-business-img-1300x650.jpg.webp",
      title: "How to Start a Car Hauling Business",
      date: "July 26, 2024",
      text: "How to Start a Car Hauling Business Starting a car hauling business Car hauling business can be a lucrative venture for entrepreneurs interested in...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Rhode-Island-Car-Transport-US-CarGo-Freight-1300x650.jpg.webp",
      title: "Rhode Island Car Transport",
      date: "July 25, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Delaware-Car-Transport-US-CarGo-Freight-1300x650.jpg.webp",
      title: "Delaware Car Transport",
      date: "July 22, 2024",
      text: "Delaware Car Transport US Car-Go Freight: Your Trusted Partner for Reliable And Secure Delaware Car Transport Relocating for work, buying a car out of...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Vermont-Car-Shipping-US-CarGo-Freight-1300x650.jpg.webp",
      title: "Vermont Car Transport",
      date: "July 19, 2024",
      text: "Vermont Car Transport US Car-Go Freight: Your Top Choice for Vermont Car Transport Are you looking to ship your car to or from the...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/New-Jersey-Car-Shipping-US-CarGo-Freight-1300x650.jpg.webp",
      title: "New Jersey Car Transport",
      date: "July 12, 2024",
      text: "New Jersey Car Transport Ship Your Car Safely to New Jersey with US Car-Go Freight Looking for hassle-free car shipping to New Jersey? Look...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Maryland-Car-Transport-US-CarGo-Freight-1300x650.jpg.webp",
      title: "Maryland Car Transport",
      date: "July 11, 2024",
      text: "Maryland Car Transport US Car-Go Freight: The Number One District of Columbia Car Transport Company Maryland is a state in the Mid-Atlantic region of...",
    },
  ],
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/District-of-Columbia-Car-Transport-US-CarGo-Freight-1300x650.jpg.webp",
      title: "District of Columbia Car Transport",
      date: "July 9, 2024",
      text: "District of Columbia Car Transport US Car-Go Freight: The Number One District of Columbia Car Transport Company Transport your car safely to or from...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Price-Difference-Small-vs-Large-Vehicle-Shipping-Imgs-1300x650.jpg",
      title: "Small vs Large Vehicle Shipping Price Difference",
      date: "July 3, 2024",
      text: "Small vs Large Vehicle Shipping Price Difference The Price Difference When Shipping a Small Vehicle and a Large Vehicle When it comes to shipping...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Minnesota-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Minnesota Car Transport",
      date: "July 2, 2024",
      text: "Minnesota Car Transport Smooth and Reliable Minnesota Car Transport with US Car-Go Freight Minnesota, known as the Land of 10,000 Lakes, offers a stunning...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/06/Blog-Atv-2-1300x650.jpg",
      title: "Flatbed Auto Transport",
      date: "June 25, 2024",
      text: "Flatbed Auto Transport A Deep Dive into Flatbed Auto Transport If you are moving to a new home or starting a new job, you...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/06/Missouri-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Missouri Car Transport",
      date: "June 25, 2024",
      text: "Missouri Car Transport Discover Seamless Missouri Car Transport with US Car-Go Freight When it comes to transporting your vehicle, the task can seem daunting....",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/06/Kansas-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Kansas Car Transport",
      date: "June 20, 2024",
      text: "Kansas Car Transport Seamless Kansas Car Transport with US Car-Go Freight Kansas, often referred to as the Sunflower State, is renowned for its rolling...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/06/Nebraska-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Nebraska Car Transport",
      date: "June 12, 2024",
      text: "Nebraska Car Transport Comprehensive Guide to Nebraska Car Transport with US Car-Go Freight Transporting your vehicle, whether for a move, a purchase, or other...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/06/Oklahoma-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Oklahoma Car Transport",
      date: "June 7, 2024",
      text: "Oklahoma Car Transport Seamless Oklahoma Car Transport with US Car-Go Freight Oklahoma, known as the Sooner State, is a vibrant blend of rich history,...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/06/New-Mexico-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "New Mexico Car Transport",
      date: "June 6, 2024",
      text: "New Mexico Car Transport Reliable New Mexico Car Transport with US Car-Go Freight New Mexico, known as the Land of Enchantment, is a state...",
    },
  ],
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/05/Wyoming-car-transport-US-CarGo-Freight-1300x650.jpg",
      title: "Wyoming Car Transport",
      date: "May 28, 2024",
      text: "Wyoming Car Transport Conquering the Cowboy State with US Car-Go Freight : A Guide to Wyoming Car Transport in 2024 Wyoming, the “Equality State,”...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/05/Utah-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Utah Car Transport",
      date: "May 24, 2024",
      text: "Utah Car Transport Calling All Adventurers! US Car-Go Freight Your Guide to Hassle-Free Car Transport So, you’ve set your sights on Utah, the “Beehive...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/05/Idaho-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Idaho Car Transport",
      date: "May 16, 2024",
      text: "Idaho Car Transport Exploring the Gem State: Idaho Car Transport with US Car-Go Freight Welcome to the Gem State – Idaho! From the rugged...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/05/Nevada-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Nevada Car Transport",
      date: "May 13, 2024",
      text: "Nevada Car Transport Cruising the Silver State: Nevada Car Transport with US Car-Go Freight Welcome to the Silver State – Nevada! From the glittering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/05/Washington-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Washington Car Transport",
      date: "May 7, 2024",
      text: "Washington Car Transport Streamlining Your Vehicle Transport: Washington Car Transport with US Car-Go Freight Nestled in the Pacific Northwest, Washington State boasts a diverse...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/05/Oregon-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Oregon Car Transport",
      date: "May 2, 2024",
      text: "Oregon Car Transport Oregon Car Transport Made Easy with US Car-Go Freight Welcome to the Pacific Wonderland – Oregon! From the lush forests of...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/04/Maine-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Maine Car Transport",
      date: "April 25, 2024",
      text: "Maine Car Transport Streamlined Maine Car Transport with US Car-Go Freight In the world of car transport, where delays and unexpected costs can disrupt...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/04/North-Carolina-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "North Carolina Car Transport",
      date: "April 17, 2024",
      text: "North Carolina Car Transport Seamless North Carolina Car Transport with US Car-Go Freight Nestled in the southeastern United States, North Carolina boasts stunning coastlines,...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/04/South-Carolina-Car-Transpotr-US-CarGo-Freight-1300x650.jpg",
      title: "South Carolina Car Transport",
      date: "April 12, 2024",
      text: "South Carolina Car Transport Smooth Sailing: Navigating Car Transport in South Carolina with US Car-Go Freight From the scenic coastline to the picturesque foothills,...",
    },
  ],
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/04/South-Dakota-Car-Transport-US-Car-Go-Freight-Img-1300x650.jpg",
      title: "South Dakota Car Transport",
      date: "April 4, 2024",
      text: "South Dakota Car Transport Navigating South Dakota’s Auto Transport Landscape with US Car-Go Freight In the vast expanse of the United States, where the...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/03/North-Dakota-Car-Transport-US-Car-Go-Freight-Img-1300x650.jpg",
      title: "North Dakota Car Transport",
      date: "March 21, 2024",
      text: "North Dakota Car Transport Smooth Sailing with US Car-Go Freight North Dakota, the Peace Garden State, beckons with vast prairies, vibrant culture, and a...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/03/Texas-Car-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Texas Car Transport",
      date: "March 14, 2024",
      text: "Texas Car Transport Navigating the Lone Star State with Ease and Confidence Texas is synonymous with big skies, big dreams, and everything being, well…...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/02/car-shipping-quotes-bg5-1300x650.jpg",
      title: "Common Misconceptions About Auto Transport and Car Shipping",
      date: "February 26, 2024",
      text: "Common Misconceptions About Auto Transport and Car Shipping Sorting fact from fiction in the world of car shipping can save you both stress and...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/02/Montana-Auto-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Montana Car Transport",
      date: "February 21, 2024",
      text: "Montana Car Transport Seamless Vehicle Shipping with US Car-Go Freight Dreaming of making the move to Montana? You’re not alone. Every year, countless individuals...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/02/Phoenix-Car-Shipping-US-CarGo-Freight-1300x650.jpg",
      title: "Phoenix Car Shipping",
      date: "February 13, 2024",
      text: "Phoenix Car Shipping Cruise into Phoenix in Style: Your Ultimate Guide to Stress-Free Car Shipping with US Car-Go Freight The Grand Canyon beckons with...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/02/Georgia-Car-Shipping-US-CarGo-Freight-1300x650.jpg",
      title: "Georgia Car Shipping",
      date: "February 6, 2024",
      text: "Georgia Car Shipping Cruise into Comfort: Your Ultimate Guide to Georgia Car Shipping with US Car-Go Freight Sun-kissed beaches, vibrant cities, and rolling greens...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/01/Hot-Shot-Car-Transport-Img-1000x650.jpg",
      title: "Hot Shot Car Transport",
      date: "January 22, 2024",
      text: "Hot Shot Car Transport How US Car-Go Freight Keep Your Car Safe During Transport? Handing over your car keys for a cross-country journey can...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/12/Indiana-Car-Shipping-Img-1300x650.jpg",
      title: "Indiana Car Shipping",
      date: "December 11, 2023",
      text: "Indiana Car Shipping Navigate Indiana with US CarGo Freight: Your Gateway to the Hoosier State Indiana, a land of rich history, vibrant culture, and...",
    },
  ],
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/12/Iowa-Car-Shipping-Img-1300x650.jpg",
      title: "Iowa Car Shipping",
      date: "December 7, 2023",
      text: "Iowa Car Shipping A Smooth and Reliable Ride with US CarGo Freight Iowa, the “Hawkeye State,” beckons with its picturesque landscapes, welcoming communities, and...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/12/Illinois-Car-Shipping-Img-1300x650.jpg",
      title: "Illinois Car Shipping",
      date: "December 6, 2023",
      text: "Illinois Car Shipping Navigate Illinois with US CarGo Freight: Your Gateway to the Prairie State Illinois, a state brimming with history, culture, and natural...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/10/Arizona-Auto-Transport-US-CarGo-Freight-1300x650.jpg",
      title: "Arizona Auto Transport",
      date: "December 6, 2023",
      text: "Arizona Auto Transport The Superiority of Arizona Auto Transport with US CarGo Freight Welcome to US CarGo Freight, we offer premium Arizona auto transport...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/10/Colorado-Car-Shipping-US-CarGo-Shipping-1300x650.jpg",
      title: "Colorado Car Shipping",
      date: "October 20, 2023",
      text: "Colorado Car Shipping Embrace the Adventure with US CarGo Freight: Colorado Car Shipping Made Simple Colorado, a state renowned for its breathtaking natural beauty,...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/10/toolzbuy228783-1300x650.jpg",
      title: "Arkansas Auto Transport",
      date: "October 16, 2023",
      text: "Arkansas Auto Transport Discover Arkansas with US Car-Go Freight: Your Trusted Vehicle Transport Service Embark on your Arkansas adventure with the support of US...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/10/Alabama-Car-Shipping-US-CarGo-Freight-1300x650.jpg",
      title: "Alabama Car Shipping",
      date: "October 3, 2023",
      text: "Alabama Car Shipping Smooth and Secure Alabama Car Shipping with US CarGo Freight Welcome to US CarGo Freight, your trusted partner for seamless and...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/09/rearview-car-parked-in-luxury-showroom-car-dealer-2023-03-30-01-57-28-utc-1300x650.jpg",
      title: "Shipping Cars Between Dealerships?",
      date: "September 13, 2023",
      text: "Shipping Cars Between Dealerships? How Auto Transport Companies Help? In the vast automotive industry, the movement of vehicles is a critical operation. Whether you...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/09/shutterstock_2209359449-1300x650.jpg",
      title: "How Much Does It Cost to Transport a Boat?",
      date: "September 13, 2023",
      text: "How Much Does It Cost to Transport a Boat? Transporting a boat can be a logistical puzzle, especially if you are new to marine...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/09/How-to-Save-Money-on-Car-Shipping-img-1300x650.jpg",
      title: "How to Save Money on Car Shipping?",
      date: "September 8, 2023",
      text: "How to Save Money on Car Shipping? Your Comprehensive Money-Saving Manual Shipping a car can be a significant expense, especially if you’re moving a...",
    },
  ],
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/09/How-to-Choose-a-Reputable-Car-Shipping-Company-img-1300x650.jpg",
      title: "How to Choose a Reputable Car Shipping Company?",
      date: "September 8, 2023",
      text: "How to Choose a Reputable Car Shipping Company? A Comprehensive Guide Shipping a car can be a daunting task, especially if you’re doing it...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/09/san-francisco-california-car-shipping-1300x650.webp",
      title: "California Car Shipping: A Smooth Ride with US Car-Go Freight",
      date: "September 7, 2023",
      text: "California Car Shipping: A Smooth Ride with US Car-Go Freight Welcome to the golden state of California, where sunny beaches, stunning landscapes, and iconic...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/09/florida-car-shipping-img-1300x650.webp",
      title: "Florida Car Shipping: The Ultimate Roadmap",
      date: "September 7, 2023",
      text: "Florida Car Shipping: The Ultimate Roadmap Florida, the Sunshine State, is renowned for its unique blend of stunning beaches, vibrant cities, and diverse culture....",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/08/Home-CTA-Bg-1300x650.jpg",
      title: "What is a USDOT Number, and How Do I Check It?",
      date: "August 18, 2023",
      text: "What is a USDOT Number, and How Do I Check It? The United States Department of Transportation number, more commonly known as a USDOT...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/08/Shipping-Your-Car-with-US-Cargo-Bg1-1300x650.jpg",
      title:
        "Ship a Luxury Car Now With US Car-GO Freight: Ensuring Safe and Secure Transportation",
      date: "August 11, 2023",
      text: "Ship a Luxury Car Now With US Car-GO Freight: Ensuring Safe and Secure Transportation If you own a luxury car, you understand the value...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/08/autotransportvspersonalinsurance-img-1300x650.jpg",
      title:
        "Auto Transport Insurance vs. Personal Car Insurance: Understanding the Differences",
      date: "August 10, 2023",
      text: "Auto Transport Insurance vs. Personal Car Insurance: Understanding the Differences When it comes to shipping a vehicle, whether it is across the state or...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/05/Lower-car-blog-img-1300x650.jpg",
      title: "What Are the Important Equipment Needed to Ship Lowering Cars?",
      date: "May 2, 2023",
      text: "What Are the Important Equipment Needed to Ship Lowering Cars? When shipping cars, slammed cars, or lowered cars, it’s important to have the right tools...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/05/Local-Vs-National-Auto-Transport-img-1300x650.jpg",
      title:
        "Comparing Local and National Services When Choosing the Right Auto Shipping Option",
      date: "May 2, 2023",
      text: "Comparing Local and National Services When Choosing the Right Auto Shipping Option In recent years, auto shipping has become more and more popular as...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/blog-can-i-ship-personal-iteam-1300x650.jpg",
      title: "Can I Ship My Personal Item With My Car?",
      date: "April 17, 2023",
      text: "Can I Ship My Personal Item With My Car? When it comes to shipping a car, many people wonder if they can also ship...",
    },
  ],
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/shutterstock_547443445-1300x650.jpg",
      title: "The Ins and Outs of Shipping a Lowering Car",
      date: "April 17, 2023",
      text: "The Ins and Outs of Shipping a Lowering Car Shipping a lowered car can be a daunting task for many car enthusiasts. Handling and...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/blog-golf-cart-1-1300x650.jpg",
      title: "The Best Way to Ship a Golf Cart",
      date: "April 14, 2023",
      text: "The Best Way to Ship a Golf Cart Golf carts are a popular way to get around on golf fields and in retirement communities,...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/Blog-Atv-1-1300x650.jpg",
      title: "The Best Way to Ship Your ATV, UTV, and RTVs",
      date: "April 14, 2023",
      text: "The Best Way to Ship Your ATV, UTV, and RTVs If you have ever been off-roading or hunting with an All-Terrain or Utility Terrain...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/blog-classic-1-1300x650.jpg",
      title:
        "What’s the Fundamental Difference Between Classic, Exotic, and Antique Cars?",
      date: "April 14, 2023",
      text: "What’s the Fundamental Difference Between Classic, Exotic, and Antique Cars? Cars are more than just a way to get around. They are an important...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/Blog-florida-to-california-1300x650.jpg",
      title: "Car Shipping From Florida To California",
      date: "April 14, 2023",
      text: "Car Shipping From Florida To California Of course many people transport vehicles from both Florida and California, given their respective sizes. Is getting your...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/why-should-i-ship-my-car-1300x650.jpg",
      title:
        "Why Should I Ship My Car With Your Company Instead Of Any Other Company Out There?",
      date: "April 10, 2023",
      text: "Why Should I Ship My Car With Your Company Instead Of Any Other Company Out There? The thought of having to ship a car...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/shutterstock_2212818803-1300x650.jpg",
      title: "The Cost Of Shipping Your Car To Another State",
      date: "April 10, 2023",
      text: "The Cost Of Shipping Your Car To Another State The cost of shipping a car one thousand miles is somewhere between ten and fifteen...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/blog-California-with-us-cargo-1300x650.jpg",
      title: "Shipping From California with US Cargo",
      date: "April 7, 2023",
      text: "Shipping From California with US Cargo There is a long list of considerations that must be made before a major relocation. Consider what to...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/Home-Page-Bg-1300x650.jpg",
      title: "How Long Does it Take to Deliver Vehicles Across States?",
      date: "April 7, 2023",
      text: "How Long Does it Take to Deliver Vehicles Across States? Whether you’ve just bought a brand-new car or need your current vehicle shipped to...",
    },
  ],
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/Ship-your-Vintage-Car-with-US-Cargo-BG6-1300x650.jpg",
      title: "How to Ship Vehicles from an Auction?",
      date: "April 5, 2023",
      text: "How to Ship Vehicles from an Auction? Buying a car at auction can save you a lot of money, but what comes next? How...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/03/US-Cargo-Veichles-Shipped-Bg-1300x650.jpg",
      title: "How To Prepare Your Car For Shipment?",
      date: "March 21, 2023",
      text: "How To Prepare Your Car For Shipment? Prepare Your Car For Shipment Clean your car Make sure your vehicle is looking fresh before you...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/03/shutterstock_1727124235-1-1300x650.jpg",
      title: "How To Ship My Car To Another State?",
      date: "March 21, 2023",
      text: "How To Ship My Car To Another State? Leaving one state for another is a cool and exciting adventure. Yet, in addition to all...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/How-do-I-get-is-car-transport-quote-1300x650.jpg",
      title: "Why You Need an Auto Shipping Broker?",
      date: "Why You Need an Auto Shipping Broker? There are many reasons why people use auto shipping services to transport their cars. When relocating for...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2023/04/expidited-customer-uscargo-review-img-1300x650.jpg",
      title: "Tips to Identify Fake Auto Shipping Reviews",
      date: "March 2, 2023",
      text: "Tips to Identify Fake Auto Shipping Reviews People who need to move their cars from one place to another depend on the auto shipping...",
    },
  ],
];

// name: OpenAuotTransport
// path: open-auto-transport

// section HowGet
const HowGetDataCard = [
  {
    icon: "/assets/open-transport/svg/speen.svg",
    title: "Total Mileage Between Destinations",
  },
  {
    icon: "/assets/how-it-works/svg/crash-car.svg",
    title: `Vehicle Specs (Size, Make, Weight, Etc.)`,
  },
  {
    icon: "/assets/how-it-works/svg/norm-car.svg",
    title: `The Condition of the Vehicle (Running or Not Running)`,
  },
  {
    icon: "/assets/open-transport/svg/location.svg",
    title: "Route Variations and Stops",
  },

  {
    icon: "/assets/open-transport/svg/calon.svg",
    title: "Fuel Prices",
  },
  {
    icon: "/assets/open-transport/svg/cloud.svg",
    title: "Weather Conditions",
  },
  {
    icon: "/assets/how-it-works/svg/date.svg",
    title: "Route Variations and Stops",
  },
];

// section WantToKnow
const wantToKnowData = {
  background: "/assets/open-transport/want_to_know_background.jpg",
  title: "Want to know the cost of shipping a car with us?",
  text: "Ride in Style with Our Open Carrier Transport - The Perfect Blend of Affordability and Convenience",
};

// section WhatAreThe
const whatAreTheSliderData = [
  {
    img: "/assets/open-transport/customers-review-background-img.jpg.webp",
    title: "Trusted Network of Carriers",
    text: `
  US Car-Go Freight have carefully selected carriers based on their commitment to maintaining high-quality service standards. This ensures that we can promptly match you with the most reliable carriers for your open car transport needs.
    `,
  },
  {
    img: "/assets/how-it-works/what_factors_timeline6.webp",
    title: "Best Prices Guaranteed (Assured)",
    text: `
   Our priority is to offer the best car shipping prices on the market. By utilizing our smart online calculator, we consider all relevant factors to provide you with the most accurate and fair open carrier car transport cost possible.`,
  },
  {
    img: "/assets/open-transport/Cross-Country-Car-Shipping-Customer-Service-img.jpg.webp",
    title: "Friendly Customer Service",
    text: `
  Our dedicated representatives are committed to providing exceptional customer service. From the moment you reach out to us until the successful delivery of your vehicle, US Car-Go freight logistics strive to ensure a positive and hassle-free experience.
    `,
  },
];

// name: EnclosedAutoTransport
// path: enclosed-auto-transport

// section FullyLicensed1
const fullyLicensedCards = {
  cardTitle: (
    <>
      Fully Licensed and{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Insured.
      </Box>
    </>
  ),
  cardText: `Get your vehicle where it needs to go, safely and on time, with our team of expert drivers. Our crew is fully licensed and insured, so you can trust us to take care of your ride. We believe that clear communication is key, which is why we keep you in the loop every step of the way. We know that shipping a vehicle can be a hassle, so we work hard to make it as easy as pie. Sit back, relax, and let us handle the rest!`,
  cardImage: "/assets/enclosed-auto-transport/fully_insured_card.jpg",
  // text card width)
  Width: "610px",
  // image card width and height
  imageHeight: "370px",
  imageWidth: "534px",
};

// section ClientsSaySlider
const enclosedClientsSaySliderData = {
  background: "/assets/enclosed-auto-transport/enclosed_slider_background.jpg",
  backgroundColor: false,
  title: (
    <>
      What Our{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Clients Say!!​
      </Box>
    </>
  ),
  subTitle: "For Enclosed vehicle transport reviews",
  slidesPerView: 3,
  sliderData: [
    {
      mini: true,
      description:
        "This car transport company is very good. I use them and they were on-time. Their prices are very reasonable and they get the job done if I could’ve given them more than five stars I would’ve I would’ve given them 10, so God bless Max. He is a really great guy and I am very happy and very satisfied with the service that I received. They delivered my car perfectly. Thank you so much, Molly.",
      userName: "Molly Adams",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Us Cargo helps me alot to in shipping, It was my right decision to choose this come become none of the other company was able to move my vehicle for week, only chris and US Cargo was there for my help, I'm really thankful to them.",
      userName: "Tiko lomtatidze",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      mini: true,
      description:
        "I highly recommend US CARGO and special thanks to Brian Jones for helping me in my shipment process. I shipped my car on urgent basis helped me in getting the driver and explained every step properly. Thanks Brian and Us Cargo!",
      userName: "Don Young",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Lowest price! Fast! Reliable! I had to ship my car from Georgia to Texas and comparing prices they were the lowest out there, they were very attentive and fast!",
      userName: "Melanie Dominguez",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
  ],
};

// section FullyLicensed2
const fullyLicensedCards2 = {
  reverse: true,
  cardTitle: (
    <>
      Exceptional <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Customer Services
      </Box>
    </>
  ),
  cardText: (
    <>
      At US Car-Go Auto Transport, we offer exceptional customer service and
      competitive enclosed car transport solutions. Our dedicated team takes
      pride in ensuring your satisfaction throughout the process. We value our
      client relationships, aiming to build trust, honesty, and transparency.
      Count on us for top-notch enclosed auto transport tailored to your needs.{" "}
      <br />
      <br />
      Experience our reliable Enclosed Carrier Car Shipping and trust us to
      deliver the highest level of customer service and quality solutions.
      Contact us for inquiries or a quote, as we're here to assist you. Build a
      long-lasting partnership with US Car-Go Auto Transport & let us meet all
      your transport requirements.
    </>
  ),
  cardImage: "/assets/enclosed-auto-transport/fully_insured_card01.webp",
  // text card width)
  Width: "610px",
  // image card width and height
  imageHeight: "538px",
  imageWidth: "534px",
};

// section FAQs
const faqs = {
  background: "/assets/enclosed-auto-transport/faqs_background.png",
  title: (
    <>
      FAQs{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  text: (
    <>
      At US Car-Go, we know how much you love your high-value, vintage, classic,
      or sports vehicle. That's why we offer{" "}
      <strong>enclosed auto transport </strong> services that match the quality
      and craftsmanship of your prized possession. Our enclosed car haulers
      provide the highest level of security and safety during transportation,
      giving you the peace of mind you need during your move. Whether you're
      moving across town or across the country, we're here to help. As an
      experienced enclosed vehicle transport company, we have the expertise and
      know-how to handle even the most high-end beauties. We believe that you
      deserve the best, and we're committed to providing world-class{" "}
      <NavLink to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
        cargo auto transport
      </NavLink>{" "}
      that meets your needs.
    </>
  ),
  listDot: true,
  data: [
    {
      title: "Enclosed Carrier Auto Transport: What is It?",
      text: "We offer a top-notch service called Enclosed Carrier Auto Transport that ensures your vehicle is transported with the utmost care. We use enclosed trailers or containers to keep your precious ride safe from external factors such as harsh weather, dust, and debris while it’s on the move. This type of transport is ideal for luxury, antique, and classic cars that require an extra level of protection during transit. With our Enclosed Carrier Auto Shipping service, you can rest easy knowing your vehicle is in good hands.",
    },
    {
      title: "Who is Enclosed Carrier Auto Transport for?",
      text: "",
      list: [
        {
          name: "High-end vehicles and Dealerships",
          listText:
            "US Car-Go understand that your car is more than just a means of transportation. It’s a valuable asset that deserves the best possible care and protection during transit. That’s why we offer enclosed auto shipping services that provide an extra layer of protection and security for your luxury or high-end vehicle. With our  option, your car is shielded from external factors such as weather, road debris, and other hazards that could potentially cause damage during transport. Plus, our security features provide peace of mind knowing that your car is safely and securely locked in place during transit, protected from theft or vandalism. Whether you’re a car collector, dealership, or simply an individual with a high-value vehicle, our enclosed car haulers services are the ideal solution to ensure your car arrives at its destination in pristine condition. Trust us to handle your valuable asset with the utmost care and professionalism.",
        },
        {
          name: "Privacy to Owners",
          listText:
            " We offer enclosed cargo auto transport to give vehicle owners a higher level of privacy. With our enclosed carriers, your vehicle will be completely shielded from view, so nobody outside of the carrier can see it. This is especially important for those who want to keep their vehicles private and avoid unwanted attention.",
        },
        {
          name: "Long-distance Transportation",
          listText:
            " Our Enclosed Car Carrier service is just what you need! With reliable and secure transportation, you can have peace of mind knowing your vehicle is in good hands. Our service is also perfect for car enthusiasts attending shows or auctions who want their prized possession to arrive in style. Choose our Enclosed Carrier Auto transport service for a worry-free and top-notch experience!",
        },
      ],
    },
    {
      title: "How Much is the Enclosed Auto Transport Cost?",
      text: "Shipping your car in an enclosed carrier is a premium service, and it can be pricier than other shipping methods. The cost can vary from $1,500 to $5,000 or more, depending on various factors. The exact amount may also differ based on the Carrier Company you choose. Motorcycle shipping companies  as they may have different pricing models and levels of service. Here are the factors that influence the estimate to ship a car:",
      list: [
        {
          name: "Distance",
          listText:
            " We understand that the distance of your vehicle’s journey is a major factor in determining the cost of our enclosed auto transport services. The farther your vehicle needs to go, the more fuel, time, and effort it takes to transport it safely to its destination. That’s why longer distance shipments may cost a bit more. We believe in being transparent with our pricing, so you know what to expect. Rest assured that the increased cost for longer-distance shipments is due to the extra fuel, labor, and time required to get your vehicle to its destination safely and securely.",
        },
        {
          name: "Vehicle Size and Weight",
          listText:
            " At US Car-Go Freight, we understand that the size and weight of your vehicle can impact the cost of shipping. When it comes to transporting cars, larger and heavier vehicles require more space and special equipment, which can increase the cost of shipping. For example, shipping a big SUV or pickup truck would cost more than shipping a smaller sedan or coupe.",
        },
        {
          name: "Time of Year",
          listText:
            " At US Car-Go Auto Transport, we want to make sure you’re informed about the prices for our services. You may notice that prices fluctuate depending on the season. During peak seasons like summer, when lots of people are moving, the demand for our services goes up, which can make prices a bit higher. During the winter months, harsh weather can impact transportation, and this may also make prices a bit higher.",
        },
        {
          name: "Pickup and Delivery Locations",
          listText:
            " When shipping to or from a far-flung or hard-to-reach place, you may run into higher transportation costs. And if you’re sending something to or from a bustling city, you might face an extra expense due to high demand and traffic congestion.",
        },
        {
          name: "Type of Enclosed Carrier",
          listText:
            " come in two types: soft-sided and hard-sided. Soft-sided carriers are more affordable, but offer less protection. On the other hand, hard-sided carriers provide greater protection and are more expensive as a result. So, if you need to transport something valuable or delicate, a hard-sided carrier may be the way to go. But if you’re on a budget and don’t need as much protection, a soft-sided carrier could be a great option.",
        },
        {
          name: "The level of protection",
          listText:
            " At some carriers, you can get extra protection for your goods during shipping.",
        },
        {
          name: "Additional Services",
          listText:
            " Quote to ship a car might change if you need an urgent or guaranted delivery. These services are more convenient since they provide quicker delivery timeframes. However, there is a price to pay for them.",
        },
      ],
    },
    {
      title: "Can I Ship My Vehicle With Personal Items?",
      text: "At Auto-shipping companies, it’s important to note that they’re not licensed to carry household goods or personal items during vehicle transportation. To ensure your belongings stay safe, we recommend not leaving personal items in your vehicle. However, don’t worry! Factory-issued equipment and permanently installed equipment are allowed and will be noted accordingly on the truck bill.",
    },
    {
      title: "Do I Really Need Enclosed Car Shipping?",
      text: "Looking to move your vehicle from one location to another and are unsure whether you should use an enclosed auto shipping services? Enclosed car shipping involves transporting your vehicle inside an enclosed trailer, rather than an open carrier trailer. Although open car carrier is typically the more common and affordable option, enclosed car shipping may be worth considering based on your unique needs. Here are some factors to keep in mind when deciding whether enclosed car auto shipping is the right choice for you:",
      list: [
        {
          name: "The value of your vehicle",
          listText:
            "If you’re looking to transport a precious or rare vehicle, like a classic, luxury, or sports car, you may want to consider enclosed car shipping. This option provides extra protection for your vehicle, making sure it arrives at its destination safely and securely. Even if your vehicle has a high value, an enclosed trailer can give you added peace of mind during the transportation process.",
        },
        {
          name: "The distance of the move",
          listText:
            " If you’re moving your vehicle across the country or on a long-distance journey, enclosed car shipping could be the way to go. Long trips mean your car will spend more time on the road, which increases the risk of hazards. By choosing enclosed transport, you’ll give your vehicle an added layer of protection during these longer journeys. With this option, you can rest assured that your car is secure and protected in transit.",
        },
        {
          name: "The time of year",
          listText:
            " When the winter months hit or if you’re in an area with unpredictable weather, transporting your vehicle can be a real hassle. That’s where enclosed auto transport comes in – it’s the best solution for keeping your vehicle protected from the elements. Rain, snow, and ice can all cause damage to your ride during transport, but with enclosed transport, you won’t have to worry about a thing. Plus, if you’re transporting an exotic vehicle that requires extra care and protection, enclosed transport is a must.",
        },
        {
          name: "Your personal preference Enclosed Vehicle Shipping",
          listText:
            "  is more costly than its open-air counterpart, but it’s well worth it if you value your vehicle’s safety and security.",
        },
      ],
    },
    {
      title:
        "Do I Need to Make Arrangements in Advance for My Enclosed Auto Transport?",
      text: "You should get an estimate for shipping a vehicle and place your order at least 7–10 days in advance. If you have an urgent need to relocate your car, however, we can work with you to make that happen.",
    },
    {
      title: "What Are the Benefits of Choosing Enclosed Carrier Car Shipping?",
      text: "Enclosed auto shipping services have several advantages and should be considered. The following are some of them:",
      list: [
        {
          name: "Protection from the Elements",
          listText:
            "With an enclosed trailer, your vehicle will be protected from rain, snow, hail, and extreme temperatures. This is especially important if your car or truck has a sensitive paint job that can easily be damaged by these elements. We take pride in our enclosed trailers and the level of protection they provide. You can trust us to transport your vehicle safely and securely, without worrying about any outside elements damaging it.",
        },
        {
          name: "Better for Classic and Antique Cars",
          listText:
            " This method of shipping works well for vintage automobiles. These automobiles often feature one-of-a-kind components that must be handled with care during shipment. To further ensure that these automobiles reach their destination in pristine shape, an enclosed carrier should be used.",
        },
        {
          name: "Reduced Risk of Damage",
          listText:
            " Protect your car during transport with our enclosed carriage service. Our trailers have walls and a top that shield your vehicle from other cars, road debris, and other hazards on the road. That means fewer dings, dents, and other issues during transit. Trust us to transport your vehicle with care, whether it’s a classic car, luxury ride, or daily driver.",
        },
        {
          name: "Enhanced Security",
          listText:
            "  The safety of your automobile is prioritized by our enclosed auto transport carriers. We use top-of-the-line enclosed trailers that are designed to keep your vehicle hidden and protected from potential theft. Plus, our hydraulic lift system ensures that your vehicle is loaded with care, reducing the risk of damage during the loading process. During transit, your vehicle is securely fastened with straps and other restraints to prevent any movement.",
        },
        {
          name: "Peace of Mind",
          listText:
            " If you own a top-of-the-line luxury car, a classic automobile, or any other high-value vehicle, you know how precious it is. That’s why enclosed carrier  auto transporters are the perfect solution for your transportation needs. With this service, you can have peace of mind knowing your vehicle will arrive at its destination in the same pristine condition as when you entrusted it to us. This is especially important for long-distance transport where the risk of damage is greater. At US CAR-GO, we understand the value of your vehicle, and we take every precaution to ensure its safety during transport. Our enclosed trailer auto transport offer the ultimate protection for your vehicle against external elements and potential damage.",
        },
        {
          name: "Customized Transport Options",
          listText:
            " We offer Enclosed Auto Transport Carriers that provide you with a range of transport options customized to your needs. we offer lift gate service to help load and unload cars with limited ground clearance. For owners of unique or difficult-to-transport vehicles, we provide specialized shipping options that offer flexibility and convenience.",
        },
        {
          name: "More Flexibility",
          listText:
            " If you choose to transport your car in an enclosed carrier, you’ll have more control over when your vehicle is picked up and delivered. Enclosed carriers are usually scheduled for specific dates, which means you can plan ahead and make sure your car arrives on time. This is especially helpful if you have a busy schedule and need your car at a specific time.",
        },
      ],
    },
    {
      title:
        "What is the Coverage Protection Policy for Enclosed Carrier Auto Shipping?",
      text: "Many auto transporters give enclosed carriers an extra layer of safety from the weather, debris, and other possible dangers. Choosing the right insurance package is crucial to keep your precious vehicle safe during transportation. At US CAR-GO, we offer various types of insurance policies to suit your needs. Let’s take a look at some of them:",
      list: [
        {
          name: "Basic Coverage Protection",
          listText:
            "When you ship your car with an auto transport company, they usually offer a type of coverage called basic coverage protection. This coverage is designed to protect your vehicle in case it gets damaged during transit due to accidents or mistakes by the carrier, like collisions or drops. The coverage usually pays for the actual cash value of your car, which is determined based on the car’s make, model, and year.",
        },
        {
          name: "Comprehensive Coverage Protection",
          listText:
            " Comprehensive coverage protection is a more extensive type of insurance policy that provides a greater level of protection than basic coverage. With this policy, you can be covered for damages caused by natural disasters, theft, and vandalism. Additionally, it covers the cost of repairs or replacement if your property is damaged while in transit. It’s a great way to ensure that you’re fully protected and have peace of mind knowing that you’re covered in a variety of situations.",
        },
        {
          name: "Excess Liability Insurance",
          listText:
            " Do you know that excess liability insurance can give you extra protection for your business? It’s like an added layer of coverage that goes beyond the standard liability policy. With this policy, you can have peace of mind knowing that you’re financially protected in case someone files a claim against your business for damages caused during transit. It’s like a safety net that ensures you have enough coverage to pay for any unexpected expenses that may arise during transportation.",
        },
        {
          name: "Gap Insurance",
          listText:
            "  Gap insurance is a special kind of coverage that can help you avoid financial stress in case your car gets damaged while it’s still being paid off. Basically, it covers the difference between the amount you still owe on your car loan and the actual value of the vehicle. This can give you peace of mind and protect you from unexpected expenses if something happens to your car while you’re still making payments.",
        },
        {
          name: "Disappearing Deductible Insurance",
          listText:
            "With Disappearing Deductible insurance, you can get a lower deductible each year you don’t file any claims for damages while driving. It’s a great way to incentivize safe driving and also ensure that you’re financially protected in case of any unexpected accidents. So, the longer you maintain a good driving record, the more you’ll benefit from this policy.",
        },
        {
          name: "Guaranteed Delivery Date Insurance",
          listText:
            " You can be certain that your car will arrive on time thanks to guaranteed delivery date insurance from your auto transporters. This coverage compensates you monetarily if the shipping company is negligent and fails to deliver your package on time.",
        },
      ],
    },
    {
      title:
        "Why US Car-Go is the Perfect Choice for Your Enclosed Carrier Auto Shipping?",
      text: "If you need to ship your vehicle and want a trustworthy and safe option, check out US Car-Go!  They’re the best in the business when it comes to enclosed carrier shipping, with a proven track record of excellence and years of experience.",
      list: [
        {
          name: "Basic Coverage Protection",
          listText:
            "When you ship your car with an auto transport company, they usually offer a type of coverage called basic coverage protection. This coverage is designed to protect your vehicle in case it gets damaged during transit due to accidents or mistakes by the carrier, like collisions or drops. The coverage usually pays for the actual cash value of your car, which is determined based on the car’s make, model, and year.",
        },
        {
          name: "Auto Enclosed Trailer,",
          listText:
            " with this option, your vehicle will be fully protected from any potential dangers on the road. Unlike open carrier shipping, enclosed carriers provide complete protection from the elements and road debris. This means your car will arrive at its destination in the same condition it was loaded onto the carrier. So, if you want maximum protection for your precious ride during transport, go for enclosed auto transport.",
        },
        {
          name: "Multiple Shipping Option",
          listText:
            "At US Car-GO, we understand that shipping your vehicle can be a daunting task. That’s why we offer a range of enclosed carrier car shipping options that are tailored to meet your specific needs. Whether you need to transport a single vehicle or an entire fleet, we have the knowledge and resources to get the job done right. Our nationwide network of carriers allows us to transport your vehicle to any destination in the United States.",
        },
        {
          name: "Safety and Security",
          listText:
            "At US Car-Go, we understand that your vehicle is important to you, and we want to ensure that it is protected during transport. That’s why we only work with fully insured and licensed carriers. We also have a strict screening process in place to ensure that we only use the most qualified and experienced carriers to handle your shipment.",
        },
        {
          name: "Exceptional Customer Service",
          listText:
            "We want your shipping experience to be as smooth and easy as possible. Our team of shipping experts will assist you in finding the best options for your specific needs and keep you informed every step of the way. If you have any questions or concerns, our friendly US Car-Go customer service team is always available to help.",
        },
        {
          name: "Competitive Pricing ",
          listText:
            "At US Car-Go, we know that shipping your vehicle can be expensive. That’s why we offer affordable pricing for our enclosed auto shipping services. We’re committed to providing you with high-quality and reliable shipping solutions at a reasonable price. You can trust us to take care of your vehicle while it’s in our care. Looking for a trustworthy  auto transporter  that prioritizes your vehicle’s safety and affordability? Look no further! Contact us to learn more about our services and start your shipping journey with confidence.",
        },
      ],
    },
  ],
};

// section GetQuote1
const getQuoteData = {
  background: "/assets/enclosed-auto-transport/get_quote_background.jpg",
  title: (
    <>
      STILL, HAVE MORE SHIPPING QUESTIONS?{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        US CAR-GO GOT YOU COVERED
      </Box>
    </>
  ),
  text: (
    <>
      Shipping Your Car Like Royalty - Our Enclosed Carrier Does the Job with
      Elegance! <br />
      If you have more questions, we're here to help! You can get a quote, or if
      you prefer to speak with a real person in real-time, you can contact us
      and we'll be happy to assist you. We're always ready to provide you with
      the information you need!
    </>
  ),
  buttonLink: "tel:+18882498840",
  buttonText: "Call At (888) 249-8840",
  buttonIcon: <PhoneAndroidIcon />,
};

// name: DoorToDoor
// path: door-to-door

// section TransportServices
const transportServicesData = {
  background: "/assets/door-to-door/transport_services_background.jpg",
  title: "Door-to-Door Auto Transport",
  text: "Affordable, Dependable, and Hassle-Free Door-to-Door Auto Shipping with US Car-Go.",
  text1: (
    <>
      Looking for a hassle-free way to transport your vehicle? Look no further
      than US Car-Go’s{" "}
      <em>
        <strong>Door-to-Door auto transport</strong>
      </em>
      service! It’s easy and convenient – just choose the pick-up and drop-off
      locations that work best for you, and our experienced truck drivers will
      handle the rest. Your vehicle will stay securely on the carrier throughout
      the entire journey, so you don’t have to worry about any unnecessary
      loading and unloading. And with US Csr-Go, you can trust that your vehicle
      will be safely and legally transported to its destination without any
      stops or delays. So sit back, relax, and let us take care of the
      transportation logistics for you!
    </>
  ),
};

// section FullyLicensed3
const fullyLicensedCards3 = {
  title: (
    <>
      Why should you use <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        door-to-door car services?
      </Box>
    </>
  ),
  cardTitle: (
    <>
      Straightforward
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `US Car-Go offers a convenient car shipping service that picks up your vehicle from your doorstep and delivers it directly to its destination. You no longer need to stress about bringing your car to a shipping yard because they will take care of it for you.`,
  cardImage: "/assets/door-to-door/fully_licensed_card.jpg",
  // text card width)
  Width: "560px",
  // image card width and height
  imageHeight: "269px",
  imageWidth: "560px",
  reverse: true,
};

// section FullyLicensed4
const fullyLicensedCards4 = {
  background: "/assets/door-to-door/fully_licensed_background.jpg",
  cardTitle: (
    <>
      Reduced Risk of Damage
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `We make sure that your vehicle is transported with utmost care and safety. Our door to door transportation team uses modern and well-maintained trucks and trailers, and our drivers are highly skilled and experienced to handle all kinds of vehicles. You can trust us to minimize the risk of any damage during transit.`,
  cardImage: "/assets/door-to-door/fully_licensed_card1.webp",
  // text card width)
  Width: "560px",
  // image card width and height
  imageHeight: "370px",
  imageWidth: "560px",
};

// section FullyLicensed5
const fullyLicensedCards5 = {
  cardTitle: (
    <>
      Stress-Free
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: (
    <>
      Our door to door auto transport services can help you avoid all that
      hassle and save money on fuel and other expenses too! We have a variety of
      service options available to fit your budget, so you can choose the one
      that's right for you.
    </>
  ),
  cardImage: "/assets/door-to-door/fully_licensed_card2.webp",
  // text card width)
  Width: "560px",
  // image card width and height
  imageHeight: "269px",
  imageWidth: "560px",
  reverse: true,
};

// section ClientsSaySlider2
const clientsSaySliderData2 = {
  background: "/assets/door-to-door/clients_say_slider_background.jpg",
  backgroundColor: false,
  title: (
    <>
      What Our{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Clients Say!!​
      </Box>
    </>
  ),
  subTitle: "For door to door auto transport reviews",
  slidesPerView: 1,
  sliderData: [
    {
      mini: true,
      description:
        "This car transport company is very good. I use them and they were on-time. Their prices are very reasonable and they get the job done if I could’ve given them more than five stars I would’ve I would’ve given them 10, so God bless Max. He is a really great guy and I am very happy and very satisfied with the service that I received. They delivered my car perfectly. Thank you so much, Molly.",
      userName: "Molly Adams",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Us Cargo helps me alot to in shipping, It was my right decision to choose this come become none of the other company was able to move my vehicle for week, only chris and US Cargo was there for my help, I'm really thankful to them.",
      userName: "Tiko lomtatidze",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      mini: true,
      description:
        "I highly recommend US CARGO and special thanks to Brian Jones for helping me in my shipment process. I shipped my car on urgent basis helped me in getting the driver and explained every step properly. Thanks Brian and Us Cargo!",
      userName: "Don Young",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Lowest price! Fast! Reliable! I had to ship my car from Georgia to Texas and comparing prices they were the lowest out there, they were very attentive and fast!",
      userName: "Melanie Dominguez",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
  ],
};

// section WhyChoose
const doorToDoorSliderData = [
  {
    icon: LocalShippingIcon,
    title: "Convenience",
    text: `
 We've got you covered with our hassle-free door to door car shipping, pickup and delivery service! Say goodbye to wasting time and energy driving your vehicle to a shipping yard. Our friendly team will transport your vehicle straight to its destination, making your life easier.
    `,
  },
  {
    icon: HeadsetMicIcon,
    title: "Professionalism",
    text: `
     We have a team of skilled professionals who are committed to providing you with excellent service. We understand how important it is to safely transport your belongings, which is why we take extra precautions to ensure they are handled securely. You can count on us to keep you informed every step of the way so that you can have peace of mind during the transportation process.
    `,
  },
  {
    icon: TuneIcon,
    title: "Flexibility",
    text: `
    US Car-Go have different types of services that you can choose from based on your needs and budget. Whether you need fast shipping or are looking for something more affordable, we can customize our services to suit what you're looking for.
    `,
  },
  {
    icon: PriceChangeIcon,
    title: "Competitive Pricing",
    text: `
   We make sure that you get the best value for your money without compromising on quality or reliability. We believe that vehicle transportation should be accessible and affordable for everyone, and we work hard to keep our prices as low as possible.
    `,
  },
  {
    icon: SentimentSatisfiedAltIcon,
    title: "Peace of Mind",
    text: `
    Our door to door auto transport services offer you the convenience of having your vehicle picked up and dropped off at your doorstep. You don't have to worry about a thing because we take good care of your vehicle. We have great insurance coverage and top-notch customer service. You will be updated throughout the transportation process and we will address any concerns you may have. We take extra precautions to ensure your vehicle arrives at its destination in the same condition it was in when we picked it up.
    `,
  },
];

// section GetQuote
const getQuoteData2 = {
  background: "/assets/enclosed-auto-transport/get_quote_background.jpg",
  title: (
    <>
      Want to know the cost of door to door auto transport{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        a car with us?
      </Box>
    </>
  ),
  text: (
    <>
      From Your Doorstep to Your Destination - Experience Hassle-Free Car
      Shipping with Us!
    </>
  ),
  buttonLink: "tel:+18882498840",
  buttonText: "Call At (888) 249-8840",
  buttonIcon: <PhoneAndroidIcon />,
};

// name: ExpeditedCar
// path: expedited-car

// section GetQuote
const getQuoteData3 = {
  background: "/assets/expedited-car/expedited_car_background.jpg",
  title: (
    <>
      Expedited Car{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Shipping.
      </Box>
    </>
  ),
  text: (
    <>
      The Fastest and Easiest Way to Transport Your Vehicle
      <br />
      <br />
      If you’re in a hurry to move your car to a new location, US Car-Go is your
      best choice.{" "}
      <em>
        <strong>Expedited car shipping</strong>
      </em>{" "}
      service is the fastest one available and your car will be given top
      priority. A driver will be sent to pick up your car as soon as possible.
      Just keep in mind that the time it takes for delivery may be affected by
      things like distance and weather.
    </>
  ),
};

// section FullyLicensed6
const fullyLicensedCards6 = {
  reverse: true,
  cardTitle: (
    <>
      What do you mean by <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Expedited Auto <br /> Shipping?
      </Box>
    </>
  ),
  cardText: (
    <>
      Transport Expedited Auto is a convenient way to get your vehicle
      transported from one location to another quickly. It's a great option for
      customers who need their cars to be delivered promptly and reliably. By
      choosing a Expedited car shipping company that offers fast car
      transportation, you can rest assured that your vehicle will arrive at its
      destination safe and sound, and without any delay. <br />
      <br />
      If you need to ship cars to another state in a hurry, US Car-Go is the
      best option. This service uses enclosed trailers that are very safe and
      secure while they are on the road.
    </>
  ),
  cardImage: "/assets/expedited-car/fully_licensed_card.webp",
  // text card width)
  Width: "610px",
  // image card width and height
  imageHeight: "527px",
  imageWidth: "480px",
};

// section ClientsSaySlider
const clientsSaySliderData3 = {
  background: "/assets/enclosed-auto-transport/enclosed_slider_background.jpg",
  backgroundColor: false,
  title: (
    <>
      What Our{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Clients Say!!​
      </Box>
    </>
  ),
  subTitle: "For Expedited car transport reviews",
  slidesPerView: 3,
  sliderData: [
    {
      mini: true,
      description:
        "This car transport company is very good. I use them and they were on-time. Their prices are very reasonable and they get the job done if I could’ve given them more than five stars I would’ve I would’ve given them 10, so God bless Max. He is a really great guy and I am very happy and very satisfied with the service that I received. They delivered my car perfectly. Thank you so much, Molly.",
      userName: "Molly Adams",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Us Cargo helps me alot to in shipping, It was my right decision to choose this come become none of the other company was able to move my vehicle for week, only chris and US Cargo was there for my help, I'm really thankful to them.",
      userName: "Tiko lomtatidze",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      mini: true,
      description:
        "I highly recommend US CARGO and special thanks to Brian Jones for helping me in my shipment process. I shipped my car on urgent basis helped me in getting the driver and explained every step properly. Thanks Brian and Us Cargo!",
      userName: "Don Young",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Lowest price! Fast! Reliable! I had to ship my car from Georgia to Texas and comparing prices they were the lowest out there, they were very attentive and fast!",
      userName: "Melanie Dominguez",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
  ],
};

// section FullyLicensed7
const fullyLicensedCards7 = {
  title: (
    <>
      The Process of Expedited <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Car Shipping Follows​
      </Box>
    </>
  ),
  cardTitle: (
    <>
      Get the Price
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `When you need to get your car to its destination quickly, US Car-Go is your best bet! All you have to do is call a expedited car shipping company and ask for a quote. They'll ask you a few questions, like where you want your car shipped, how big it is, and how much it weighs. Then, they'll give you a quote for their services based on your answers. Easy peasy!`,
  cardImage: "/assets/expedited-car/fully_licensed_card1.webp",
  // text card width)
  Width: "540px",
  // image card width and height
  imageHeight: "325px",
  imageWidth: "580px",
  reverse: true,
};

// section FullyLicensed8
const fullyLicensedCards8 = {
  background: "/assets/how-it-works/what_to_know.jpg",
  cardTitle: (
    <>
      You Come First
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `Great! Once you accept the quote, our Expedited car shipping company will take excellent care of your car and make all the necessary arrangements for transportation. This includes setting a pickup time, preparing your car for transport, and handling any permits and paperwork that may be needed. You can relax and let us handle everything!`,
  cardImage: "/assets/expedited-car/fully_licensed_card2.jpg",
  // text card width)
  Width: "540px",
  // image card width and height
  imageHeight: "325px",
  imageWidth: "580px",
};

// section FullyLicensed9
const fullyLicensedCards9 = {
  cardTitle: (
    <>
      Careful Loading and Continuous Update
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: (
    <>
      When we transport your car in our{" "}
      <NavLink
        to={"/enclosed-auto-transport"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <strong>enclosed trailer</strong>
      </NavLink>
      , we handle it with extra care to ensure it arrives at its destination
      safely and without any damage. After we secure everything in place, we
      drive the trailer to your desired location, carefully unload your car, and
      deliver it to you. At US Car-Go, we provide regular updates about your
      freight through phone and email so that you can stay informed and assured
      that everything is going smoothly.
    </>
  ),
  cardImage: "/assets/expedited-car/fully_licensed_card3.webp",
  // text card width)
  Width: "540px",
  // image card width and height
  imageHeight: "425px",
  imageWidth: "580px",
  reverse: true,
};

// section WantToKnow
const wantToKnowData1 = {
  title: "Get Hassle-free and Safe Expedited Car Shipping with US Car-Go",
  text: "Need your car shipped in a hurry? Trust us to get it there faster than fast!",
  id: "#get-quote",
  color: "#F9F9F9",
};

// section WhyChoose
const expeditedCarSliderData = [
  {
    icon: LocalShippingIcon,
    title: "Instant Shipping of Vehicle",
    text: `
 We use the fastest car shipping company in the industry to ensure that your vehicle arrives safely and quickly. If you're relocating and your car needs to get there before you do, expedited car shipping is a great solution.
    `,
  },
  {
    icon: TimeToLeaveIcon,
    title: "Delivering Door-to-Door",
    text: `
   US Car-Go provides fast and convenient door to door shipping for automobiles. Just make sure there's adequate space for our truck to park and load there.
    `,
  },
  {
    icon: Diversity2Icon,
    title: "Easy Shipping Reliability",
    text: `
   Our express auto transport services are more dependable because we employ a wider pool of drivers. We also have a contingency plan in case something goes wrong, like the car breaking down, the weather turning poor, or their being an unexpected amount of traffic.
    `,
  },
  {
    icon: HeadsetMicIcon,
    title: "Unrestricted and Convenient Communication",
    text: `
  If you need your car shipped quickly, it's crucial for us to stay in touch with you. We want to make sure you feel confident and have a good understanding of what to expect during the transportation process. We'll keep you updated on your transit's progress and let you know the estimated time of arrival. This is especially important for time-sensitive deliveries that require quick updates.
    `,
  },
  {
    icon: TextSnippetIcon,
    title: "Extra Insurance Coverage",
    text: `
   At US Car-Go Freight, we make sure your cars arrive safely. Our experienced drivers take extra care to keep your vehicle secure during transportation. We also offer extra insurance to protect your car in the rare event of damage or theft, giving you added peace of mind.
    `,
  },
  {
    icon: KeyIcon,
    title: "We Only Need Your Vehicle and Key",
    text: `
   You don't have to hand over any documents related to your car's ownership, like the title, to the driver unless the delivery location specifically asks for it. Just make sure your car is prepared and you have the key to give to the driver!
    `,
  },
];

// name: HeavyShipping
// path: heavy-shipping

// section TransportServices
const transportServicesData1 = {
  background: "/assets/heavy-shipping/transport_services_background.jpg",
  title: (
    <>
      US Car-Go: The Best Option for <br /> Nationwide{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Heavy Equipment Shipping.
      </Box>
    </>
  ),
  text: "Are you in need of heavy equipment movers that you can trust and rely on when heavy machinery is shipping? If you need large machinery shipped anywhere in the United States, look no further than US Car-Go. When it comes to moving large pieces of machinery, you can count on our team of experts to go above and beyond your expectations.",
  text1: `US Car-Go Freight has the knowledge and resources necessary to move large machinery. That’s why, no matter how big or bulky your equipment is, we provide a full suite of transportation options to guarantee its safe arrival at its destination.`,
};

// section FullyLicensed10
const fullyLicensedCards10 = {
  cardTitle: (
    <>
      First-rate Service and{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Competitive Pricing.
      </Box>
    </>
  ),
  cardText: (
    <>
      We are here for you every step of the way, from the moment you request an
      estimate until we resolve any issues that may arise. Depend on US Car-Go
      to provide first-rate service and competitive pricing, whether you're
      sending one piece of large machinery or a complete fleet. So, there's no
      reason to delay.{" "}
      <strong>
        <Box component={"a"} href={"#get-quote"} sx={{ color: "#E01933" }}>
          Get in touch
        </Box>
      </strong>{" "}
      with us right away to learn more about our
      <strong>heavy equipment shipping</strong> services.
    </>
  ),
  cardImage: "/assets/heavy-shipping/fully_licensed_card.webp",
  // text card width)
  Width: "560px",
  // image card width and height
  imageHeight: "400px",
  imageWidth: "560px",
  reverse: true,
};

// section ClientsSaySlider
const clientsSaySliderData = {
  background: "/assets/heavy-shipping/clients_say_slider_background.jpg",
  backgroundColor: false,
  title: (
    <>
      What Our{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Clients Say!!​
      </Box>
    </>
  ),
  subTitle: "For heavy equipment transport reviews",
  slidesPerView: 3,
  sliderData: [
    {
      mini: true,
      description:
        "This car transport company is very good. I use them and they were on-time. Their prices are very reasonable and they get the job done if I could’ve given them more than five stars I would’ve I would’ve given them 10, so God bless Max. He is a really great guy and I am very happy and very satisfied with the service that I received. They delivered my car perfectly. Thank you so much, Molly.",
      userName: "Molly Adams",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Us Cargo helps me alot to in shipping, It was my right decision to choose this come become none of the other company was able to move my vehicle for week, only chris and US Cargo was there for my help, I'm really thankful to them.",
      userName: "Tiko lomtatidze",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      mini: true,
      description:
        "I highly recommend US CARGO and special thanks to Brian Jones for helping me in my shipment process. I shipped my car on urgent basis helped me in getting the driver and explained every step properly. Thanks Brian and Us Cargo!",
      userName: "Don Young",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Lowest price! Fast! Reliable! I had to ship my car from Georgia to Texas and comparing prices they were the lowest out there, they were very attentive and fast!",
      userName: "Melanie Dominguez",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
  ],
};

// section FullyLicensed11
const fullyLicensedCards11 = {
  title: (
    <>
      The Most Trusted Heavy <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Equipment Shipping Company​
      </Box>
    </>
  ),
  text: (
    <>
      When it comes to transporting <strong>heavy equipment hauling </strong>
      services across the country, US Car-Go is the industry standard. Our staff
      is well-versed in all facets of the transportation process and can take
      care of everything from initial planning to final dispatch.
    </>
  ),
  cardTitle: (
    <>
      Range of Services
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `US Car-Go gives its customers a number of choices for shipping heavy equipment, depending on what they need. We can move big and heavy things all over the country and the world.`,
  cardImage: "/assets/heavy-shipping/fully_licensed_card1.jpg",
  // text card width)
  Width: "480px",
  // image card width and height
  imageHeight: "270px",
  imageWidth: "560px",
  reverse: true,
};

// section FullyLicensed12
const fullyLicensedCards12 = {
  background: "/assets/heavy-shipping/fully_licensed_background1.jpg",
  cardTitle: (
    <>
      Range of Services
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `US Car-Go gives its customers a number of choices for shipping heavy equipment, depending on what they need. We can move big and heavy things all over the country and the world.`,
  cardImage: "/assets/heavy-shipping/fully_licensed_card2.webp",
  // text card width)
  Width: "480px",
  // image card width and height
  imageHeight: "270px",
  imageWidth: "560px",
};

// section FullyLicensed13
const fullyLicensedCards13 = {
  cardTitle: (
    <>
      State-of-the-art Technology
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `As a heavy hauler we keeps an eye on our auto shipping services by using cutting-edge technology. By using these methods, we can let our clients know how their goods is doing and take care of any problems as soon as they come up.`,
  cardImage: "/assets/heavy-shipping/fully_licensed_card3.webp",
  // text card width)
  Width: "480px",
  // image card width and height
  imageHeight: "342px",
  imageWidth: "560px",
  reverse: true,
};

// section GetQuote1
const getQuoteData1 = {
  color: "#F9F9F9",
  title: <>Ship Heavy Equipment's With Us </>,
  text: (
    <>
      Big or Small, We Ship it All - Heavy Equipment Shipping with Expertise and
      Care.
    </>
  ),
  buttonLink: "tel:+18882498840",
  buttonText: "Call At (888) 249-8840",
  buttonIcon: <PhoneAndroidIcon />,
};

// section WhyChoose
const heavyShippingSliderData = [
  {
    icon: WorkspacePremiumIcon,
    title: "Experience",
    text: `
US Car-Go has been in business for so long that we have the knowledge and experience to handle even the most difficult auto shipping jobs. We have the tools and people to handle any kind of freight, no matter how big or small it is.
    `,
  },
  {
    icon: EngineeringIcon,
    title: "Safety",
    text: `
  Shipping heavy equipment can be dangerous, but safety is very important to us. Our team is trained to handle all kinds of equipment, and they use the latest safety practices and tools to make sure your vehicles comes safely and securely.
    `,
  },
  {
    icon: TuneIcon,
    title: "Flexibility",
    text: `
   US Car-Go is an Auto transport carrier. We know that every transportation is different, and we're ready to work with you to find the best way to ship your car. We can meet your needs, whether you need door-to-door service, special treatment, or a place to store your items.
    `,
  },
  {
    icon: AttachMoneyIcon,
    title: "Competitive Pricing",
    text: `
 construction equipment hauling can be pricey, but we have low prices that are sure to fit your budget. We also have different shipping choices so that you can find the most cost-effective one.
    `,
  },
  {
    icon: HeadsetMicIcon,
    title: "Customer Service",
    text: `
   Customer service is a very important part of what we do. Our team is here for extended hours to answer questions and give you information on your order. You can also check your package online, so you can keep an eye on it in real time.
    `,
  },
];

// name: MotorcycleShipping
// path: motorcycle-shipping

// section TransportServices
const transportServicesData2 = {
  background: "/assets/motorcycle-shipping/transport_services_background.jpg",
  title: (
    <>
      We Make Your Motorcycle Shipping <br />{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Easy and Convenient.
      </Box>
    </>
  ),
  text: "If you’re looking for a safe and reliable way for shipping a motorcycle, you can count on US Car-Go! We can help you ship your bike whether you need to move it across the city or the country. We understand that your motorcycle is not just a mode of transportation, but a cherished possession that brings you joy and pride. That’s why we take great care in handling your motorcycle with the utmost respect. Our team of skilled drivers will make sure that your bike is loaded, transported, and unloaded safely. Plus, we use the latest equipment and technology to ensure your bike is well-protected throughout the entire process.",
  text1: true,
};

// section OurServiceProgress
const motorcycleShippingSliderData = [
  {
    title: "Get a Quote and Book",
    text: `
   To give you a fair price for shipping your motorcycle, we’ll need some information from you. We’d like to know where you want to send it, what type of motorcycle you have, how you want it shipped, and how far it needs to travel. Once we have all of this information, we can give you an accurate quote. Does that sound good to you?
      `,
  },
  {
    title: "Prepare Your Motorcycle for Shipping",
    text: `
     Before shipping motorcycle cross country, you’ll need to prepare it. To get your vehicle ready, you’ll need to do a few things. First, give it a good cleaning and check for any damage. Take pictures to keep a record. Next, make sure to drain the gas tank until it’s about a quarter full, remove any loose items, and disconnect the battery. This will help keep your vehicle in good condition.`,
  },
  {
    title: "Choose a Shipping Method",
    text: `
 When it comes to your motorcycle delivery Services, there are a few options to choose from. Open transit is the cheapest choice, but your bike won’t be protected from the weather. Enclosed transportation is a bit more expensive, but it’s safer. If you really want to ensure the safety of your motorcycle, you can choose crate shipping, but it’s the most expensive option.
      `,
  },
  {
    title: "Schedule the Pickup and Delivery",
    text: `
 After you choose your preferred shipping method, you need to schedule a pickup and delivery. This means you’ll need to give us the addresses for where we should pick up and drop off the package, as well as let us know the days and times that work best for you.
      `,
  },
  {
    title: "Track Your Transportation",
    text: `
Don’t worry! You can easily monitor the location of your motorbike during transit. We’ll update you regularly about its whereabouts and estimated delivery time.
      `,
  },
  {
    title: "Receive Your Motorcycle",
    text: `
After arriving at your destination of your motorcycle, it’s a good idea to give it a quick check for any damages. If you see anything that’s not right, you can file a claim. But if everything looks good, it’s time to start enjoying your motorcycle in its new home! Have fun and be safe out there!
      `,
  },
];

// section ClientsSaySlider
const clientsSaySliderData1 = {
  background: "/assets/motorcycle-shipping/clients_say_slider_background.jpg",
  backgroundColor: false,
  title: (
    <>
      What Our{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Clients Say!!​
      </Box>
    </>
  ),
  subTitle: "",
  slidesPerView: 3,
  sliderData: [
    {
      mini: true,
      description:
        "This car transport company is very good. I use them and they were on-time. Their prices are very reasonable and they get the job done if I could’ve given them more than five stars I would’ve I would’ve given them 10, so God bless Max. He is a really great guy and I am very happy and very satisfied with the service that I received. They delivered my car perfectly. Thank you so much, Molly.",
      userName: "Molly Adams",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Us Cargo helps me alot to in shipping, It was my right decision to choose this come become none of the other company was able to move my vehicle for week, only chris and US Cargo was there for my help, I'm really thankful to them.",
      userName: "Tiko lomtatidze",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      mini: true,
      description:
        "I highly recommend US CARGO and special thanks to Brian Jones for helping me in my shipment process. I shipped my car on urgent basis helped me in getting the driver and explained every step properly. Thanks Brian and Us Cargo!",
      userName: "Don Young",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Lowest price! Fast! Reliable! I had to ship my car from Georgia to Texas and comparing prices they were the lowest out there, they were very attentive and fast!",
      userName: "Melanie Dominguez",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
  ],
};

// section FullyLicensed14
const fullyLicensedCards14 = {
  cardTitle: (
    <>
      What US Car-Go
      <Box component={"span"} sx={{ color: "#E01933" }}>
        {" "}
        Offers.
      </Box>
    </>
  ),
  cardText: (
    <>
      We're here to assist you with all of your{" "}
      <strong>shipping motorcycle</strong> requirements! We can take care of
      transporting one bicycle or a whole group of bikes for you! You get to
      decide whether you want your bike shipped in an open or enclosed manner,
      depending on your preferences and budget. Don't worry though, our friendly
      customer support team is available to help you out with any questions you
      may have, and they'll keep you updated on the status of your cargo. We
      believe it's important to keep you informed every step of the way!
    </>
  ),
  cardImage: "/assets/motorcycle-shipping/fully_licensed_card.webp",
  // text card width)
  Width: "570px",
  // image card width and height
  imageHeight: "410px",
  imageWidth: "570px",
  reverse: true,
};

// section useDifferent
const useDifferentData = {
  title: (
    <>
      What is the Average Cost to <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Ship A Motorcycle Cross Country?​
      </Box>
    </>
  ),
  text: (
    <>
      The price of <strong>shipping a motorcycle</strong> might change based on
      a number of variables. When calculating the price of shipping a motorbike,
      it's important to bear in mind the following:
    </>
  ),
};

// section GetQuote
const getQuoteData4 = {
  title: (
    <>
      Get Hassle-free and Safe{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Motorcycle Shipping
      </Box>{" "}
      with US Car-Go
    </>
  ),
  text: (
    <>
      From One Bike Lover to Another - Safe and Secure{" "}
      <em>
        <strong>Motorcycle Shipping</strong>
      </em>
      with US Car-Go.
    </>
  ),
  buttonLink: "tel:+18882498840",
  buttonText: "Call At (888) 249-8840",
  buttonIcon: <PhoneAndroidIcon />,
};

// section WhyChoose
const motorcycleShippingRightSliderData = [
  {
    icon: LocalShippingIcon,
    title: "Cross Country Motorcycle Shipping.",
    text: `
 At US Car-Go, we offer domestic motorcycle shipping services that include moving your motorbike from one part of the country to another. If you need help with the transportation of your motorbike, we've got you covered. Reach out to us today to 
      `,
  },
  {
    icon: PersonIcon,
    title: "Experienced and Professional Service",
    text: `
   US Car-Go has been helping people transport their bikes from one place to another for a long time. We're really good at handling all kinds of motorbikes, whether they're meant for riding on the road or off-road. You can trust our professional staff to take care of your bike and make sure it gets to its destination safely.
      `,
  },
  {
    icon: WorkspacePremiumIcon,
    title: "State-of-the-Art Equipment",
    text: `
    At US Car-Go, we take your motorcycle's safety seriously. That's why we use top-notch equipment like trailers and tie-down systems that are specially made for motorcycle transportation. You can trust us to keep your bike safe and secure throughout the entire process.
      `,
  },
  {
    icon: TextSnippetIcon,
    title: "Comprehensive Insurance Coverage",
    text: `
  Don't worry about your bike getting damaged during shipping! We've got you covered with comprehensive insurance. This means that if anything happens to your bike while it's in transit, you won't have to pay a dime for any repairs. Your bike's in good hands with us.
      `,
  },
  {
    icon: MapIcon,
    title: "Door-to-Door Motorcycle Shipping.",
    text: `
  At US Car-Go, we understand that transporting your motorbike can be stressful. That's why we offer a convenient service that brings the transportation right to your doorstep. We'll come to your location to pick up your motorbike and safely deliver it to its final destination. You can trust us to handle your precious vehicle with care and ensure it arrives in excellent condition. With our service, you can relax and let us take care of everything.
      `,
  },
  {
    icon: AccessTimeIcon,
    title: "Timely Delivery",
    text: `
   We understand that your time is precious, that's why we offer dependable and efficient motorbike transport services. Our top priority is to deliver your motorbike to you as quickly as possible without compromising on safety or quality.
      `,
  },
  {
    icon: AttachMoneyIcon,
    title: "Affordable Rates",
    text: `
  Welcome to US Car-Go! We specialize in hassle-free and budget-friendly motorcycle transportation services that are perfect for everyone. You don't have to worry about any upfront payments, and we offer a variety of great prices for you to choose from. If you need to transport multiple bikes, we've got you covered with a special discount! And if you're a military member, you can enjoy an extra special deal just for you. Contact us now to transport a motorcycle.
      `,
  },
];

export {
  blogPostData,
  HowGetDataCard,
  wantToKnowData,
  whatAreTheSliderData,
  fullyLicensedCards,
  enclosedClientsSaySliderData,
  fullyLicensedCards2,
  faqs,
  getQuoteData,
  transportServicesData,
  fullyLicensedCards3,
  fullyLicensedCards4,
  fullyLicensedCards5,
  clientsSaySliderData2,
  doorToDoorSliderData,
  getQuoteData2,
  getQuoteData3,
  fullyLicensedCards6,
  clientsSaySliderData3,
  fullyLicensedCards7,
  fullyLicensedCards8,
  fullyLicensedCards9,
  wantToKnowData1,
  expeditedCarSliderData,
  transportServicesData1,
  fullyLicensedCards10,
  clientsSaySliderData,
  fullyLicensedCards11,
  fullyLicensedCards12,
  fullyLicensedCards13,
  getQuoteData1,
  heavyShippingSliderData,
  transportServicesData2,
  motorcycleShippingSliderData,
  clientsSaySliderData1,
  fullyLicensedCards14,
  useDifferentData,
  getQuoteData4,
  motorcycleShippingRightSliderData,
};
// THE END - Don't touch this code 💀