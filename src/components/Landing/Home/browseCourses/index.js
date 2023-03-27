import React, { useState, useEffect } from "react";
import CustomTab from "../../../ui/customTab";
import CourseCard from "../../../ui/courseCard";
import product1 from "../../../../assets/images/intro-marketing.png";
import pix from "../../../../assets/images/client-1.png";

import "./styles.scss";

const BrowseCourses = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const courses = [
    {
      id: "01",
      price: 25,
      time: "10hrs 50mins",
      category: "marketing",
      title: "Introduction to live  marketing analysis",
      instructor: "Adam smith",
      lessons: 5,
      star: 4.7,
      reviews: 2.5,
      image: product1,
      pix: pix,
    },
    {
      id: "02",
      price: 45,
      time: "10hrs 50mins",
      category: "marketing",
      title: "Introduction to  new marketing audience ",
      instructor: "Adam smith",
      lessons: 5,
      star: 4.7,
      reviews: 2.5,
      image: product1,
      pix: pix,
    },
    {
      id: "03",
      price: 25,
      time: "10hrs 50mins",
      category: "marketing",
      title: "Introduction to javascript, git & GitHub",
      instructor: "Adam smith",
      lessons: 5,
      star: 4.7,
      reviews: 2.5,
      image: product1,
      pix: pix,
    },
    {
      id: "04",
      price: 25,
      time: "10hrs 50mins",
      category: "marketing",
      title: "Introduction to outroom  marketing analysis",
      instructor: "Adam smith",
      lessons: 5,
      star: 4.7,
      reviews: 2.5,
      image: product1,
      pix: pix,
    },
    {
      id: "05",
      price: 25,
      time: "10hrs 50mins",
      category: "marketing",
      title: "Introduction to html, css & bootstrap",
      instructor: "Adam smith",
      lessons: 5,
      star: 4.7,
      reviews: 2.5,
      image: product1,
      pix: pix,
    },
    {
      id: "06",
      price: 25,
      time: "10hrs 50mins",
      category: "marketing",
      title: "Introduction to user research in ux design",
      instructor: "Adam smith",
      lessons: 5,
      star: 4.7,
      reviews: 2.5,
      image: product1,
      pix: pix,
    },
  ];

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
              <div className={`tab-content`}>
                {tabIndex === 1 && (
                  <div className={`grid-container`}>
                    {courses.map((course) => {
                      return (
                        <CourseCard
                          id={course.id}
                          title={course.title}
                          price={course.price}
                          time={course.time}
                          category={course.category}
                          instructor={course.instructor}
                          lessons={course.lessons}
                          star={course.star}
                          reviews={course.reviews}
                          image={course.image}
                          pix={course.pix}
                        />
                      );
                    })}
                  </div>
                )}
                {tabIndex === 2 && (
                  <div className={`grid-container`}>
                    {courses.map((course) => {
                      return (
                        <CourseCard
                          id={course.id}
                          title={course.title}
                          price={course.price}
                          time={course.time}
                          category={course.category}
                          instructor={course.instructor}
                          lessons={course.lessons}
                          star={course.star}
                          reviews={course.reviews}
                          image={course.image}
                          pix={course.pix}
                        />
                      );
                    })}
                  </div>
                )}

                {tabIndex === 3 && (
                  <div className={`grid-container`}>
                    {courses.map((course) => {
                      return (
                        <CourseCard
                          id={course.id}
                          title={course.title}
                          price={course.price}
                          time={course.time}
                          category={course.category}
                          instructor={course.instructor}
                          lessons={course.lessons}
                          star={course.star}
                          reviews={course.reviews}
                          image={course.image}
                          pix={course.pix}
                        />
                      );
                    })}
                  </div>
                )}
                {tabIndex === 4 && (
                  <div className={`grid-container`}>
                    {courses.map((course) => {
                      return (
                        <CourseCard
                          id={course.id}
                          title={course.title}
                          price={course.price}
                          time={course.time}
                          category={course.category}
                          instructor={course.instructor}
                          lessons={course.lessons}
                          star={course.star}
                          reviews={course.reviews}
                          image={course.image}
                          pix={course.pix}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </CustomTab>
          </div>
          <div className={`btn-wrapper`}>
            <button className={`btn-primary btn-large`}>
             Explore all courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseCourses;
