import React from "react";

import "./styles.scss";

const TestimonyCard = ({ id, image, testimony, name, position }) => {
  return (
    <div className={`testimony-item`} key={id}>
      <p>{testimony}</p>
      <div className={`testimony-info`}>
        <div className={`left`}>
          <img alt="" src={image} />
        </div>

        <div className={`right`}>
          <span>{name}</span>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
