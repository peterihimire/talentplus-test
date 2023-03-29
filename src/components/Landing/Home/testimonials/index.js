import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import { TESTIMONIALS } from "../../../../utils/lists";

import "./styles.scss";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const Testimonials = () => {
  const pagination = {
    el: ".custom-pag",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="'  ${className} '">  </span>`;
    },
  };
  return (
    <section className={`testimonial`}>
      <div className="">
        <div className="wrapper">
          <div className={`testimonial-head`}>
            <h3>What our clients are saying</h3>
            <p>
              High-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>
        </div>

        <div className={`testimonial-carousel`}>
          <Swiper
            breakpoints={{
              200: { slidesPerView: 1 },
              500: { slidesPerView: 1.5 },
              700: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              2500: { slidesPerView: 3 },
            }}
            spaceBetween={20}
            className="swiper-wrapper"
            pagination={pagination}
            navigation
            loop
            speed={3000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
              waitForTransition: true,
            }}
          >
            {TESTIMONIALS.map((testimony, index) => {
              return (
                <SwiperSlide>
                  <div className={`testimony-item`} key={index}>
                    <p>{testimony.testimony}</p>
                    <div className={`testimony-info`}>
                      <div className={`left`}>
                        <img alt="" src={testimony.image} />
                      </div>

                      <div className={`right`}>
                        <span>{testimony.name}</span>
                        <span>{testimony.position}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={`custom-pag`}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
