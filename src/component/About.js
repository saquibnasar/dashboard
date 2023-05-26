import React, { useState } from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function About() {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    username: "",
    company: "",
    designation: "",
  });

  const handleChange = (event) => {
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <>
      <div className="d-flex homePage about">
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
              <div className="setting ">
                <div className="admin">
                  <div className="admin_detail">
                    <h1>User details</h1>
                    <div className="">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Name"
                        required
                        name="username"
                        onChange={handleChange}
                        value={formData.username}
                      />
                    </div>
                    <div className="">
                      <label className="form-label">Job title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="designation"
                        placeholder="Job title"
                        name="designation"
                        onChange={handleChange}
                        value={formData.designation}
                      />
                    </div>
                    <div className="">
                      <label className="form-label">Company</label>
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        placeholder="Company"
                        name="company"
                        required
                        onChange={handleChange}
                        value={formData.company}
                      />
                    </div>
                  </div>
                  <div className="admin_authentication">
                    <div className="schedule">
                      <h2>Schedule user validity</h2>
                      <div className="form-check form-switch">
                        {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/> */}
                        <div className="tg-list-item">
                          <input
                            className="tgl tgl-flat"
                            id="cb4"
                            type="checkbox"
                          />
                          <label className="tgl-btn" htmlFor="cb4"></label>
                        </div>
                      </div>
                    </div>
                    <div className="datepicker mb-3">
                      <button className="validity_btn">Validity Starts</button>
                      <span>at</span>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                      />
                    </div>
                    <div className="datepicker">
                      <button className="validity_btn">Validity Starts</button>
                      <span>at</span>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                      />
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
