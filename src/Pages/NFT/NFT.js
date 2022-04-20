import React from "react";
import "./NFT.css";

function NFT(props) {
  const nft_trading_object = [
    {
      id: 1,
      title: "",
      img: require("../../Static/img/horizontal_gateio.c963523.png"),
      description: "",
    },
    {
      id: 2,
      title: "",
      img: require("../../Static/img/horizontal_biswap.750bfa0.png"),
      description: "The lowest trading fee of 0.1% per swap",
    },
    {
      id: 3,
      title: "",
      img: require("../../Static/img/horizontal_pancake.6067da8.png"),
      description: "",
    },
  ];
  return (
    <div id="NFT">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col_wrapper">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <h3 className="section_title mt_section">TRADING NOW ON</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center trading_row mt-5 align-items-center">
            {nft_trading_object.map((v) => {
              return (
                <div
                  className={`col-sm-12 ${
                    v.id == 2 ? "col-md-6" : "col-md-3"
                  } mb-5`}
                  key={v.id}
                >
                  <img className="icon" src={v.img} alt="img" />
                  {v.description != "" && (
                    <p className="text_secondary text-center">
                      {v.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col_wrapper">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <h3 className="section_title mt_section">NFT</h3>
                    <div className="section_body">
                      <p
                        style={{ fontSize: "1.5rem" }}
                        className="description text_secondary text-center font-weight-bold"
                      >
                        Get yourselves ready. Because there are tons of
                        characters, items and other things waiting for you to
                        own.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BuyEggsContent></BuyEggsContent>
      </section>
    </div>
  );
}

export default NFT;

const BuyEggsContent = () => {
  return (
    <div id="BuyEggsContent">
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="col_wrapper d-flex justify-content-between align-items-start">
              <div className="eggs_content_control">
                <div className="content_header"></div>
                <div className="content_body">
                  <table className="eggs_table">
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/bolt-1-thumb.d8f8a9e.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/bolt-2-thumb.920c509.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/bolt-3-thumb.0d149db.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/bolt-4-thumb.5f8bb18.png")}
                            alt="img"
                          />{" "}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/lava-1-thumb.9b6698a.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/lava-2-thumb.eaaa992.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/lava-3-thumb.c52148f.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/lava-4-thumb.2e6ce82.png")}
                            alt="img"
                          />{" "}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/ace-1-thumb.c421f56.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/ace-2-thumb.e6ef728.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/ace-3-thumb.23673f9.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/ace-4-thumb.87d0430.png")}
                            alt="img"
                          />{" "}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/shadow-1-thumb.7c3aa6f.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/shadow-2-thumb.0b0d219.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/shadow-3-thumb.70d2273.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/shadow-4-thumb.63a2d5e.png")}
                            alt="img"
                          />{" "}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/richie-1-thumb.eaa573b.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/richie-2-thumb.865ee39.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/richie-3-thumb.a6c5aca.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/richie-4-thumb.d92b9a2.png")}
                            alt="img"
                          />{" "}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/ice-1-thumb.c3eb1e6.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/ice-2-thumb.7b86adb.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/ice-3-thumb.a870980.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/ice-4-thumb.198f8c0.png")}
                            alt="img"
                          />{" "}
                        </td>
                      </tr>

                      <tr className="last_tr">
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/mind-1-thumb.da4cd92.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/mind-2-thumb.6575a06.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/mind-3-thumb.80261b9.png")}
                            alt="img"
                          />{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src={require("../../Static/img/mind-4-thumb.039d48a.png")}
                            alt="img"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="buy_eggs">🥚 Buy Egg</button>
                </div>
                <div className="content_footer"></div>
              </div>
              <div className="eggs_control_viewer">
                <div className="control_view_wrapper">
                  <div className="control_header"></div>
                  <div className="control_body">
                    <div className="control_box">
                      <h2>Baby D-Bolt I</h2>
                      <p className="text-white">
                        Baby D-Bolt I is the youngest D-Bolt, his age around 0-3
                        years old, he can't fight with you but he can watch and
                        learn for gain EXP from the battle.
                      </p>
                    </div>
                  </div>
                  <div className="control_footer"></div>
                </div>
                <div className="control_play_view_box">
                  <video
                    id="preview-video"
                    width="100%"
                    height="100%"
                    controls
                    playsInline
                    muted="muted"
                    loop="loop"
                    autoPlay="autoplay"
                  >
                    <source
                      src={require("../../Static/video/bolt-1.webm")}
                      type="video/mp4"
                    />{" "}
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
