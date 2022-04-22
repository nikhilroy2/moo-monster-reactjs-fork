import React, { useState } from "react";
import "./Header.css";
function Header(props) {
  const [navActiveIndex, setNavActiveIndex] = useState(1);
  const nav_item_list = [
    {
      id: 1,
      name: "Home",
      link: "#",
      activeClass: navActiveIndex === 1 ? "active_nav_action" : "",
    },
    {
      id: 2,
      name: "NFT",
      link: "#NFT",
      activeClass: navActiveIndex === 2 ? "active_nav_action" : "",
    },
    {
      id: 3,
      name: "Gameplay",
      link: "#Gameplay",
      activeClass: navActiveIndex === 3 ? "active_nav_action" : "",
    },
    {
      id: 4,
      name: "Game mode",
      link: "#GameMode",
      activeClass: navActiveIndex === 4 ? "active_nav_action" : "",
    },
    {
      id: 5,
      name: "Tokenomic",
      link: "#Tokenomic",
      activeClass: navActiveIndex === 5 ? "active_nav_action" : "",
    },
    {
      id: 6,
      name: "About us",
      link: "#AboutUs",
      activeClass: navActiveIndex === 6 ? "active_nav_action" : "",
    },
    {
      id: 7,
      name: "Whitepaper",
      link: "https://moomonster.gitbook.io/moo-monster-whitepaper/",
      activeClass: navActiveIndex === 7 ? "active_nav_action" : "",
    },
  ];
  return (
    <header id="Header">
      <div className="container">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark ">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Navbar brand */}
            <a className="navbar-brand me-2" href="https://mdbgo.com/">
              <img
                src={require("../../Static/img/moo-brand-2.e4f7641.png")}
                height={16}
                alt="MDB Logo"
                loading="lazy"
                style={{ height: "32px" }}
              />
            </a>
            {/* Toggle button */}
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center d-lg-none me-3">
                <button type="button" className="btn_app">
                  Application
                </button>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars fa-2x" />
              </button>
            </div>

            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse "
              id="navbarButtonsExample"
            >
              {/* Left links */}
              <ul className="navbar-nav flex-grow-1 justify-content-end mb-2 mb-lg-0 pt-4 pt-lg-0">
                {nav_item_list.map((v) => {
                  return (
                    <li className="nav-item" key={v.id}>
                      <a
                        className={`nav-link nav_action_link ${v.activeClass}`}
                        href={v.link}
                        target={v.name === "Whitepaper" ? "_blank" : "_self"}
                        onClick={() => setNavActiveIndex(v.id)}
                      >
                        {v.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {/* Left links */}
              <div className="d-none align-items-center d-lg-flex">
                <button type="button" className="btn_app">
                  Application
                </button>
              </div>
            </div>
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </div>
    </header>
  );
}

export default Header;
