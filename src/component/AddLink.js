import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import UserProfile from "./UserProfile/UserProfile";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function AddLink(props) {
  const [formData, setFormData] = useState({
    value: props.data.linkData ? props.data.linkData : "",
    title: props.data.linkTitle ? props.data.linkTitle : "",
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

  const onKeyDownHandlerdfs = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.data.linkData) {
      let newArr = [...props.formData.userLink];

      newArr[props.data.id] = {
        title: formData.title,
        value: formData.value,
        countryCode: phone,
        type: props.data.type,
      };
      props.setFormData((prevformData) => {
        return {
          ...prevformData,
          userLink: [...newArr],
        };
      });
    } else {
      if (props.data.type === "phone") {
        props.setFormData((prevformData) => {
          return {
            ...prevformData,
            userLink: [
              ...prevformData.userLink,
              {
                title: formData.title,
                value: phone + formData.value,
                type: props.data.type,
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
                title: formData.title,
                value: formData.value,
                type: props.data.type,
              },
            ],
          };
        });
      }
    }
    props.sendData();
  };

  const deleteElement = () => {
    props.setFormData((prevformData) => {
      prevformData.userLink.splice(props.data.id, 1);
      return {
        ...prevformData,
        userLink: [...prevformData.userLink],
      };
    });
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
            <div className={`addlink_content-top-icon ${props.data.type}`}>
              {props.data.type === "email" ||
              props.data.type === "address" ||
              props.data.type === "website" ? (
                <img className="img-fluid" src={props.data.icon} alt="" />
              ) : (
                <FontAwesomeIcon icon={props.data.icon} />
              )}
            </div>
            <h1>Add {props.data.linkTitleInput} to card</h1>
          </div>
          <div className="form">
            <form
              action=""
              onSubmit={handleSubmit}
              onKeyDown={onKeyDownHandlerdfs}
            >
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
                    name="title"
                    value={formData.title}
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
                  {props.data.type === "phone" ? (
                    <>
                      <input
                        className="did-floating-input countriesCode-input"
                        type={props.data.linktype}
                        placeholder={
                          ifClick
                            ? props.data.linktype
                              ? ""
                              : `https://www.${props.data.type}.com/xxxx`
                            : " "
                        }
                        required
                        name="value"
                        value={formData.value}
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
                          value={
                            props.data.countryCode
                              ? `${props.data.countryCode}`
                              : phone
                          }
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
                        type={props.data.linktype}
                        placeholder={
                          props.data.type === "address"
                            ? ifClick
                              ? `Business address*`
                              : " "
                            : props.data.type === "whatsapp"
                            ? ifClick
                              ? `add whatsapp number*`
                              : " "
                            : ifClick
                            ? `https://www.${props.data.type}.com/xxxx`
                            : " "
                        }
                        // placeholder={
                        //   props.data.linkType === "addresss"
                        //     ? ifClick && props.data.type
                        //       ? " "
                        //       : `Business address*`
                        //     : props.data.linkType === "whatsapp"
                        //     ? ifClick && props.data.type
                        //       ? " "
                        //       : `Business cvv*`
                        //     : ifClick
                        //     ? `https://www.${props.data.linktype}.com/xxxx`
                        //     : " "
                        // }
                        required
                        name="value"
                        value={formData.value}
                        onChange={handleChange}
                        onClick={check}
                        id="userData"
                      />
                      <label
                        id="did-floating-label"
                        className="did-floating-label"
                        htmlFor="userData"
                      >
                        {/* {props.data.linkType === "addresss"
                          ? ifClick
                            ? props.data.type
                              ? ""
                              : `Business address*`
                            : " "
                          : props.data.linkType === "whatsapp"
                          ? ifClick
                            ? props.data.type
                              ? ""
                              : `Business s*`
                            : " "
                          : ifClick
                          ? `https://www.${props.data.linktype}.com/xxxx`
                          : " "} */}
                        {props.data.type === "address"
                          ? !ifClick
                            ? `Business address*`
                            : props.data.type
                          : props.data.linktype === "whatsapp"
                          ? !ifClick
                            ? `add whatsapp number*`
                            : props.data.titleInput
                          : !ifClick
                          ? `https://www.${props.data.type}.com/xxxx`
                          : props.data.titleInput}
                      </label>
                    </>
                  )}
                </div>
              </div>
              {props.data.linkData ? (
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <button
                    type="button"
                    className="btn btn-delete"
                    onClick={deleteElement}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                    Remove
                  </button>

                  <div className="submit d-flex">
                    <button
                      onClick={props.sendData}
                      className="btn btn-primary"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </div>
                </div>
              ) : (
                <div className="submit d-flex mt-4">
                  <button onClick={props.sendData} className="btn btn-primary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add link
                  </button>
                </div>
              )}
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
