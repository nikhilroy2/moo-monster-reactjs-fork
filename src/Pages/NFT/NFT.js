import React, { useState } from "react";
import "./NFT.css";
import { Element } from "react-scroll";

import ContentSectionBox from "../../Components/ContentSectionBox/ContentSectionBox";

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
    <Element name="nft">
      <div id="NFT">
        <section>
          <div className="container">
            <div className="row">
              <div className="TRADING NOW ONol-12">
                <div className="col_wrapper">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <h3 className="section_title mt_section">
                        TRADING NOW ON
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center trading_row mt-5 align-items-center">
              {nft_trading_object.map((v) => {
                return (
                  <div
                    className={`col-sm-12 mb-5 mb-md-0 ${
                      v.id == 2 ? "col-md-6" : "col-md-3"
                    } mb-5`}
                    key={v.id}
                  >
                    <img className="icon" src={v.img} alt="img" />
                    {v.description !== "" && (
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

          <LandNFT></LandNFT>
          <MetaVerseFashion></MetaVerseFashion>
          <HumanEquipment></HumanEquipment>
        </section>
      </div>
    </Element>
  );
}

export default NFT;

const BuyEggsContent = () => {
  const [video_content_index, setVideo_content_index] = useState(1);
  const video_content_object = [
    {
      id: 1,
      title: "Baby D-Bolt I",
      description: `Baby D-Bolt I is the youngest D-Bolt, his age around 0-3 years old, he can't fight with you but he can watch and learn for gain EXP from the battle.`,
      video: require("../../Static/video/bolt-1.webm"),
    },
    {
      id: 2,
      title: "Baby D-Bolt II",
      description: `Baby D-Bolt II is Moo that emoolution from Baby D-Bolt I, he still can't fight with you, just watch and learn for gain EXP from battle, but sometime he'll project you from some dangerous!`,
      video: require("../../Static/video/bolt-2.webm"),
    },
    {
      id: 3,
      title: "D-Bolt",
      description: `D-Bolt is adult Bolt that emoolution from Baby D-Bolt II, come with lighting power, he is powerful one in the battle`,
      video: require("../../Static/video/bolt-3.webm"),
    },
    {
      id: 4,
      title: "D-Thunder",
      description: `D-Thunder is true form of lighting power, it emoolutions from D-Bolt, it just appear when D-Bolt need to show his full power of lighting!`,
      video: require("../../Static/video/bolt-4.webm"),
    },
    {
      id: 5,
      title: "Baby Lava I",
      description: `Baby Lava I is the youngest Lava`,
      video: require("../../Static/video/lava-1.webm"),
    },
    {
      id: 6,
      title: "Baby Lava II",
      description: `Baby Lava II is the form that emoolution from Baby Lava I`,
      video: require("../../Static/video/lava-2.webm"),
    },
    {
      id: 7,
      title: "Lava",
      description: `Lava is the form that emoolution from Baby Lava II`,
      video: require("../../Static/video/lava-3.webm"),
    },
    {
      id: 8,
      title: "The Magma",
      description: `The Magma is the form that emoolution from Lava`,
      video: require("../../Static/video/lava-4.webm"),
    },
    {
      id: 9,
      title: "Baby Ace I",
      description: `Baby Ace I is the youngest Ace`,
      video: require("../../Static/video/ace-1.webm"),
    },
    {
      id: 10,
      title: "Baby Ace II",
      description: `Baby Ace II is the form that emoolution from Baby Ace I`,
      video: require("../../Static/video/ace-2.webm"),
    },
    {
      id: 11,
      title: "Ace",
      description: `Ace is the form that emoolution from Baby Ace II`,
      video: require("../../Static/video/ace-3.webm"),
    },
    {
      id: 12,
      title: "Sak-siam Ace",
      description: `Sak-siam Ace is the form that emoolution from Ace`,
      video: require("../../Static/video/ace-4.webm"),
    },
    {
      id: 13,
      title: "Baby Shadow I",
      description: `Baby Shadow I is the youngest Shadow`,
      video: require("../../Static/video/shadow-1.webm"),
    },
    {
      id: 14,
      title: "Baby Shadow II",
      description: `Baby Shadow II is the form that emoolution from Baby Shadow I`,
      video: require("../../Static/video/shadow-2.webm"),
    },
    {
      id: 15,
      title: "Shadow",
      description: `Shadow is the form that emoolution from Baby Shadow II`,
      video: require("../../Static/video/shadow-3.webm"),
    },
    {
      id: 16,
      title: "Darkness",
      description: `Darkness is the form that emoolution from Shadow`,
      video: require("../../Static/video/shadow-4.webm"),
    },
    {
      id: 17,
      title: "Baby Richie I",
      description: `Baby Richie I is the youngest Richie`,
      video: require("../../Static/video/richie-1.webm"),
    },
    {
      id: 18,
      title: "Baby Richie II",
      description: `Baby Richie II is the form that emoolution from Baby Richie I`,
      video: require("../../Static/video/richie-2.webm"),
    },
    {
      id: 19,
      title: "Richie",
      description: `Richie is the form that emoolution from Baby Richie II`,
      video: require("../../Static/video/richie-3.webm"),
    },
    {
      id: 20,
      title: "Mr.Richie",
      description: `Mr.Richie is the form that emoolution from Richie`,
      video: require("../../Static/video/richie-4.webm"),
    },
    {
      id: 21,
      title: "Baby Freezy I",
      description: `Baby Freezy I is the youngest Freezy`,
      video: require("../../Static/video/ice-1.webm"),
    },
    {
      id: 22,
      title: "Baby Freezy II",
      description: `Baby Freezy II is the form that emoolution from Baby Freezy I`,
      video: require("../../Static/video/ice-2.webm"),
    },
    {
      id: 23,
      title: "Freezy",
      description: `Freezy is the form that emoolution from Baby Freezy II`,
      video: require("../../Static/video/ice-3.webm"),
    },
    {
      id: 24,
      title: "Ice Age",
      description: `Ice Age is the form that emoolution from Freezy`,
      video: require("../../Static/video/ice-4.webm"),
    },
    {
      id: 25,
      title: "Baby Mind Control I",
      description: `Baby Mind Control I is the youngest Mind Control`,
      video: require("../../Static/video/mind-1.webm"),
    },
    {
      id: 26,
      title: "Baby Mind Control II",
      description: `Baby Mind Control II is the form that emoolution from Baby Mind Control I`,
      video: require("../../Static/video/mind-2.webm"),
    },
    {
      id: 27,
      title: "Mind Control",
      description: `Mind Control is the form that emoolution from Baby Mind Control II`,
      video: require("../../Static/video/mind-3.webm"),
    },
    {
      id: 28,
      title: "The Psychosis",
      description: `The Psychosis is the form that emoolution from Mind Control`,
      video: require("../../Static/video/mind-4.webm"),
    },
  ];
  return (
    <div id="BuyEggsContent">
      <section>
        <div className="container position-lg-relative ">
          <div className="row ">
            <div className="col-12">
              <div className="d-block d-lg-flex col_wrapper position-lg-relative buy_eggs_content  row justify-content-between align-items-start">
                <div className="col-lg-6 h-100">
                  <div className="eggs_content_control">
                    <div className="content_header"></div>
                    <div className="content_body">
                      <table className="eggs_table">
                        <tbody>
                          <tr>
                            <td onClick={() => setVideo_content_index(1)}>
                              {" "}
                              <img
                                src={require("../../Static/img/bolt-1-thumb.d8f8a9e.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(2)}>
                              {" "}
                              <img
                                src={require("../../Static/img/bolt-2-thumb.920c509.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(3)}>
                              {" "}
                              <img
                                src={require("../../Static/img/bolt-3-thumb.0d149db.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(4)}>
                              {" "}
                              <img
                                src={require("../../Static/img/bolt-4-thumb.5f8bb18.png")}
                                alt="img"
                              />{" "}
                            </td>
                          </tr>

                          <tr>
                            <td onClick={() => setVideo_content_index(5)}>
                              {" "}
                              <img
                                src={require("../../Static/img/lava-1-thumb.9b6698a.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(6)}>
                              {" "}
                              <img
                                src={require("../../Static/img/lava-2-thumb.eaaa992.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(7)}>
                              {" "}
                              <img
                                src={require("../../Static/img/lava-3-thumb.c52148f.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(8)}>
                              {" "}
                              <img
                                src={require("../../Static/img/lava-4-thumb.2e6ce82.png")}
                                alt="img"
                              />{" "}
                            </td>
                          </tr>

                          <tr>
                            <td onClick={() => setVideo_content_index(9)}>
                              {" "}
                              <img
                                src={require("../../Static/img/ace-1-thumb.c421f56.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(10)}>
                              {" "}
                              <img
                                src={require("../../Static/img/ace-2-thumb.e6ef728.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(11)}>
                              {" "}
                              <img
                                src={require("../../Static/img/ace-3-thumb.23673f9.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(12)}>
                              {" "}
                              <img
                                src={require("../../Static/img/ace-4-thumb.87d0430.png")}
                                alt="img"
                              />{" "}
                            </td>
                          </tr>

                          <tr>
                            <td onClick={() => setVideo_content_index(13)}>
                              {" "}
                              <img
                                src={require("../../Static/img/shadow-1-thumb.7c3aa6f.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(14)}>
                              {" "}
                              <img
                                src={require("../../Static/img/shadow-2-thumb.0b0d219.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(15)}>
                              {" "}
                              <img
                                src={require("../../Static/img/shadow-3-thumb.70d2273.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(16)}>
                              {" "}
                              <img
                                src={require("../../Static/img/shadow-4-thumb.63a2d5e.png")}
                                alt="img"
                              />{" "}
                            </td>
                          </tr>

                          <tr>
                            <td onClick={() => setVideo_content_index(17)}>
                              {" "}
                              <img
                                src={require("../../Static/img/richie-1-thumb.eaa573b.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(18)}>
                              {" "}
                              <img
                                src={require("../../Static/img/richie-2-thumb.865ee39.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(19)}>
                              {" "}
                              <img
                                src={require("../../Static/img/richie-3-thumb.a6c5aca.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(20)}>
                              {" "}
                              <img
                                src={require("../../Static/img/richie-4-thumb.d92b9a2.png")}
                                alt="img"
                              />{" "}
                            </td>
                          </tr>

                          <tr>
                            <td onClick={() => setVideo_content_index(21)}>
                              {" "}
                              <img
                                src={require("../../Static/img/ice-1-thumb.c3eb1e6.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(22)}>
                              {" "}
                              <img
                                src={require("../../Static/img/ice-2-thumb.7b86adb.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(23)}>
                              {" "}
                              <img
                                src={require("../../Static/img/ice-3-thumb.a870980.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(24)}>
                              {" "}
                              <img
                                src={require("../../Static/img/ice-4-thumb.198f8c0.png")}
                                alt="img"
                              />{" "}
                            </td>
                          </tr>

                          <tr className="last_tr">
                            <td onClick={() => setVideo_content_index(25)}>
                              {" "}
                              <img
                                src={require("../../Static/img/mind-1-thumb.da4cd92.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(26)}>
                              {" "}
                              <img
                                src={require("../../Static/img/mind-2-thumb.6575a06.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(27)}>
                              {" "}
                              <img
                                src={require("../../Static/img/mind-3-thumb.80261b9.png")}
                                alt="img"
                              />{" "}
                            </td>
                            <td onClick={() => setVideo_content_index(28)}>
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
                </div>

                <div className="eggs_control_viewer col-lg-6 ">
                  <div className="control_view_wrapper">
                    <div className="control_header"></div>
                    <div className="control_body">
                      <div className="control_box">
                        <h2>
                          {
                            video_content_object[
                              Number(video_content_index) - 1
                            ].title
                          }
                        </h2>
                        <p className="text-white">
                          {
                            video_content_object[
                              Number(video_content_index) - 1
                            ].description
                          }
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
                      playsInline
                      muted="muted"
                      loop="loop"
                      autoPlay="autoplay"
                      src={
                        video_content_object[Number(video_content_index) - 1]
                          .video
                      }
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const LandNFT = () => {
  return (
    <div id="LandNFT">
      <ContentSectionBox
        boxImg={require("../../Static/img/land.825aa85.png")}
        boxTitle="Land NFT"
        boxDescription="Occupy and own land in each of the Mooniverse Cities to receive
        great benefits."
        isLeftBox={true}
      ></ContentSectionBox>
    </div>
  );
};

const MetaVerseFashion = () => {
  return (
    <div id="MetaVerseFashion">
      <ContentSectionBox
        boxImg={require("../../Static/img/metaverse-fashion.8fab8bc.png")}
        boxTitle="Metaverse Fashion"
        boxDescription="Choose the style that’s right for you. To walk in this Metaverse
        world (This world is not only for pigs!)"
        isLeftBox={false}
      ></ContentSectionBox>
    </div>
  );
};

const HumanEquipment = () => {
  return (
    <div id="HumanEquipment">
      <ContentSectionBox
        boxImg={require("../../Static/img/human-equipment.dffdcf2.png")}
        boxTitle="Human Equipment"
        boxDescription="Wear various equipment to strengthen your character and fight more
        powerful opponents"
        isLeftBox={true}
      ></ContentSectionBox>
    </div>
  );
};
