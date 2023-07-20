import React from "react";
import SIdebar from "./SIdebar";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import UserProfile from "./UserProfile/UserProfile";
import Lottie from "lottie-react";
import animationdata from "./SIdebar.json";
import Spline from "@splinetool/react-spline";

export default function Devices(props) {
  return (
    <div className="devices d-flex">
      <SIdebar navbarToggle={props.navbarToggle} />
      <div className="devices_content d-flex flex-direction-column w-100">
        {/* <h1>Devices</h1> */}
        <Topbar type="setting" isNavbar={props.isNavbar} text="Diveces" />
        <div className="devices_content_container">
          <div className="devices_content_left p-relative">
            <div className="cards">
              <div className="card p-relative">
                <h4>www.investorsclinic.in</h4>
                <h3>Company Name</h3>
                <div className="logo">
                  <img src="/deviceslogo.png" className="img-fluidv" alt="" />
                </div>
                <svg
                  width="16"
                  height="22"
                  viewBox="0 0 16 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.208225 8.28667C0.474754 8.65334 0.67465 9.09334 0.807914 9.53334C0.941178 9.97334 1.00781 10.4867 1.00781 11C1.00781 11.5133 0.941178 12.0267 0.807914 12.4667C0.67465 12.9067 0.474754 13.3467 0.208225 13.7133C-0.124935 14.2267 -0.0583032 14.96 0.408121 15.3267C0.874546 15.6933 1.54087 15.62 1.87403 15.1067C2.27382 14.52 2.54035 13.9333 2.80688 13.2C3.0734 12.4667 3.14004 11.7333 3.14004 11C3.14004 10.2667 3.00677 9.53334 2.80688 8.8C2.60698 8.14 2.27382 7.48 1.87403 6.89334C1.54087 6.38 0.874546 6.30667 0.408121 6.67334C-0.0583032 7.04 -0.124935 7.77334 0.208225 8.28667Z"
                    fill="white"
                  />
                  <path
                    d="M3.87299 6.16C4.67257 7.55333 5.139 9.24 5.139 11C5.139 12.76 4.67257 14.4467 3.87299 15.84C3.53983 16.3533 3.73972 17.0867 4.20615 17.4533C4.73921 17.82 5.3389 17.6 5.67206 17.0867C6.67154 15.3267 7.27123 13.2733 7.27123 11C7.27123 8.8 6.67154 6.67333 5.67206 4.91333C5.3389 4.4 4.67257 4.18 4.20615 4.54666C3.73972 4.91333 3.53983 5.57333 3.87299 6.16Z"
                    fill="white"
                  />
                  <path
                    d="M7.73764 3.96C8.87039 6.01333 9.47008 8.43333 9.47008 11C9.47008 13.5667 8.80376 15.9867 7.73764 18.04C7.47112 18.6267 7.60438 19.2867 8.13744 19.6533C8.67049 19.9467 9.27018 19.8 9.60334 19.2133C10.936 16.7933 11.6689 14.0067 11.6689 11C11.6689 7.99333 10.936 5.20667 9.60334 2.78667C9.33681 2.2 8.67049 2.05333 8.13744 2.34667C7.60438 2.71333 7.47112 3.37333 7.73764 3.96Z"
                    fill="white"
                  />
                  <path
                    d="M11.6023 1.76C13.0016 4.47333 13.8678 7.62667 13.8678 11C13.8678 14.3733 13.0682 17.5267 11.6023 20.24C11.3358 20.8267 11.469 21.4867 12.0021 21.8533C12.5351 22.1467 13.1348 22 13.468 21.4133C15.0672 18.3333 16 14.8133 16 11C16 7.18667 15.0672 3.66667 13.468 0.586667C13.2015 -4.37101e-08 12.5351 -0.146667 12.0021 0.146667C11.469 0.44 11.3358 1.17333 11.6023 1.76Z"
                    fill="white"
                  />
                </svg>
                <div className="lgo"></div>
                <div className="logo"></div>
              </div>
              <div className="card_second p-relative">
                <div className="">
                  <h3>Harsh Vardhan</h3>
                  <h5>Chief Technology Officer</h5>
                  <h4>Employee ID - CN00119</h4>
                </div>

                <img className="img-fluid qrcode" src="/diveceqr.png" alt="" />
              </div>
            </div>
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
          <div className="devices_content_right p-relative">
            {/* <img src="/card.png" alt="" className="img-fluid card" /> */}
            {/* <div className="card p-relative">
              <div className="">
                <h3>Harsh Vardhan</h3>
                <h5>Chief Technology Officer</h5>
                <h4>Employee ID - CN00119</h4>
              </div>

              <img className="img-fluid qrcode" src="/diveceqr.png" alt="" />
            </div> */}
            {/* <Lottie animationData={animationdata} /> */}
            {/* <img src="/koliseo-drb-unscreen.gif" alt="" className="img-fluid" /> */}
            <div className="spline">
              <Spline
                scene="https://prod.spline.design/A6HwqMUDYBw1nV67/scene.splinecode"
                style={{ height: "404px" }}
              />

              <div className="spline_box"></div>
            </div>

            {/* <div className="signup_phone text-center p-relative">
              <div className="signup_phone-left">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="signup_phone-right">
                <span></span>
              </div>
              <div className="signup_phone-container">
                <UserProfile />
              </div>
            </div> */}

            <h2>Activate Flax Card</h2>
            <p>
              If you already have the Flax Card
              <br />
              simply activate them here.
            </p>
            <a
              href="https://caard.mini.store/"
              target="_blank"
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
