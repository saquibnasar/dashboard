import React, { useState } from "react";
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
      <div className="setting">
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
          </div>
        </div>
      </div>
    </>
  );
}
