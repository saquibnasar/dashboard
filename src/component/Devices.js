import React from "react";
import SIdebar from "./SIdebar";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
export default function Devices(props) {
  return (
    <div className="devices h-100vh d-flex">
      <SIdebar navbarToggle={props.navbarToggle} />
      <div className="devices_content d-flex flex-direction-column w-100">
        {/* <h1>Devices</h1> */}
        <Topbar type="setting" isNavbar={props.isNavbar} text="Diveces" />
        <div className="devices_content_container">
          <div className="devices_content_left">
            <img
              src="/devices_content_left_img.png"
              alt=""
              className="img-fluid"
            />
            <h2>Order Flax Card</h2>
            <p>Running out Card Buy them here.</p>
            <a
              href="https://caard.mini.store/"
              target="blank"
              className="devices-primary d-inline-block"
            >
              Get Card
            </a>
          </div>
          <div className="devices_content_border"></div>
          <div className="devices_content_right">
            <img
              src="/devices_content_right_img.png"
              alt=""
              className="img-fluid"
            />

            <h2>Activate Flax Card</h2>
            <p>
              If you already have the Flax Card
              <br />
              simply activate them here.
            </p>
            <a
              href="https://caard.mini.store/"
              target="blank"
              className="devices-primary d-inline-block"
            >
              Activate Card
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
