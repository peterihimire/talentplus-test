import React, { useCallback } from "react";
import heroImg from "../../../../assets/images/hero-img.png";
// import heroImg from "../../../../assets/images/product7.png";
// import heroImg2 from "../../../../assets/images/product8.png";
import { Link } from "react-router-dom";
import boyWatching from "../../../../assets/images/boy-watching.png";

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
            <div className={`reason-item`}>ONE</div>
            <div className={`reason-item`}>TWO</div>
            <div className={`reason-item`}>THREE</div>
            <div className={`reason-item`}>FOUR</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
