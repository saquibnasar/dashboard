import React from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function FlaxCode() {
  return (
    <>
      <div className="d-flex homePage flaxcode">
        <SIdebar />
        <div className="d-flex flex-direction-column w-100">
          <Topbar type="setting" title="" />
          <div className="homePage_container mt-4">
            <nav className="sidebar">
              <div className="sidebar-collapse">
                <ul className="sidebar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/homepage"
                    >
                      <img className="img-fluid" src="/dots.png" alt="" />
                      <p className="d-lg-none">Content</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/about"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <p className="d-lg-none">About</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/flaxcode"
                    >
                      <img className="img-fluid" src="/iconqr.png" alt="" />
                      <p className="d-lg-none">FlaxCode</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting_devices"
                    >
                      <FontAwesomeIcon icon={faNfcSymbol} />
                      <p className="d-lg-none">Add Flax Devices</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="homePage_container-bottom">
              <div className="links">
                <h2>User QR code</h2>
                <h3>Flax Event Badge</h3>
                <p>
                  Download a printable QR code event badge for any <br />
                  upcoming events. The QR code will automatically <br />
                  share the member’s Flax digital business card with others.
                </p>
                <button className="btn_add">Download</button>
              </div>
              <div className="signup_phone text-center">
                <h3>User QR Code</h3>
                <h2>Sunny Katyal</h2>
                <img className="img-fluid" src="/qrcode.png" alt="" />

                <button className="btn_add">Download QR Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
