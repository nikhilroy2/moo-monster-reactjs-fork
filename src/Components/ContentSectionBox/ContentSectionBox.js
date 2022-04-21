import React from "react";
import "./ContentSectionBox.css";
function ContentSectionBox({
  boxImg,
  boxTitle,
  boxDescription,
  isLeftBox,
}) {
  return (
    <div
      id="ContentSectionBox"
      className={`${isLeftBox ? "left_box" : "right_box"}`}
    >
      <div className="container">
        {isLeftBox ? (
          <div className="row align-items-end align-items-md-center">
            <div className="text-center col-md-6">
              <div className="col_wrapper content_box_img">
                <img src={boxImg} alt="img" />
              </div>
            </div>
            <div className="text-center text-md-start col-md-6">
              <h3 className="text_secondary font-weight-bolder font_4">
                {boxTitle}
              </h3>
              <p className="text-white">{boxDescription}</p>
            </div>
          </div>
        ) : (
          <div className="row align-items-end align-items-md-center">
            <div className="text-center text-md-start col-md-6">
              <h3 className="text_secondary font-weight-bolder font_4">
                {boxTitle}
              </h3>
              <p className="text-white">{boxDescription}</p>
            </div>

            <div className="text-center col-md-6">
              <div className="col_wrapper content_box_img">
                <img src={boxImg} alt="img" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentSectionBox;
