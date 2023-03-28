import React from "react";
import { ReactComponent as Zoom } from "../../../../assets/images/zoom.svg";
import { ReactComponent as Monday } from "../../../../assets/images/monday.svg";
import { ReactComponent as Stripe } from "../../../../assets/images/stripe.svg";
import { ReactComponent as Slack } from "../../../../assets/images/slack.svg";
import { ReactComponent as Dropbox } from "../../../../assets/images/dropbox.svg";

import "./styles.scss";

const OurClients = () => {
  return (
    <section className={`our-clients`}>
      <div className="wrapper">
        <div className={`companies-wrapper`}>
          <div className={`company-item`}>
            <Zoom className={`icon-width`} />
          </div>
          <div className={`company-item`}>
            <Monday className={`icon-width`} />
          </div>
          <div className={`company-item`}>
            <Stripe className={`icon-width`} />
          </div>
          <div className={`company-item`}>
            <Slack className={`icon-width`} />
          </div>
          <div className={`company-item`}>
            <Dropbox className={`icon-width`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
