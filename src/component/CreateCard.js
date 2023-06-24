import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserProfile from "./UserProfile/UserProfile";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import AddCard from "./AddCard";
import AddLink from "./AddLink";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CreateCard() {
  const [isLinks, setIslinks] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [linkData, setLinkData] = useState({});
  const [image, setImage] = useState({
    logoimage: "",
    bannerImage: "",
    raw: "",
  });

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
  const imagehandleChange = (e) => {
    if (e.target.files.length) {
      setImage((prevformData) => {
        return {
          ...prevformData,
          [e.target.name]: URL.createObjectURL(e.target.files[0]),
        };
      });
    }
  };

  return (
    <>
      <div className="createCard about p-relative">
        <div className="setting">
          <div className="admin">
            <div className="admin_detail">
              <Link to="/" className="signup_navbar-back">
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
              </Link>
              <div className="addImage">
                <h3>Upload banner image </h3>
                <div className="d-flex justify-content-between align-sm-items-start align-items-center mt-3 gap-sm-2 f-sm-column">
                  <label htmlFor="uploadBanner" className="uploadBanner">
                    {image.bannerImage ? (
                      <img
                        src={image.bannerImage}
                        alt=""
                        className="img-fluid"
                      />
                    ) : (
                      <>
                        <div className="d-flex gap-2 align-items-center">
                          <FontAwesomeIcon icon={faPlus} />
                          <h4>Upload images</h4>
                        </div>
                        <p>
                          item with images see 60% more visits from customers
                        </p>
                      </>
                    )}
                  </label>

                  <input
                    type="file"
                    id="uploadBanner"
                    // style={{ display: "none" }}
                    className="d-none"
                    name="bannerImage"
                    onChange={imagehandleChange}
                  />
                </div>
              </div>
              <div className="addImage">
                <h3>Upload Profile image </h3>
                <div className="d-flex justify-content-between align-sm-items-start align-items-center mt-3 gap-sm-2 f-sm-column">
                  <div className="upload-img">
                    {image.logoimage ? (
                      <img src={image.logoimage} alt="" className="img-fluid" />
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
                      onChange={imagehandleChange}
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
                  <button className="btn-primary" onClick={addLin}>
                    FB
                  </button>
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
                  <button className="btn-primary" onClick={addLin}>
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
              </div>
              <button className="btn-primary">Save</button>
            </div>
          </div>
        </div>
        <div className="signup_phone text-center">
          <button className="btn btn-preview">Live Preview</button>
          <div className="signup_phone-container">
            <UserProfile
              formData={formData}
              logo={image.logoimage}
              bannerImage={image.bannerImage}
            />
          </div>
        </div>
        {isLinks ? <AddCard removeLink={addLin} isClick={isClick} /> : ""}
        {/* {isClick ? <AddLink data={linkData} sendData={sendData} /> : ""} */}
      </div>
    </>
  );
}
