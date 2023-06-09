import React, { useState } from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import AddCard from "./AddCard";
import LInks from "./LInks";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import About from "./About";
import FlaxCode from "./FlaxCode";
export default function HomePage(props) {
  const { homepageId } = useParams();
  const [isLinks, setIslinks] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const addLin = () => {
    setIslinks(!isLinks);
    // const addcard = document.querySelector(".addcard");
    // if (addcard.classList.contains("d-none")) {
    //   addcard.classList.remove("d-none");
    // } else {
    //   addcard.classList.add("d-none");
    // }
  };

  return (
    <>
      <div className={`d-flex homePage ${homepageId}`}>
        <SIdebar navbarToggle={props.navbarToggle} />
        <div className="d-flex flex-direction-column w-100">
          <Topbar type="setting" title="" isNavbar={props.isNavbar} />
          <div className="homePage_container mt-4">
            <nav className="sidebar">
              <div className="sidebar-collapse">
                <ul className="sidebar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/homepage/content"
                    >
                      <img className="img-fluid" src="/dots.png" alt="" />
                      <p className="d-lg-none">Content</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/homepage/about"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <p className="d-lg-none">About</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/homepage/flaxcode"
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
              {homepageId === "content" ? (
                <div className="links">
                  <div className="link_container">
                    <div>
                      <h2>This profile doesn’t have any linked content</h2>
                      <h3>
                        Add links to contact Information, website,
                        <br className="d-lg-none" />
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
              ) : homepageId === "about" ? (
                <About addLink={addLin} />
              ) : homepageId === "flaxcode" ? (
                <FlaxCode />
              ) : (
                ""
              )}
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
                    title="phone"
                    width="428"
                    height="887"
                    src="https://flax.ai/business/a"
                  />
                </div>
              </div>
            </div>
            {isLinks ? <AddCard removeLink={addLin} isClick={isClick} /> : ""}
          </div>
        </div>
      </div>
    </>
  );
}
