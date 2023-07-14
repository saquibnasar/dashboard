import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import UserProfile from "./UserProfile/UserProfile";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function AddLink(props) {
  const [formData, setFormData] = useState({
    linkData: "",
    linkTitle: "",
  });
  const [ifClick, setIfClick] = useState(false);
  const [phone, setPhone] = useState("+1");

  const handleChange = (event) => {
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const check = (event) => {
    if (
      !(event.target.getAttribute("placeholder") === "https://youtu.be/xxxx") &&
      event.target.value === ""
    ) {
      setIfClick(true);
    }
  };
  window.addEventListener("click", function (e) {
    let userData = document.getElementById("userData");
    if (userData && !userData.contains(e.target) && userData.value === "") {
      setIfClick(false);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.data.linktype === "call") {
      props.setFormData((prevformData) => {
        return {
          ...prevformData,
          userLink: [
            ...prevformData.userLink,
            {
              linkTitleInput: formData.linkTitle,
              titleInput: phone + formData.linkData,
              linkType: props.data.linktype,
            },
          ],
        };
      });
    } else {
      props.setFormData((prevformData) => {
        return {
          ...prevformData,
          userLink: [
            ...prevformData.userLink,
            {
              linkTitleInput: formData.linkTitle,
              titleInput: formData.linkData,
              linkType: props.data.linktype,
            },
          ],
        };
      });
    }
    props.sendData();
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
            <div className={`addlink_content-top-icon ${props.data.linktype}`}>
              {props.data.linktype === "email" ||
              props.data.linktype === "address" ||
              props.data.linktype === "website" ? (
                <img className="img-fluid" src={props.data.icon} alt="" />
              ) : (
                <FontAwesomeIcon icon={props.data.icon} />
              )}
            </div>
            <h1>Add {props.data.linkTitleInput} to card</h1>
          </div>
          <div className="form">
            <form action="" onSubmit={handleSubmit}>
              <div className="mt-5 email_input">
                <div id="emailHelp" className="form-text">
                  {props.data.headerTitle}
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
                    id="userText"
                  />

                  <label className="did-floating-label" htmlFor="userText">
                    {props.data.linkTitleInput}
                  </label>
                </div>
              </div>
              <div className="mt-4 email_input">
                <div id="emailHelp" className="form-text">
                  {props.data.title}
                </div>
                <div className="did-floating-label-content input-group">
                  {props.data.linktype === "call" ? (
                    <>
                      <input
                        className="did-floating-input countriesCode-input"
                        type={props.data.type}
                        placeholder={
                          ifClick
                            ? props.data.type
                              ? ""
                              : `https://${props.data.linktype}/xxxx`
                            : " "
                        }
                        required
                        name="linkData"
                        value={formData.linkData}
                        onChange={handleChange}
                        onClick={check}
                        id="userData"
                      />

                      <label
                        id="did-floating-label"
                        className="did-floating-label countriesCode-label"
                        htmlFor="userData"
                      >
                        {!ifClick ? `99999` : props.data.titleInput}
                      </label>
                      <div className="did-floating countriesCode">
                        <PhoneInput
                          country={"us"}
                          // value={phone}
                          onChange={(val) => setPhone(val)}
                          enableSearch={true}
                          disableSearchIcon={true}
                          // disableCountryCode={true}
                          countryCodeEditable={false}
                          inputProps={{
                            required: true,
                            autoFocus: true,
                            placeholder: "1",
                            className:
                              phone && phone.split("").length === 2
                                ? "did-floating-input CodeForm-control CodeForm-2"
                                : phone && phone.split("").length === 3
                                ? "did-floating-input CodeForm-control CodeForm-3"
                                : phone && phone.split("").length === 4
                                ? "did-floating-input CodeForm-control CodeForm-4"
                                : "did-floating-inputs CodeForm-control",
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <input
                        className="did-floating-input"
                        type={props.data.type}
                        placeholder={
                          ifClick
                            ? props.data.type
                              ? ""
                              : `https://${props.data.linktype}/xxxx`
                            : " "
                        }
                        required
                        name="linkData"
                        value={formData.linkData}
                        onChange={handleChange}
                        onClick={check}
                        id="userData"
                      />
                      <label
                        id="did-floating-label"
                        className="did-floating-label"
                        htmlFor="userData"
                      >
                        {!ifClick
                          ? `https://${props.data.linktype}/xxxx`
                          : props.data.titleInput}
                      </label>
                    </>
                  )}
                </div>
              </div>

              <div className="submit d-flex">
                <button onClick={props.sendData} className="btn btn-primary">
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
      <div className="signup_phone text-center d-md-block">
        <button className="btn btn-preview">Live Preview</button>
        <div className="signup_phone-container">
          <UserProfile formData={formData} />
        </div>
      </div>
    </div>
  );
}
