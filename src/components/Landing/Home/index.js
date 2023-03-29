import React from "react";
import HomeHero from "./hero";
import BrowseCourses from "./browseCourses";
import HighQuality from "./highQuality";
import OurClients from "./ourClients";
import Testimonials from "./testimonials";
import Faq from "./faq";
import JoinCommunity from "./joinCommunity";
import WeAreBest from "./weAreBest";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>TechTime - Home</title>
      </Helmet>

      <HomeHero />
      <OurClients />
      <HighQuality />
      <WeAreBest />
      <BrowseCourses />
      <Testimonials />
      <JoinCommunity />
      <Faq />
    </HelmetProvider>
  );
};

export default HomePage;
