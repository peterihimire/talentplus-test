import React from "react";
import boyWatching from "../../../../assets/images/boy-watching.png";
import { ReactComponent as DollarIcon } from "../../../../assets/images/dollar-orange.svg";

import "./styles.scss";

const Hero = () => {
  return (
    <section className={`why-best`}>
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
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
              <DollarIcon className={`reason-icon`} />
              <p className={`for-head`}>Experienced mentors</p>
              <p>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
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
              <DollarIcon className={`reason-icon`} />
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
