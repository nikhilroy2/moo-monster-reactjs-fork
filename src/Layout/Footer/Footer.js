import React from "react";
import "./Footer.css";
function Footer(props) {
  const footer_nav_list1 = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Game",
      link: "#",
    },
    {
      id: 3,
      name: "Marketplace",
      link: "#",
    },
    {
      id: 4,
      name: "Buy token",
      link: "#",
    },
  ];

  const footer_nav_list2 = [
    {
      id: 1,
      name: "News",
      link: "#",
    },
    {
      id: 2,
      name: "Whitepaper",
      link: "#",
    },
    {
      id: 3,
      name: "Contact us",
      link: "#",
    },
  ];
  return (
    <footer id="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <img
                className="w-25 footer_logo"
                src={require("../../Static/img/logo.d169cc1.png")}
                alt="img"
              />
              <p className="w-100">
                Fight and adventure along with the Moo monster in the
                Mooniverse. Defeat the enemies and others player to earn reward
                and collect varies of NFTs.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col_wrapper">
              <div className="row">
                <div className="col-4">
                  <div className="col_wrapper">
                    <ul className="list-unstyled">
                      {footer_nav_list1.map((v) => {
                        return (
                          <li key={v.id}>
                            <a className="footer_link" href={v.link}>
                              {v.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-4">
                  <div className="col_wrapper">
                    <ul className="list-unstyled">
                      {footer_nav_list2.map((v) => {
                        return (
                          <li key={v.id}>
                            <a className="footer_link" href={v.link}>
                              {v.name}
                            </a>
                          </li>
                        );
                      })}
                      <li>
                        <div className="d-flex" style={{ marginTop: "1em" }}>
                          <div
                            className="footer_icon"
                            style={{ marginRight: ".5em" }}
                          >
                            <a href="#">
                              <img
                                src={require("../../Static/img/icon-cmc-blue.27b06e0.png")}
                                alt="img"
                                style={{ height: "24px" }}
                              />
                            </a>
                          </div>
                          <div className="footer_icon">
                            <a href="#">
                              <img
                                src={require("../../Static/img/icon-cgk-blue.59a1356.png")}
                                alt="img"
                                style={{ height: "24px" }}
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-4">
                  <div className="col_wrapper">
                    <ul className="list-unstyled social_list">
                      <li>
                        <a href="#">
                          <img
                            src={require("../../Static/img/app-store.63b7903.png")}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require("../../Static/img/google-play.802fdf0.png")}
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
