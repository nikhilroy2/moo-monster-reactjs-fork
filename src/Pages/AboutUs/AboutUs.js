import React from "react";
import "./AboutUs.css";

function AboutUs(props) {
  return (
    <div id="AboutUs">
      <OurTeam></OurTeam>
      <Developer></Developer>
      <PartnerAndInvestor></PartnerAndInvestor>
      <Advisors></Advisors>
    </div>
  );
}

export default AboutUs;

const OurTeam = () => {
  return (
    <div id="OurTeam">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title_secondary mb-5">Our Team</h2>
              <div className="section_body">
                <div className="team_frame mb-5">
                  <img
                    src={require("../../Static/img/team_frame.e33b1d6.png")}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const Developer = () => {
  return (
    <div id="Developer">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title_secondary mb-5">Developed By</h2>
              <div className="section_body">
                <div className="d-flex justify-content-center">
                  <img
                    className="d-block dev_img me-4"
                    src={require("../../Static/img/astra.5aa2b33.png")}
                    alt="img"
                  />
                  <img
                    className="d-block dev_img"
                    src={require("../../Static/img/paiduay.4281707.png")}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PartnerAndInvestor = () => {
  const partner_list_object = [
    {
      id: 1,
      img: require("../../Static/img/binstarter.e658168.png"),
      isTop: true,
    },
    {
      id: 2,
      img: require("../../Static/img/gamestarter.7e3b203.png"),
      isTop: true,
    },
    {
      id: 3,
      img: require("../../Static/img/trustpad.d1d1ae3.png"),
      isTop: true,
    },
    {
      id: 4,
      img: require("../../Static/img/nftpad.829a9c9.png"),
      isTop: true,
    },
    {
      id: 5,
      img: require("../../Static/img/gateio.4969aa2.png"),
      isTop: false,
    },
    {
      id: 6,
      img: require("../../Static/img/x21.b167037.png"),
      isTop: false,
    },
    {
      id: 7,
      img: require("../../Static/img/shima.60b0df7.png"),
      isTop: false,
    },
    {
      id: 8,
      img: require("../../Static/img/dci.090c5e7.png"),
      isTop: false,
    },
    {
      id: 9,
      img: require("../../Static/img/tokenova.3ac65fb.png"),
      isTop: false,
    },
    {
      id: 10,
      img: require("../../Static/img/oig.01a85da.png"),
      isTop: false,
    },
    {
      id: 11,
      img: require("../../Static/img/ex.966edb4.png"),
      isTop: false,
    },
    {
      id: 12,
      img: require("../../Static/img/alves.efb23f2.png"),
      isTop: false,
    },
    {
      id: 13,
      img: require("../../Static/img/avstar.3c0b03a.png"),
      isTop: false,
    },
    {
      id: 14,
      img: require("../../Static/img/vbc.55ecf58.png"),
      isTop: false,
    },
    {
      id: 15,
      img: require("../../Static/img/gains.6ebc258.png"),
      isTop: false,
    },
    {
      id: 16,
      img: require("../../Static/img/tdn.82264d4.png"),
      isTop: false,
    },
    {
      id: 17,
      img: require("../../Static/img/titans.28c3628.png"),
      isTop: false,
    },
    {
      id: 18,
      img: require("../../Static/img/brotherhood.5ae64ff.png"),
      isTop: false,
    },
    {
      id: 19,
      img: require("../../Static/img/gemcapital.64ab788.png"),
      isTop: false,
    },
    {
      id: 20,
      img: require("../../Static/img/lavender.f4afd25.png"),
      isTop: false,
    },
    {
      id: 21,
      img: require("../../Static/img/ten.0695da6.png"),
      isTop: false,
    },
    {
      id: 22,
      img: require("../../Static/img/ninestar.a113c01.png"),
      isTop: false,
    },
    {
      id: 23,
      img: require("../../Static/img/roseon.4544800.png"),
      isTop: false,
    },
    {
      id: 24,
      img: require("../../Static/img/seedthrift.0adf7b5.png"),
      isTop: false,
    },
    {
      id: 25,
      img: require("../../Static/img/paradigm.cfb87d7.png"),
      isTop: false,
    },
    {
      id: 26,
      img: require("../../Static/img/dreamboat.6ca62ff.png"),
      isTop: false,
    },
    {
      id: 27,
      img: require("../../Static/img/dct.cf281e9.png"),
      isTop: false,
    },
    {
      id: 28,
      img: require("../../Static/img/ggg.bd4b47f.png"),
      isTop: false,
    },
    {
      id: 29,
      img: require("../../Static/img/alphamoon.82718df.png"),
      isTop: false,
    },
    {
      id: 30,
      img: require("../../Static/img/evan.eb53f71.png"),
      isTop: false,
    },
    {
      id: 31,
      img: require("../../Static/img/maven.93594af.png"),
      isTop: false,
    },
    {
      id: 32,
      img: require("../../Static/img/bad.e8b4f6a.png"),
      isTop: false,
    },
    {
      id: 33,
      img: require("../../Static/img/gemslab.e268a0a.png"),
      isTop: false,
    },
    {
      id: 34,
      img: require("../../Static/img/orion.9a2a491.png"),
      isTop: false,
    },
    {
      id: 35,
      img: require("../../Static/img/darenft.8204a34.png"),
      isTop: false,
    },
    {
      id: 36,
      img: require("../../Static/img/warden.3c55810.png"),
      isTop: false,
    },
    {
      id: 37,
      img: require("../../Static/img/inspex.d374ba0.png"),
      isTop: false,
    },
    {
      id: 38,
      img: require("../../Static/img/cryptocup.5890451.png"),
      isTop: false,
    },
    {
      id: 39,
      img: require("../../Static/img/supraoracles.05e7b94.png"),
      isTop: false,
    },
    {
      id: 40,
      img: require("../../Static/img/detik.8531868.png"),
      isTop: false,
    },
  ];
  return (
    <div id="PartnerAndInvestor">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title_secondary mb-5">Partners and Investors</h2>
              <div className="section_body">
                <ul className="d-flex flex-wrap justify-content-center list-unstyled">
                  {partner_list_object.map((v) => {
                    return (
                      <li
                        className={`partner_img_list p-2 ${
                          v.isTop ? "top_partner" : ""
                        }`}
                        key={v.id}
                      >
                        <img className="p-2" src={v.img} alt="img" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Advisors = () => {
  const advisors_object = [
    {
      id: 1,
      img: require("../../Static/img/lester_lim.cbaed61.jpg"),
      name: "Lester Lim",
      description: "Founder at X21 Digital",
    },
    {
      id: 2,
      img: require("../../Static/img/yida_gao.74e51a0.jpg"),
      name: "Yida Gao",
      description: "CEO and Founder at Shima Capital",
    },
    {
      id: 3,
      img: require("../../Static/img/kyle_nguyen.813cd70.jpg"),
      name: "Kyle Nguyen",
      description: "Founder at VBC Venture",
    },
  ];
  return (
    <div id="Advisors">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title_secondary mb-5">Advisors</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {advisors_object.map((v) => {
              return (
                <div className="col-md-4 col-lg-3 mb-4" key={v.id}>
                  <div className="row justify-content-center">
                    <div className="d-flex text-center d-md-block col">
                      <img style={{ width: "200px" }} src={v.img} alt="" />

                      <div className="mt-4 w-100 d-flex flex-column justify-content-center align-items-center mb-3 mb-md-0">
                        <p className="font-weight-bold text_secondary my-3 text-center">
                          {v.name}
                        </p>
                        <div className="text-white">{v.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
