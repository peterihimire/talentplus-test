import React, { useState } from "react";
// import Accordion from "../../../ui/accordion";
import { ReactComponent as Plus } from "../../../../assets/images/plus.svg";
import { ReactComponent as Minus } from "../../../../assets/images/minus.svg";

import "./styles.scss";

const Faq = () => {
  const [clicked, setClicked] = useState(0);

  const toggler = (index) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };
  return (
    <section className={`faq`}>
      <div className="wrapper">
        <div className={`newsletter-head`}>
          <h3>Frequently Asked Questions </h3>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>

        <div className={`accordion-wrapper`}>
          <ul className={`accordion`}>
            <li>
              <button onClick={() => toggler(0)}>
                <div className={`headInfo`}>
                  <h4>Frequency Asked Questions?</h4>
                </div>
                <div className={`rotate`}>
                  {clicked === 0 ? <Plus /> : <Minus />}
                </div>
              </button>

              <div className={`${`content`} ${clicked === 0 && `show`}`}>
                <p className={`subHead`}>
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition. hbuild your future with our quality education. the
                  best and largest all-in-one online tutoring platform in the
                  worldd definition.
                </p>
              </div>
            </li>

            <li>
              <button onClick={() => toggler(1)}>
                <div className={`headInfo`}>
                  <h4 className={`difficulty`}>Frequency Asked Questions?</h4>
                </div>
                <div className={`rotate`}>
                  {clicked === 1 ? <Plus /> : <Minus />}
                </div>
              </button>

              <div className={`${`content`} ${clicked === 1 && `show`}`}>
                <p className={`subHead`}>
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition. hbuild your future with our quality education. the
                  best and largest all-in-one online tutoring platform in the
                  worldd definition.
                </p>
              </div>
            </li>

            <li>
              <button onClick={() => toggler(2)}>
                <div className={`headInfo`}>
                  <h4 className={`difficulty`}>Frequency Asked Questions?</h4>
                </div>
                <div className={`rotate`}>
                  {clicked === 2 ? <Plus /> : <Minus />}
                </div>
              </button>

              <div className={`${`content`} ${clicked === 2 && `show`}`}>
                <p className={`subHead`}>
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition. hbuild your future with our quality education. the
                  best and largest all-in-one online tutoring platform in the
                  worldd definition.
                </p>
              </div>
            </li>

            <li>
              <button onClick={() => toggler(3)}>
                <div className={`headInfo`}>
                  <h4 className={`difficulty`}>Frequency Asked Questions?</h4>
                </div>
                <div className={`rotate`}>
                  {clicked === 3 ? <Plus /> : <Minus />}
                </div>
              </button>

              <div className={`${`content`} ${clicked === 3 && `show`}`}>
                <p className={`subHead`}>
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition. hbuild your future with our quality education. the
                  best and largest all-in-one online tutoring platform in the
                  worldd definition.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
