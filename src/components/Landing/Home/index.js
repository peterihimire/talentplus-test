import React from "react";
import HomeHero from "./hero";
import BrowseCourses from "./browseCourses";
import HighQuality from "./highQuality";
import OurClients from "./ourClients";
import Testimonials from "./testimonials";
import Faq from "./faq";
import JoinCommunity from "./joinCommunity";
import WeAreBest from "./weAreBest";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className={`homepage`}>
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
    </div>
  );
};

export default HomePage;
