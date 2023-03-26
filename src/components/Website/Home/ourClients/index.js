import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
// import pix1 from "../../../../assets/images/cat1.webp";
// import pix2 from "../../../../assets/images/cat2.webp";
// import pix3 from "../../../../assets/images/cat3.webp";

import { ReactComponent as Zoom } from "../../../../assets/images/zoom.svg";
import { ReactComponent as Monday } from "../../../../assets/images/monday.svg";
import { ReactComponent as Stripe } from "../../../../assets/images/stripe.svg";
// import { ReactComponent as Twitter } from "../../../assets/images/twitter.svg";
// import { ReactComponent as Discord } from "../../../assets/images/discord.svg";

import "./styles.scss";

SwiperCore.use([Navigation, Autoplay]);

const OurClients = () => {
  return (
    <section className={`our-clients`}>
      <div className="wrapper">
        <div className={`companies-wrapper`}>
          <div className={`company-item`}>
            <Zoom width="170px" />
          </div>
          <div className={`company-item`}>
            <Monday width="170px" />
          </div>
          <div className={`company-item`}>
            <Stripe width="170px" />
          </div>
          <div className={`company-item`}>
            <Zoom width="170px" />
          </div>
          <div className={`company-item`}>
            <Zoom width="170px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
