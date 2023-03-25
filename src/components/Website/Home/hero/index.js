import React, { useCallback } from "react";
import heroImg from "../../../../assets/images/hero-img.png";
// import heroImg from "../../../../assets/images/product7.png";
// import heroImg2 from "../../../../assets/images/product8.png";
import { Link } from "react-router-dom";

import "./styles.scss";

const Hero = () => {
  return (
    <section className={`hero-header`}>
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <h1>
              Grow your skills <br />
              to advance your career <br />
              path
            </h1>

            <p>
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>

            <div className={`get-started`}>
              <button className="btn-secondary  btn-large indicato">
                Get started now
              </button>
              <button className="btn-white  btn-medium indicato">
                Enroll Now
              </button>
            </div>
          </div>
          <div className={`rightt`}>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
