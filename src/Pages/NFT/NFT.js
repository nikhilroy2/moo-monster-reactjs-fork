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
      </section>
    </div>
  );
}

export default NFT;
