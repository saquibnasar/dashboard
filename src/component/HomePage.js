import React from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import AddCard from "./AddCard";
import LInks from "./LInks";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  const addLin = () => {
    const addcard = document.querySelector(".addcard");
    if (addcard.classList.contains("d-none")) {
      addcard.classList.remove("d-none");
    } else {
      addcard.classList.add("d-none");
    }
  };
  return (
    <>
      <div className="d-flex homePage">
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
                      Content
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/about"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/flaxcode"
                    >
                      <img className="img-fluid" src="/iconqr.png" alt="" />
                      FlaxCode
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting_devices"
                    >
                      <FontAwesomeIcon icon={faNfcSymbol} />
                      Add Flax Devices
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="homePage_container-bottom">
              <div className="links">
                <div className="link_container">
                  <div>
                    <h2>This profile doesn’t have any linked content</h2>
                    <h3>
                      Add links to contact Information, website,
                      <br />
                      Social media handles and more
                    </h3>

                    <button className="btn_add" onClick={addLin}>
                      <FontAwesomeIcon icon={faPlus} />
                      Add Links and contact info
                    </button>
                  </div>

                  <img src="/bglink.png" alt="" className="img-fluid" />
                </div>
                {/* <LInks /> */}
              </div>
              <div className="signup_phone text-center overflow-hidden">
                <p>
                  Live Preview <FontAwesomeIcon icon={faShareSquare} />{" "}
                </p>
                <div className="signup_phone-container">
                  <div className="signup_phone-left">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="signup_phone-right">
                    <span></span>
                  </div>
                  <iframe
                    width="428"
                    height="887"
                    src="https://flax.ai/business/avinashassociates"
                  />
                </div>
              </div>
            </div>
            {/* <div className="signup_phone text-center">
              <p>
                Live Preview <FontAwesomeIcon icon={faShareSquare} />{" "}
              </p>
              <div className="signup_phone-container">
                <img src="/phone_bannner.svg" className="img-fluid" alt="" />
                <h3>username</h3>
                <h4>company</h4>
                <h4>designation</h4>
                <div className="signup_phone-boxs">
                  <div className="signup_phone-box"></div>
                  <div className="signup_phone-box"></div>
                </div>
              </div>
            </div> */}
            <AddCard removeLink={addLin} />
          </div>
        </div>
      </div>
    </>
  );
}
