import React from "react";
import "./Base.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import PageOpenModal from "../../Components/PageOpenModal/PageOpenModal";
function Base(props) {
  return (
    <div id="Base">
      <div className="layout_design">
        <div className="back">
          <div id="stars" /> <div id="stars2" /> <div id="stars3" />
        </div>
        <img
          className="town-back"
          src={require("../../Static/img/town-back.330c9f0.png")}
          alt=""
        />
      </div>
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>

      <PageOpenModal></PageOpenModal>
    </div>
  );
}

export default Base;
