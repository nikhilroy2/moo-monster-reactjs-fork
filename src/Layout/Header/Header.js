import React from "react";
import "./Header.css";
function Header(props) {
  const nav_item_list = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "NFT",
      link: "#",
    },
    {
      id: 3,
      name: "Gameplay",
      link: "#",
    },
    {
      id: 4,
      name: "Game mode",
      link: "#",
    },
    {
      id: 5,
      name: "Tokenomic",
      link: "#",
    },
    {
      id: 6,
      name: "About us",
      link: "#",
    },
    {
      id: 7,
      name: "Whitepaper",
      link: "#",
    },
  ];
  return (
    <header id="Header">
      <div className="container">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark ">
          {/* Container wrapper */}
          <div className="container">
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
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse "
              id="navbarButtonsExample"
            >
              {/* Left links */}
              <ul className="navbar-nav flex-grow-1 justify-content-end mb-2 mb-lg-0">
                {nav_item_list.map((v) => {
                  return (
                    <li className="nav-item" key={v.id}>
                      <a className="nav-link" href={v.link}>
                        {v.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {/* Left links */}
              <div className="d-flex align-items-center">
                <button type="button" className="btn btn-primary me-3">
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
