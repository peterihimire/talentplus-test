import React, { useState } from "react";
import { ReactComponent as Plus } from "../../../assets/images/plus.svg";
import { ReactComponent as Minus } from "../../../assets/images/minus.svg";

import "./styles.scss";

const Accordion = ({ title, content, focus }) => {
  console.log(typeof focus);
  const [clicked, setClicked] = useState({ focus });
  console.log(clicked);

  const toggler = (num) => {
    if (clicked === num) {
      console.log(clicked === num);
      setClicked(null);
    } else {
      setClicked(num);
    }
  };

  return (
    <li className={`accordion-list`}>
      <button onClick={() => toggler(focus)}>
        <div className={`headInfo`}>
          <h4>{title}</h4>
        </div>
        <div className={`rotate`}>
          {clicked === focus ? <Minus /> : <Plus />}
        </div>
      </button>

      <div className={`content ${clicked === focus && "show"}`}>
        <div className={`subHead`}>{content}</div>
      </div>
    </li>
  );
};

export default Accordion;
