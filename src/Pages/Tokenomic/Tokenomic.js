import React from "react";
import "./Tokenomic.css";

function Tokenomic(props) {
  const tokenomic_list_object_1 = [
    {
      id: 1,
      img: require("../../Static/img/moo-coin-left-1.5eacb43.png"),
    },
    {
      id: 2,
      img: require("../../Static/img/moo-coin-left-2.76eca57.png"),
    },
    {
      id: 3,
      img: require("../../Static/img/moo-coin-left-3.f5867d8.png"),
    },
    {
      id: 4,
      img: require("../../Static/img/moo-coin-left-4.e7075eb.png"),
    },
    {
      id: 5,
      img: require("../../Static/img/moo-coin-left-5.5fce4aa.png"),
    },
    {
      id: 6,
      img: require("../../Static/img/moo-coin-left-6.7a31b71.png"),
    },
  ];

  const tokenomic_list_object_2 = [
    {
      id: 1,
      img: require("../../Static/img/moo-coin-right-1.9677090.png"),
    },
    {
      id: 2,
      img: require("../../Static/img/moo-coin-right-2.bf47860.png"),
    },
    {
      id: 3,
      img: require("../../Static/img/moo-coin-right-3.4044f9a.png"),
    },
    {
      id: 4,
      img: require("../../Static/img/moo-coin-right-4.92df3f3.png"),
    },
    {
      id: 5,
      img: require("../../Static/img/moo-coin-right-5.764b898.png"),
    },
    {
      id: 6,
      img: require("../../Static/img/moo-coin-right-6.cc4a137.png"),
    },
  ];
  return (
    <div id="Tokenomic">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col_wrapper">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <h3 className="section_title mt_section">Tokenomics</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="section_body">
                <div className="tokenomic_wrapper">
                  <div className="head text-center">
                    <div className="row justify-content-center text-center">
                      <div className="col-7">
                        <h4 className="text_secondary font_4 font-weight-bold">
                          $MOO Coin
                        </h4>
                        <p className="text-white">
                          The MooMonster token is a Governance token with a
                          total supply of 170,000,000 tokens, which can be used
                          as follows:
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="body">
                    <div className="d-flex justify-content-between tokenomic_flex_wrapper">
                      <div className="tokenomic_flex_box">
                        <ul className="list-unstyled tokenomic_list">
                          {tokenomic_list_object_1.map((v) => {
                            return (
                              <li key={v.id}>
                                <img src={v.img} alt="img" />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="tokenomic_flex_box text-center pt-5 flex-grow-1">
                        <img
                          className="d-inline-block  mt-5 "
                          src={require("../../Static/img/moo-coin.a494335.png")}
                          alt="img"
                          style={{ width: "80%" }}
                        />
                      </div>
                      <div className="tokenomic_flex_box">
                        <ul className="list-unstyled tokenomic_list">
                          {tokenomic_list_object_2.map((v) => {
                            return (
                              <li key={v.id}>
                                <img src={v.img} alt="img" />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tokenomic;
