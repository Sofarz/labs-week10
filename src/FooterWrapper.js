import React from "react";

import "./FooterWrapper.css";

const Footer = (props) => {
  return (
    <>
        <div className="footer-container">
          <div
            style={{ backgroundColor: props.firstCircleColor }}
            className="circles-1"
          />
          <div
            style={{ backgroundColor: props.firstCircleColor }}
            className="circles-2"
          />
          <div
            style={{ backgroundColor: props.secondCircleColor }}
            className="circles-3"
          />
          <div
            style={{ backgroundColor: props.secondCircleColor }}
            className="circles-4"
          />
          <div style={{ backgroundColor: props.lineColor }} className="line" />
          <nav>
            <ul className="links-list">
              <li>
                <a href>{props.firstLink}</a>
              </li>
              <li>
                <a href>{props.secondLink}</a>
              </li>
              <li>
                <a href>{props.thirdLink}</a>
              </li>
              <li>
                <a href>{props.fourthLink}</a>
              </li>
              <li>
                <a href>{props.fifthLink}</a>
              </li>
            </ul>
          </nav>
          </div>
    </>
  );
};

export default Footer;