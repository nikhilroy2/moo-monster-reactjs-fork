import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./OpenWorldCarousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function OpenWorldCarousel(props) {
  return (
    <div id="OpenWorldCarousel">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="swiper_box_wrapper position-relative">
              <SwiperSlideCarousel></SwiperSlideCarousel>
              <div className="swiper_fixed_content">
                <h2>Open World</h2>
                <p className="text-white">
                  Adventure on this vast world, with more than 8 continents on
                  the Mooniverse waiting for you to explore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenWorldCarousel;

const SwiperSlideCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  //console.log(slideIndex);
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(e) => setSlideIndex(e.realIndex)}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={
          slideIndex === 0
            ? "start_point_swiper"
            : "" || slideIndex === 7
            ? "end_point_swiper"
            : ""
        }
      >
        <SwiperSlide>
          <img
            className="slideImg"
            src={require("../../Static/img/open-world-1.91b7fc9.png")}
            alt=""
          />
          <div className="swiper_description">The Mid World</div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slideImg"
            src={require("../../Static/img/open-world-2.1092f48.png")}
            alt=""
          />
          <div className="swiper_description">Ocean Pearl</div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slideImg"
            src={require("../../Static/img/open-world-3.050c985.png")}
            alt=""
          />
          <div className="swiper_description">Angel Eye</div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="slideImg"
            src={require("../../Static/img/open-world-4.51b3ebd.png")}
            alt=""
          />
          <div className="swiper_description">The Lost Gate</div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <img
            className="slideImg"
            src={require("../../Static/img/open-world-5.8be8280.png")}
            alt=""
          />
          <div className="swiper_description">Good Hope</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="slideImg"
            src={require("../../Static/img/open-world-6.39949c9.png")}
            alt=""
          />
          <div className="swiper_description">Ersa Guardian</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="slideImg"
            src={require("../../Static/img/open-world-7.01ad987.png")}
            alt=""
          />
          <div className="swiper_description">New Horizon</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="slideImg"
            src={require("../../Static/img/open-world-8.a2a2eef.png")}
            alt=""
          />
          <div className="swiper_description">Hell Gate</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
