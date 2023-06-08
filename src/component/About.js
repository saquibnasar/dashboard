import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
      <div className="setting">
        <div className="admin">
          <div className="admin_detail">
            <div className="addImage">
              <h3>Upload Profile image </h3>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <button className="btn-primary">Upload image</button>
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
                  onChange={handleChange}
                  value={formData.username}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  placeholder="Designation"
                  name="designation"
                  onChange={handleChange}
                  value={formData.designation}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Employee id"
                  name="company"
                  required
                  onChange={handleChange}
                  value={formData.company}
                />
              </div>
            </div>
            <div className="admin_detail-social">
              <h3>Choose/add Social handles </h3>
              <div className="">
                <button className="btn-primary">FB</button>
                <button className="btn-primary">Insta</button>
                <button className="btn-primary">YT</button>
                <button className="btn-primary">Add +</button>
              </div>
            </div>
            <div className="admin_detail-contact">
              <h3>Contact details </h3>

              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="office email id"
                  required
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  placeholder="enter whatsApp number"
                  name="designation"
                  onChange={handleChange}
                  value={formData.designation}
                />
                <label class="did-floating-label">+91</label>
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="enter Mobile number"
                  name="company"
                  required
                  onChange={handleChange}
                  value={formData.company}
                />
                <label class="did-floating-label">+91</label>
              </div>
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
