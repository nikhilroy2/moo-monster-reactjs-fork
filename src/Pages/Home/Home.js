import React from "react";
import "./Home.css";
function Home(props) {
  return (
    <div id="Home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col_wrapper home_content">
              <div className="w-100 text-center h-100 home_content_wrapper">
                <img
                  src={require("../../Static/img/moo-logo.2ccf648.png")}
                  alt="img"
                />
                <h3>Available Now !</h3>
                <div className="d-flex justify-content-center social_app">
                  <a className="d-inline-block p-2" href="#">
                    <img
                      src={require("../../Static/img/app-store_home.png")}
                      alt="img"
                    />
                    iOS
                  </a>
                  <a className="d-inline-block p-2" href="#">
                    <img
                      src={require("../../Static/img/google-play_home.png")}
                      alt="img"
                    />
                    Android
                  </a>
                </div>

                <div className="action_controler">
                  <a href="#" className="buy_egg btn_primary me-4">
                    Buy Egg
                  </a>
                  <a href="#" className="register btn_secondary">
                    Register
                  </a>
                </div>
                <div className="token_controller pt-4">
                  <a className="d-block text-white" href="#">
                    How to get started ?
                  </a>
                  <div className="d-block text-white pt-2">
                    MOO token address: &nbsp;
                    <a href="" className="text-white">
                      0xA29b6f4E762874846c081E20ed1142FF83faaFEF
                    </a>
                  </div>
                </div>
                <div class="scroll-down"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="monster_box">
              <div className="box_head">
                <h2>Moo Monster</h2>
                <h4>NFT game, Free-to-Play, Play-to-Earn.</h4>
                <p>
                  Go on an adventure with the Moo monster in the “Mooniverse”
                  world
                </p>
              </div>
              <div className="box_body pt-5">
                <div className="box_control">
                  <button className="me-4">
                    {" "}
                    <img
                      className="me-3"
                      style={{ height: "28px" }}
                      src={require("../../Static/img/ic-moo-token.8d1a1ee.png")}
                      alt="img"
                    />{" "}
                    Buy $MOO
                  </button>
                  <a href="#">🥚 Buy Egg</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
