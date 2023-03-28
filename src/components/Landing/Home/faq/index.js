import React, { useState } from "react";
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
        <div className={`faq-head`}>
          <h3>Frequently Asked Questions </h3>
          <p>
            High-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>

        <div className={`accordion-wrapper`}>
          <ul className={`accordion`}>
            <li>
              <button onClick={() => toggler(0)}>
                <div className={`head-info`}>
                  <span>Is there a free plan available?</span>
                </div>
                <div className={`rotate`}>
                  {clicked === 0 ? <Minus /> : <Plus />}
                </div>
              </button>

              <div className={`${`content`} ${clicked === 0 && `show`}`}>
                <p className={`subHead`}>
                  High-defination video is video of higher resolution and
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
                <div className={`head-info`}>
                  <span>Can I change my plan later?</span>
                </div>
                <div className={`rotate`}>
                  {clicked === 1 ? <Minus /> : <Plus />}
                </div>
              </button>

              <div className={`${`content`} ${clicked === 1 && `show`}`}>
                <p className={`subHead`}>
                  High-defination video is video of higher resolution and
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
                <div className={`head-info`}>
                  <span>Are the courses lifetime?</span>
                </div>
                <div className={`rotate`}>
                  {clicked === 2 ? <Minus /> : <Plus />}
                </div>
              </button>

              <div className={`${`content`} ${clicked === 2 && `show`}`}>
                <p className={`subHead`}>
                  High-defination video is video of higher resolution and
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
                <div className={`head-info`}>
                  <span>Do I get certified after taking courses?</span>
                </div>
                <div className={`rotate`}>
                  {clicked === 3 ? <Minus /> : <Plus />}
                </div>
              </button>

              <div className={`${`content`} ${clicked === 3 && `show`}`}>
                <p className={`subHead`}>
                  High-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition. hbuild your future with our quality education. the
                  best and largest all-in-one online tutoring platform in the
                  worldd definition.
                </p>
              </div>
            </li>

            <li>
              <button onClick={() => toggler(4)}>
                <div className={`head-info`}>
                  <span>How do I reach out to mentors?</span>
                </div>
                <div className={`rotate`}>
                  {clicked === 4 ? <Minus /> : <Plus />}
                </div>
              </button>

              <div className={`${`content`} ${clicked === 4 && `show`}`}>
                <p className={`subHead`}>
                  High-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition. hbuild your future with our quality education. the
                  best and largest all-in-one online tutoring platform in the
                  worldd definition.
                </p>
              </div>
            </li>
            <li>
              <button onClick={() => toggler(5)}>
                <div className={`head-info`}>
                  <span>Do we get job ready after taking courses?</span>
                </div>
                <div className={`rotate`}>
                  {clicked === 5 ? <Minus /> : <Plus />}
                </div>
              </button>

              <div className={`${`content`} ${clicked === 5 && `show`}`}>
                <p className={`subHead`}>
                  High-defination video is video of higher resolution and
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
