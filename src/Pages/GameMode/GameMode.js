import React from "react";
import ContentSectionBox from "../../Components/ContentSectionBox/ContentSectionBox";
import OpenWorldCarousel from "../../Components/OpenWorldCarousel/OpenWorldCarousel";
import { Element } from "react-scroll";

function GameMode(props) {
  return (
    <Element name="gamemode">
      <div id="GameMode">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="col_wrapper">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <h3 className="section_title mt_section">Game Mode</h3>
                      <p className="text_secondary py-5 text-center">
                        Discover the Mooniverse and find a variety of fun that
                        awaits you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PVE></PVE>
          <PVP></PVP>
          <OpenWorldCarousel></OpenWorldCarousel>
          <Metaverse></Metaverse>
        </section>
      </div>
    </Element>
  );
}

export default GameMode;

const PVE = () => {
  return (
    <div id="PVE">
      <ContentSectionBox
        boxImg={require("../../Static/img/pve.a50e758.png")}
        boxTitle="PVE"
        boxDescription="Go on an adventure and fight with your Moomon partner to overcome obstacles and uncover the secrets of this world"
        isLeftBox={true}
      ></ContentSectionBox>
    </div>
  );
};

const PVP = () => {
  return (
    <div id="PVP">
      <ContentSectionBox
        boxImg={require("../../Static/img/pvp.4c0965f.png")}
        boxTitle="PVP"
        boxDescription="Test the skill of you and your partner by battling other players. And show your talent to others to know !"
        isLeftBox={false}
      ></ContentSectionBox>
    </div>
  );
};

const Metaverse = () => {
  return (
    <div id="Metaverse">
      <ContentSectionBox
        boxImg={require("../../Static/img/metaverse.412f8d4.png")}
        boxTitle="Metaverse"
        boxDescription="In the world of Mooniverse, you are not alone. Meet and chat with other players to build a good relationship with each other"
        isLeftBox={false}
      ></ContentSectionBox>
    </div>
  );
};
