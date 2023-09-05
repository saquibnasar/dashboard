import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import UserProfile from "../UserProfile/UserProfile";
export default function AddPlugin(props) {
  const [formData, setFormData] = useState({
    value: props.data.linkData ? props.data.linkData : "",
    title: props.data.linkTitle ? props.data.linkTitle : "",
  });
  const [ifClick, setIfClick] = useState(false);

  const handleChange = (event) => {
    fetch(`https://youtube.com/oembed?url=${event.target.value}&format=json`)
      .then((res) => res.json())
      .then((data) => {
        setFormData((preData) => {
          return {
            ...preData,
            title: data.title,
          };
        });
      })
      .catch((err) => {
        // console.log(err);
      });
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
      let newArr = [...props.formData.userPlugin];

      newArr[props.data.id] = {
        title: formData.title,
        value: formData.value,
        type: props.data.type,
      };
      props.setFormData((prevformData) => {
        return {
          ...prevformData,
          userPlugin: [...newArr],
        };
      });
    } else {
      props.setFormData((prevformData) => {
        return {
          ...prevformData,
          userPlugin: [
            ...prevformData.userPlugin,
            {
              title: formData.title,
              value: formData.value,
              type: props.data.type,
            },
          ],
        };
      });
    }
    props.sendData();
  };
  const deleteElement = () => {
    props.setFormData((prevformData) => {
      prevformData.userPlugin.splice(props.data.id, 1);

      return {
        ...prevformData,
        userPlugin: [...prevformData.userPlugin],
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
              props.data.type === "googlemap" ||
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
                  <input
                    className="did-floating-input"
                    type={props.data.linktype}
                    placeholder={
                      ifClick ? `https://www.${props.data.type}.com/xxxx` : " "
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
                    className="did-floating-label"
                    htmlFor="userData"
                  >
                    {!ifClick
                      ? `https://www.${props.data.type}.com/xxxx`
                      : props.data.titleInput}
                  </label>
                </div>
              </div>

              {props.data.linkData ? (
                <div className="d-flex gap-4 justify-content-between align-items-center mt-4">
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
