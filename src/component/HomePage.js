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
import UserProfile from "./UserProfile/UserProfile";
import { Link } from "react-router-dom";
export default function HomePage(props) {
  const { homepageId } = useParams();
  const [isLinks, setIslinks] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    designation: "",
    employeeId: "",
    employeeBio: "",
  });

  const handleChange = (event) => {
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const addLin = () => {
    setIslinks(!isLinks);
  };

  return (
    <>
      <div className={`d-flex homePage ${homepageId}`}>
        <SIdebar navbarToggle={props.navbarToggle} />
        <div className="d-flex flex-direction-column w-100 overflow-hidden">
          <Topbar
            type="setting"
            title=""
            isNavbar={props.isNavbar}
            text="Home"
          />
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
                <About
                  addLink={addLin}
                  handleChange={handleChange}
                  formData={formData}
                />
              ) : homepageId === "flaxcode" ? (
                <FlaxCode />
              ) : (
                ""
              )}
              <div className="signup_phone text-center overflow-hidden">
                <Link to="/a" className="btn btn-preview">
                  Live Preview <FontAwesomeIcon icon={faShareSquare} />{" "}
                </Link>
                <div className="signup_phone-container">
                  <UserProfile formData={formData} />
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
