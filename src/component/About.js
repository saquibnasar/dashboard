import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function About(props) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="setting">
        <div className="admin">
          <div className="admin_detail">
            <div className="addImage">
              <h3>Upload Profile image </h3>
              <div className="d-flex justify-content-between align-sm-items-start align-items-center mt-3 gap-sm-2 f-sm-column">
                <div className="upload-img">
                  {props.imageData.logoimage ? (
                    <img
                      src={props.imageData.logoimage}
                      alt=""
                      className="img-fluid"
                    />
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faUser} />
                    </>
                  )}

                  <input
                    type="file"
                    id="upload-button"
                    // style={{ display: "none" }}
                    className="d-none"
                    onChange={props.imagehandleChange}
                    name="logoimage"
                  />
                </div>
                <label className="btn-primary" htmlFor="upload-button">
                  Upload image
                </label>
              </div>
            </div>

            <div className="admin_detail-member">
              <h3>company detail </h3>

              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Name"
                  required
                  name="username"
                  onChange={props.handleChange}
                  value={props.formData.username}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  placeholder="Designation"
                  name="designation"
                  onChange={props.handleChange}
                  value={props.formData.designation}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="employeeId"
                  placeholder="Employee id"
                  name="employeeId"
                  required
                  onChange={props.handleChange}
                  value={props.formData.employeeId}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="employeeBio"
                  placeholder="Employee bio"
                  name="employeeBio"
                  required
                  onChange={props.handleChange}
                  value={props.formData.employeeBio}
                />
              </div>
            </div>
            <div className="addImage">
              <h3>Upload banner image </h3>
              <div className="d-flex justify-content-between align-sm-items-start align-items-center mt-3 gap-sm-2 f-sm-column">
                <label htmlFor="uploadBanner" className="uploadBanner">
                  {props.imageData.bannerImage ? (
                    <img
                      src={props.imageData.bannerImage}
                      alt=""
                      className="img-fluid"
                    />
                  ) : (
                    <>
                      <div className="d-flex gap-2 align-items-center">
                        <FontAwesomeIcon icon={faPlus} />
                        <h4>Upload images</h4>
                      </div>
                      <p>item with images see 60% more visits from customers</p>
                    </>
                  )}
                </label>

                <input
                  type="file"
                  id="uploadBanner"
                  // style={{ display: "none" }}
                  className="d-none"
                  name="bannerImage"
                  onChange={props.imagehandleChange}
                />
              </div>
            </div>
            <div className="admin_detail-social">
              <h3>Choose/add Social handles </h3>
              <div className="admin_detail-social-grid">
                <button className="btn-primary">FB</button>
                <button className="btn-primary">Insta</button>
                <button className="btn-primary">YT</button>
                <button className="btn-primary">FB</button>
                <button className="btn-primary">Insta</button>
                <button className="btn-primary">YT</button>
                <button className="btn-primary">FB</button>
                <button className="btn-primary">Insta</button>
                <button className="btn-primary">YT</button>
                <button className="btn-primary">FB</button>
                <button className="btn-primary">Insta</button>
                <button className="btn-primary">YT</button>
                <button className="btn-primary" onClick={props.addLink}>
                  Add +
                </button>
              </div>
            </div>
            <div className="admin_detail-contact">
              <h3>Contact details </h3>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="office email id"
                  required
                  name="officeId"
                />
              </div>
              <div className="p-relative mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  placeholder="enter whatsApp number"
                  name="designation"
                />
                <label class="did-floating-label">+91</label>
              </div>
              <div className="p-relative mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="enter Mobile number"
                  name="company"
                  required
                />
                <label class="did-floating-label">+91</label>
              </div>
              <button className="btn-save">Save</button>
            </div>
          </div>
          {/* <div className="admin_authentication">
            <div className="schedule">
              <h2>Schedule user validity</h2>
              <div className="form-check form-switch">
                
                <div className="tg-list-item">
                  <input className="tgl tgl-flat" id="cb4" type="checkbox" />
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
          </div> */}
        </div>
      </div>
    </>
  );
}
