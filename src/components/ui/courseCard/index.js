import React from "react";
import { ReactComponent as TimeIcon } from "../../../assets/images/schedule.svg";
import { ReactComponent as BookIcon } from "../../../assets/images/menu_book.svg";
import { ReactComponent as StarIcon } from "../../../assets/images/star.svg";

import "./styles.scss";

const CourseCard = ({
  id,
  instructor,
  lessons,
  star,
  category,
  image,
  title,
  price,
  reviews,
  time,
  pix,
}) => {
  return (
    <div data-aos="zoom-in" className={`course-card`} key={id}>
      <div className={`image-div`}>
        <img src={image} alt="" />
      </div>

      <div className={`cat-star`}>
        <div className={`category-div`}>
          <p>{category}</p>
        </div>

        <div className={`star-review`}>
          <p>
            {star} <StarIcon className={`main-icon`} />
            <span>{`(${reviews}k+)`}</span>
          </p>
        </div>
      </div>
      <h5>{title}</h5>
      <div className={`time-lesson`}>
        <div className={`icon-span`}>
          <TimeIcon className={`main-icon`} />
          <span>{time}</span>
        </div>

        <div className={`icon-span`}>
          <BookIcon className={`main-icon`} />
          <span>{lessons} Lessons</span>
        </div>
      </div>
      <div className={`instructor-price`}>
        <div className={`instructor-wrapper`}>
          <img src={pix} alt="" />
          <span>{instructor}</span>
        </div>
        <h6>${price}.00</h6>
      </div>
    </div>
  );
};

export default CourseCard;
