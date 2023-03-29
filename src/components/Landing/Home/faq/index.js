import React, { useState } from "react";
import { ReactComponent as Plus } from "../../../../assets/images/plus.svg";
import { ReactComponent as Minus } from "../../../../assets/images/minus.svg";
import { FAQS } from "../../../../utils/data";

import "./styles.scss";

const Faq = () => {
  const [clicked, setClicked] = useState(1);

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
            {FAQS.map((faq, index) => {
              return (
                <li key={index}>
                  <button onClick={() => toggler(faq.id)}>
                    <div className={`head-info`}>
                      <span>{faq.title}</span>
                    </div>
                    <div className={`rotate`}>
                      {clicked === faq.id ? <Minus /> : <Plus />}
                    </div>
                  </button>

                  <div
                    className={`${`content`} ${clicked === faq.id && `show`}`}
                  >
                    <p className={`subHead`}>{faq.content}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
