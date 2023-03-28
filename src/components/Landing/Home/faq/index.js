import React, { useState } from "react";
import { ReactComponent as Plus } from "../../../../assets/images/plus.svg";
import { ReactComponent as Minus } from "../../../../assets/images/minus.svg";

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

  const FAQS = [
    {
      id: 1,
      title: "Is there a free trial available?",
      content:
        "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
    {
      id: 2,
      title: "Can I change my plan later?",
      content:
        "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
    {
      id: 3,
      title: "Are the courses lifetime?",
      content:
        "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
    {
      id: 4,
      title: "Do I get certified after taking courses?",
      content:
        "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
    {
      id: 5,
      title: "How do I reach out to mentors?",
      content:
        "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
    {
      id: 6,
      title: "Do we get job ready after taking courses?",
      content:
        "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
  ];
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
                <li>
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
