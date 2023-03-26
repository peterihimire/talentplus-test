import React, { useCallback } from "react";
// import heroImg from "../../../../assets/images/hero-img.png";
// import heroImg from "../../../../assets/images/product7.png";
// import heroImg2 from "../../../../assets/images/product8.png";
import { Link } from "react-router-dom";
import guyHeadset from "../../../../assets/images/guy-on-headset.png";

import "./styles.scss";

const HighQuality = () => {
  return (
    <section className={`high-quality`}>
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <h3>
              High quality video, audio
              <br />
              and live classes
            </h3>

            <p>
              High-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>

            <div className={`get-started`}>
              <button className="btn-primary  btn-medium ">Enroll Now</button>
            </div>

            <div className={`get-started`}>
              <div className={`reason-item`}>ONE</div>
              <div className={`reason-item`}>TWO</div>
              <div className={`reason-item`}>THREE</div>
              <div className={`reason-item`}>FOUR</div>
            </div>
          </div>
          <div className={`rightt`}>
            <img src={guyHeadset} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighQuality;
