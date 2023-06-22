import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import UserProfile from "./UserProfile/UserProfile";
export default function AddLink(props) {
  const [formData, setFormData] = useState({
    linkData: "",
    linkTitle: "",
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
    <div className="addlink d-flex justify-content-between align-items-center">
      <div className="addlink-container">
        <div className="addlink-back" onClick={props.sendData}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </div>
        <div className="addlink_content">
          <div className="addlink_content-top">
            <div className="addlink_content-top-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h1>Add {props.data.headerTitle} to card</h1>
          </div>
          <div className="form">
            <form action="">
              <div className="mt-5 email_input">
                <div id="emailHelp" className="form-text">
                  Link title
                </div>
                <div className="did-floating-label-content input-group">
                  <input
                    className="did-floating-input"
                    type="text"
                    placeholder=" "
                    required
                    name="linkTitle"
                    value={formData.linkTitle}
                    onChange={handleChange}
                  />
                  <label className="did-floating-label">
                    {props.data.linkTitleInput}
                  </label>
                </div>
              </div>
              <div className="mt-4 email_input">
                <div id="emailHelp" className="form-text">
                  {props.data.title}
                </div>
                <div className="did-floating-label-content input-group">
                  <input
                    className="did-floating-input"
                    type="number"
                    placeholder=" "
                    required
                    name="linkData"
                    value={formData.linkData}
                    onChange={handleChange}
                  />
                  <label className="did-floating-label">
                    {props.data.titleInput}
                  </label>
                </div>
              </div>

              <div className="submit d-flex">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={props.sendData}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="signup_phone text-center">
        <button className="btn btn-preview">Live Preview</button>
        <div className="signup_phone-container">
          <UserProfile formData={formData} />
        </div>
      </div>
      {/* <div className="signup_phone text-center overflow-hidden">
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
      </div> */}
      {/* <div className="addlink_phone">
        <div className="addlink_phone-frame">
          <div className="addlink_phone-frame_user">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <h3>Name</h3>
          <h5>Company Name</h5>
          <div className="signup_phone-box">
            phoneNumber
            <span>
              {formData.linkData ? formData.linkData : "+91 80101 01010"}
            </span>
          </div>
          <div className="signup_phone-box">
            Link title
            <span>
              {formData.linkTitle ? formData.linkTitle : "admin@company.tld"}
            </span>
          </div>
          <div className="signup_phone-box d-flex gap-2">
            <div className="">
              office website
              <span>https://company website</span>
            </div>
            <div className="">
              linkedIn
              <span>https://linkedIn.com/username</span>
            </div>
            <div className="">
              instagram
              <span>https://instagram.com/username</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
