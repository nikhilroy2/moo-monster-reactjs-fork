import React from "react";
import "./Gameplay.css";
function Gameplay(props) {
  return (
    <div id="Gameplay">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col_wrapper">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <h3 className="section_title mt_section">Gameplay</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 pb-5 mt-2 mb-4">
            <div className="col-12">
              <div className="col_wrapper">
                <div className="d-flex flex-wrap justify-content-center social_app">
                  <a className="d-inline-block p-2" href="#">
                    <img
                      src={require("../../Static/img/app-store_home.png")}
                      alt="img"
                    />
                  </a>
                  <a className="d-inline-block p-2" href="#">
                    <img
                      src={require("../../Static/img/google-play_home.png")}
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="col_wrapper">
                <div className="video_gameplay_box my-5">
                  <video
                    src={require("../../Static/video/moomonster-v1.81c26af.mp4")}
                    controls
                  ></video>
                  <img src={require('../../Static/img/video-frame.cf64811.png')} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gameplay;
