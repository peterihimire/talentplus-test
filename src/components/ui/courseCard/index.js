import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import prodImg from "../../../assets/images/product8.png";

// import {
//   ShoppingCartOutlined,
//   FavoriteBorderOutlined,
//   Search,
// } from "@mui/icons-material";

import "./styles.scss";

const CourseCard = ({
  id,
  addProd,
  infoProd,
  likeProd,
  image,
  title,
  price,
  slash,
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
        <ul className={`product-actions`}>
          <li onClick={addProd} className={`product-act`}>
            {/* <ShoppingCartOutlined className={`shop-icon`} /> */}
          </li>
          <li onClick={infoProd} className={`product-act`}>
            {/* <Search className={`shop-icon`} /> */}
          </li>
          <li onClick={likeProd} className={`product-act`}>
            {/* <FavoriteBorderOutlined className={`shop-icon`} /> */}
          </li>
        </ul>
        {/* <div className={`title-price`}>
        <h5>{title}</h5>
        <h6>
          ${price}
          <span>${price}</span>
        </h6>
      </div> */}
      </div>
      <div className={`title-price`}>
        <h5>{title}</h5>
        <h6>
          ${price}
          <span>${price}</span>
        </h6>
      </div>
    </div>
  );
};

export default CourseCard;
