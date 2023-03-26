import React, { useState, useEffect } from "react";
import CustomTab from "../../../ui/customTab";
import CourseCard from "../../../ui/courseCard";
import product1 from "../../../../assets/images/intro-marketing.png";

import "./styles.scss";

const BrowseCourses = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const tabHeaders = [
    {
      name: "All Categories",
      id: 1,
    },
    {
      name: "Design",
      id: 2,
    },
    {
      name: "Development",
      id: 3,
    },
    {
      name: "Marketing",
      id: 4,
    },
  ];
  return (
    <section className={`browse-courses`}>
      <div className="wrapper">
        <div>
          <div className={`featured-head`}>
            <h3>Browse our popular courses</h3>
            <p>
              High-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>
        </div>

        <div className={`cat-carousel`}>
          <div>
            <CustomTab
              activeTab={tabIndex}
              clicked={(index) => tabIndexHandler(index)}
              headers={tabHeaders}
            >
              <div className={`tabContent`}>
                {tabIndex === 1 && (
                  <div className={`coursse-grid`}>
                    <CourseCard
                      title={"Algorithm and Data Structures"}
                      // detail={product.detail}
                      // infoProd={openModalHandler}
                      // addProd={addProductHandler}
                      // likeProd={likeProductHandler}
                      id={1}
                      image={product1}
                      // price={product.price}
                    />
                  </div>
                )}
                {tabIndex === 2 && (
                  <div>
                    <p>Wallet Balance</p>
                    <h3>$0.00</h3>
                  </div>
                )}

                {tabIndex === 3 && (
                  <div>
                    <p>Wallet Balance</p>
                    <h3>$1.00</h3>
                  </div>
                )}
                {tabIndex === 4 && (
                  <div>
                    <p>Wallet Balance</p>
                    <h3>$0.00</h3>
                  </div>
                )}
              </div>
            </CustomTab>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseCourses;
