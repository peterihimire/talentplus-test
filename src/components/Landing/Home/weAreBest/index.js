import React from "react";
import boyWatching from "../../../../assets/images/boy-watching.png";
import { ReactComponent as DollarIcon } from "../../../../assets/images/dollar-orange.svg";
import { ReactComponent as MeetingIcon } from "../../../../assets/images/one-on-one.svg";
import { ReactComponent as PeopleIcon } from "../../../../assets/images/people.svg";
import { ReactComponent as RssIcon } from "../../../../assets/images/rss.svg";
import { ReactComponent as WaveIcon } from "../../../../assets/images/wave-asset-orange.svg";
import { ReactComponent as TriangleIcon } from "../../../../assets/images/green-triangle-assets.svg";
import { ReactComponent as CircleIcon } from "../../../../assets/images/tiny-purple-circle.svg";

import "./styles.scss";

const Hero = () => {
  return (
    <section className={`why-best`}>
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <TriangleIcon className={`triangle-icon`} />
            <h3>
              This is Why we are Best
              <br />
              From Others
            </h3>

            <p>
              High-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>

            <div className={`img-wrapper`}>
              <img src={boyWatching} alt="" />
            </div>
          </div>
          <div className={`rightt`}>
            <WaveIcon className={`wave-icon`} />
            <CircleIcon className={`circle-icon`} />

            <div className={`reason-item`}>
              <DollarIcon className={`reason-icon`} />
              <p className={`for-head`}>Experienced mentors</p>
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
            <div className={`reason-item`}>
              <PeopleIcon className={`reason-icon`} />
              <p className={`for-head`}>Experienced mentors</p>
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
            <div className={`reason-item`}>
              <MeetingIcon className={`reason-icon`} />
              <p className={`for-head`}>Experienced mentors</p>
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
            <div className={`reason-item`}>
              <RssIcon className={`reason-icon`} />
              <p className={`for-head`}>Experienced mentors</p>
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
