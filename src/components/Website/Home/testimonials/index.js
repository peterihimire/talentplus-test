import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";

import "./styles.scss";

SwiperCore.use([Navigation, Autoplay, Pagination]);

// SwiperCore.use([Pagination]);
// SwiperCore.use([Autoplay]);

const Testimonials = () => {
  const pagination = {
    el: ".custom-pag",
    clickable: true,
    renderBullet: function (index, className) {
      // return '<span class="' + className + '">' + "</span>";
      return `<span class="'  ${className} '">  </span>`;
    },
  };
  return (
    <section className={`home-brands`}>
      <div className="">
        <div className="wrapper">
          <div className={`featured-head`}>
            <h3>What our clients are saying</h3>
            <p>
              High-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>
        </div>

        <div className={`cat-carousel`}>
          <Swiper
            breakpoints={{
              200: { slidesPerView: 1 },
              500: { slidesPerView: 1 },
              700: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              2500: { slidesPerView: 3 },
            }}
            spaceBetween={20}
            slidesPerView={3.5}
            // autoHeight={true}
            // centeredSlides={true}
            className="swiper-wrapper"
            pagination={pagination}
            navigation
            loop
            speed={3000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Women</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Kids</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Life Style</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Music</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Unisex</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={`custom-pag`}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
