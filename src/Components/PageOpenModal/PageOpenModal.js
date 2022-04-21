import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import "./PageOpenModal.css";
function PageOpenModal(props) {
  const social_list_monster_box = [
    {
      id: 1,
      link: "#",
      name: "facebook",
      img: require("../../Static/img/fb.png"),
    },
    {
      id: 2,
      link: "#",
      name: "",
      img: require("../../Static/img/twitter.png"),
    },
    {
      id: 3,
      link: "#",
      name: "",
      img: require("../../Static/img/youtube.png"),
    },
    {
      id: 4,
      link: "#",
      name: "",
      img: require("../../Static/img/mice.png"),
    },
    {
      id: 5,
      link: "#",
      name: "",
      img: require("../../Static/img/telegram.png"),
    },
    {
      id: 6,
      link: "#",
      name: "",
      img: require("../../Static/img/discord.png"),
    },
    {
      id: 7,
      link: "#",
      name: "",
      img: require("../../Static/img/book.png"),
    },
  ];

  return (
    <div id="PageOpenModal">
      {/* Modal */}
      <div
        className="modal fade "
        id="page_loading_modal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close text-white"
                data-mdb-dismiss="modal"
                aria-label="Close"
              >
                x
              </button>
            </div>
            <div className="modal-body p-3">
              <ModalSwiper></ModalSwiper>
            </div>
            <div className="modal-footer d-block">
              <div className="btn_control d-flex justify-content-center flex-wrap my-3">
                <a href="#" className="btn btn_primary px-3 px-sm-5 me-3">
                  🥚 Buy Eggs
                </a>

                <a href="#" className="btn btn_secondary px-3 px-sm-5">
                  <img
                    className="me-2"
                    style={{ height: "24px" }}
                    src={require("../../Static/img/ic-moo-token.8d1a1ee.png")}
                    alt="img"
                  />
                  Buy $MOO
                </a>
              </div>

              <ul className="list-unstyled flex-wrap social_list d-flex justify-content-center">
                {social_list_monster_box.map((v) => {
                  return (
                    <li key={v.id} className="p-2">
                      <a href={v.link}>
                        <img src={v.img} alt="img" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageOpenModal;

const ModalSwiper = () => {
  return (
    <div id="ModalSwiper">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="#">
            <img
              src={require("../../Static/img/april_roadmap.0571408.jpg")}
              alt="img"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src={require("../../Static/img/partnership.8571ecf.jpg")}
              alt="img"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src={require("../../Static/img/bsw_moo.abcf14b.jpg")}
              alt="img"
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
