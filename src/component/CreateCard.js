import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserProfile from "./UserProfile/UserProfile";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
export default function CreateCard() {
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

  return (
    <>
      <div className="createCard about">
        <div className="setting">
          <div className="admin">
            <div className="admin_detail">
              <Link to="/" className="signup_navbar-back">
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
              </Link>
              <div className="addImage">
                <h3>Upload Profile image </h3>
                <div className="d-flex justify-content-between align-sm-items-start align-items-center mt-3 gap-sm-2 f-sm-column">
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
                    id="employeeId"
                    placeholder="Employee id"
                    name="employeeId"
                    required
                    onChange={handleChange}
                    value={formData.employeeId}
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
                    onChange={handleChange}
                    value={formData.employeeBio}
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
                  <button className="btn-primary">Add +</button>
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
              </div>
              <button className="btn-primary">Save</button>
            </div>
          </div>
        </div>
        {/* <div className="signup_form-container">
          <div className="signup_navbar d-flex justify-content-between">
            <Link to="/" className="signup_navbar-back">
              <FontAwesomeIcon icon={faArrowLeft} />
              <p>Back</p>
            </Link>
          </div>
          <div className="form">
            <div className="form_logo">
              <img className="img-fluid" src="/logofill.svg" alt="" />
              <h2>Create a Flax Card</h2>
            </div>
            <form action="">
              <div className="mt-5 email_input">
                <div id="emailHelp" className="form-text">
                  Name*
                </div>
                <div className="did-floating-label-content input-group">
                  <input
                    className="did-floating-input"
                    type="text"
                    placeholder=" "
                    required
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                  />
                  <label className="did-floating-label">Name</label>
                </div>
              </div>
              <div className="mt-4 email_input">
                <div id="emailHelp" className="form-text">
                  Company
                </div>
                <div className="did-floating-label-content input-group">
                  <input
                    className="did-floating-input"
                    type="text"
                    placeholder=" "
                    required
                    name="company"
                    onChange={handleChange}
                    value={formData.company}
                  />
                  <label className="did-floating-label">company</label>
                </div>
              </div>
              <div className="mt-4 email_input">
                <div id="emailHelp" className="form-text">
                  Designation
                </div>
                <div className="did-floating-label-content input-group">
                  <input
                    className="did-floating-input"
                    type="text"
                    placeholder=" "
                    required
                    name="designation"
                    onChange={handleChange}
                    value={formData.designation}
                  />
                  <label className="did-floating-label">Designation</label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Continue
              </button>
            </form>
          </div>
        </div> */}
        {/* <div className="signup_phone text-center">
          <p>Live Profile Preview</p>
          <div className="signup_phone-container">
            <div className="signup_phone-left">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="signup_phone-right">
              <span></span>
            </div>
            <div className="addlink_phone-frame_user">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <h3>{formData.username ? formData.username : "Name"}</h3>
            <h4>{formData.company ? formData.company : "Company"}</h4>
            <h4>
              {formData.designation ? formData.designation : "Designation"}
            </h4>
            <div className="signup_phone-boxs">
              <div className="signup_phone-box"></div>
              <div className="signup_phone-box"></div>
              <div className="signup_phone-box"></div>
              <div className="signup_phone-box"></div>
              <div className="signup_phone-box"></div>
            </div>
          </div>
        </div> */}
        <div className="signup_phone text-center">
          <button className="btn btn-preview">Live Preview</button>
          <div className="signup_phone-container">
            <UserProfile formData={formData} />
          </div>
        </div>
        {/* <div className="signup_phone text-center">
          <p>Live Profile Preview</p>
          <div className="signup_phone-container">
            <img src="/phone_bannner.svg" className="img-fluid" alt="" />
            <h3>{formData.username ? formData.username : "Name"}</h3>
            <h4>{formData.company ? formData.company : "Company"}</h4>
            <h4>
              {formData.designation ? formData.designation : "Designation"}
            </h4>
            <div className="signup_phone-boxs">
              <div className="signup_phone-box"></div>
              <div className="signup_phone-box"></div>
              <div className="signup_phone-box"></div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
