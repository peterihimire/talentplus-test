import React, { useCallback } from "react";
import heroImg from "../../../../assets/images/hero-img.png";
import { ReactComponent as ArrowUpIcon } from "../../../../assets/images/arrow-outward.svg";
import { ReactComponent as ArrowCurlIcon } from "../../../../assets/images/curl-arrow-down.svg";
import { ReactComponent as PreviewStacksIcon } from "../../../../assets/images/people-stacks-num.svg";


import "./styles.scss";

const WhyAreBest = () => {
  return (
    <section className={`hero-header`}>
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <h1>
              Grow your skills to <br />
              advance your career <br />
              path
            </h1>

            <p>
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>

            <div className={`get-started`}>
              <button className="btn-secondary  btn-large btn-span">
                Get started now{" "}
                <span>
                  <ArrowUpIcon />
                </span>
              </button>
              <button className="btn-white  btn-medium">Enroll Now</button>
            </div>

            <PreviewStacksIcon />

            <ArrowCurlIcon className={`curl-arrow`} />
          </div>
          <div className={`rightt`}>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAreBest;
