import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

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
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  //   AOS.refresh();
  // }, []);

  return (
    <div>
      <div data-aos="zoom-in" className={`course-card`} key={id}>
        <div className={`image-div`}>
          <img src={image} alt="" />
        </div>

        <div className={`cat-star`}>
          <div className={`category-div`}>
            <p>{category}</p>
          </div>

          <div>
            <p>
              {star} <StarIcon />
              <span>{`(${reviews}k+)`}</span>
            </p>
          </div>
        </div>
        <h5>{title}</h5>
        <div className={`time-lesson`}>
          <div className={`icon-span`}>
            <TimeIcon />
            <span>{time}</span>
          </div>

          <div className={`icon-span`}>
            <BookIcon />
            <span>{lessons} Lessons</span>
          </div>
        </div>
        <div className={`instructor-price`}>
          <div className={`instructor-wrapper`}>
            <img src={pix} alt="" width="40px" height="40px" />
            <span>{instructor}</span>
          </div>
          <h6>${price}.00</h6>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
