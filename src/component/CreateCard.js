import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./imgUploader/cropImage";
import UserProfile from "./UserProfile/UserProfile";
import AddCard from "./AddCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CreateCard(props) {
  const [isLinks, setIslinks] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [linkData, setLinkData] = useState({});
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [isNavbar, setIsNavbar] = useState(false);
  const [editImage, setEditImage] = useState("");

  const [secondImage, setSecondImage] = useState({
    logoimage: "",
    bannerImage1: "",
    bannerImage2: "",
    bannerImage3: "",
    raw: "",
  });

  const [image, setImage] = useState({
    logoimage: "",
    bannerImage1: "",
    bannerImage2: "",
    bannerImage3: "",
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

  const navbarToggle = () => {
    setIsNavbar(!isNavbar);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image.logoimage,
        croppedAreaPixels,
        rotation
      );

      setSecondImage({
        logoimage: croppedImage,
      });

      setSecondImage((prevformData) => {
        return {
          ...prevformData,
          logoimage: croppedImage,
        };
      });

      console.log(image.logoimage);
      setEditImage(image.logoimage);
      setImage((prevformData) => {
        return {
          ...prevformData,
          logoimage: "",
        };
      });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  window.addEventListener("click", function (e) {
    const uploadList = document.querySelector(".uploadList");

    if (
      document.querySelector(".uploadImg-container") &&
      !document.querySelector(".uploadImg-container").contains(e.target)
    ) {
      if (uploadList.style.transform === "unset") {
        uploadList.style.transform =
          "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)";
      }
    }
  });
  return (
    <>
      <div className="createCard about p-relative h-100vh overflow-hidden">
        <div className="setting">
          <div className="admin">
            <div className="admin_detail">
              <Link to="/" className="signup_navbar-back">
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
              </Link>
              <div className="addImage">
                <h3>Upload banner image </h3>
                <div className="row">
                  <div className="col">
                    <div className="tabs">
                      <div className="tab">
                        <input type="checkbox" id="rd1" name="rd" />
                        <label className="tab-label" htmlFor="rd1">
                          Upload images
                          <FontAwesomeIcon icon={faPlus} />
                        </label>
                        <div className="tab-content p-relative">
                          <label
                            htmlFor="uploadBanner1"
                            className="imgUploader"
                          >
                            {image.bannerImage1 ? (
                              <img
                                src={image.bannerImage1}
                                alt=""
                                className="img-fluid"
                              />
                            ) : (
                              <>
                                item with images see 60% more visits from
                                customers
                              </>
                            )}
                          </label>
                          <div class="uploadImg-btn">
                            <FontAwesomeIcon icon={faCamera} />
                          </div>
                          <div class="uploadList">
                            <label
                              className="uploadList-item"
                              htmlFor="upload-photo"
                            >
                              Take photo
                              <FontAwesomeIcon icon={faCamera} />
                            </label>
                            <label
                              className="uploadList-item"
                              htmlFor="upload-button"
                            >
                              Upload image
                              <FontAwesomeIcon icon={faCloudArrowUp} />
                            </label>
                            {secondImage.logoimage ? (
                              <>
                                <div
                                  className="uploadList-item"
                                  onClick={() => {
                                    setImage((prevformData) => {
                                      return {
                                        ...prevformData,
                                        logoimage: editImage,
                                      };
                                    });
                                  }}
                                >
                                  Edit
                                  <FontAwesomeIcon icon={faPen} />
                                </div>
                                <div
                                  className="uploadList-item"
                                  onClick={() => {
                                    setSecondImage((prevformData) => {
                                      return {
                                        ...prevformData,
                                        logoimage: "",
                                      };
                                    });
                                  }}
                                >
                                  Clear
                                  <FontAwesomeIcon icon={faXmark} />
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                          <input
                            type="file"
                            id="uploadBanner1"
                            // style={{ display: "none" }}
                            className="d-none"
                            name="bannerImage1"
                            value=""
                            onChange={imagehandleChange}
                          />

                          <button
                            className="btn-primary mt-3"
                            onClick={() => {
                              setImage((prevformData) => {
                                return {
                                  ...prevformData,
                                  bannerImage1: "",
                                };
                              });
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="tab">
                        <input type="checkbox" id="rd2" name="rd" />
                        <label className="tab-label" htmlFor="rd2">
                          Upload images
                          <FontAwesomeIcon icon={faPlus} />
                        </label>
                        <div className="tab-content p-relative">
                          <label
                            htmlFor="uploadBanner2"
                            className="imgUploader"
                          >
                            {image.bannerImage2 ? (
                              <img
                                src={image.bannerImage2}
                                alt=""
                                className="img-fluid"
                              />
                            ) : (
                              <>
                                item with images see 60% more visits from
                                customers
                              </>
                            )}
                          </label>
                          <div class="uploadImg-btn">
                            <FontAwesomeIcon icon={faCamera} />
                          </div>
                          <div class="uploadList">
                            <label
                              className="uploadList-item"
                              htmlFor="upload-photo"
                            >
                              Take photo
                              <FontAwesomeIcon icon={faCamera} />
                            </label>
                            <label
                              className="uploadList-item"
                              htmlFor="upload-button"
                            >
                              Upload image
                              <FontAwesomeIcon icon={faCloudArrowUp} />
                            </label>
                            {secondImage.logoimage ? (
                              <>
                                <div
                                  className="uploadList-item"
                                  onClick={() => {
                                    setImage((prevformData) => {
                                      return {
                                        ...prevformData,
                                        logoimage: editImage,
                                      };
                                    });
                                  }}
                                >
                                  Edit
                                  <FontAwesomeIcon icon={faPen} />
                                </div>
                                <div
                                  className="uploadList-item"
                                  onClick={() => {
                                    setSecondImage((prevformData) => {
                                      return {
                                        ...prevformData,
                                        logoimage: "",
                                      };
                                    });
                                  }}
                                >
                                  Clear
                                  <FontAwesomeIcon icon={faXmark} />
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                          <input
                            type="file"
                            id="uploadBanner2"
                            // style={{ display: "none" }}
                            className="d-none"
                            name="bannerImage2"
                            value=""
                            onChange={imagehandleChange}
                          />

                          <button
                            className="btn-primary mt-3"
                            onClick={() => {
                              setImage((prevformData) => {
                                return {
                                  ...prevformData,
                                  bannerImage2: "",
                                };
                              });
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="tab">
                        <input type="checkbox" id="rd3" name="rd" />
                        <label className="tab-label" htmlFor="rd3">
                          Upload images
                          <FontAwesomeIcon icon={faPlus} />
                        </label>
                        <div className="tab-content p-relative">
                          <label
                            htmlFor="uploadBanner3"
                            className="imgUploader"
                          >
                            {image.bannerImage3 ? (
                              <img
                                src={image.bannerImage3}
                                alt=""
                                className="img-fluid"
                              />
                            ) : (
                              <>
                                item with images see 60% more visits from
                                customers
                              </>
                            )}
                          </label>
                          <div class="uploadImg-btn">
                            <FontAwesomeIcon icon={faCamera} />
                          </div>
                          <div class="uploadList">
                            <label
                              className="uploadList-item"
                              htmlFor="upload-photo"
                            >
                              Take photo
                              <FontAwesomeIcon icon={faCamera} />
                            </label>
                            <label
                              className="uploadList-item"
                              htmlFor="upload-button"
                            >
                              Upload image
                              <FontAwesomeIcon icon={faCloudArrowUp} />
                            </label>
                            {secondImage.logoimage ? (
                              <>
                                <div
                                  className="uploadList-item"
                                  onClick={() => {
                                    setImage((prevformData) => {
                                      return {
                                        ...prevformData,
                                        logoimage: editImage,
                                      };
                                    });
                                  }}
                                >
                                  Edit
                                  <FontAwesomeIcon icon={faPen} />
                                </div>
                                <div
                                  className="uploadList-item"
                                  onClick={() => {
                                    setSecondImage((prevformData) => {
                                      return {
                                        ...prevformData,
                                        logoimage: "",
                                      };
                                    });
                                  }}
                                >
                                  Clear
                                  <FontAwesomeIcon icon={faXmark} />
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                          <input
                            type="file"
                            id="uploadBanner3"
                            // style={{ display: "none" }}
                            className="d-none"
                            name="bannerImage3"
                            value=""
                            onChange={imagehandleChange}
                          />

                          <button
                            className="btn-primary mt-3"
                            onClick={() => {
                              setImage((prevformData) => {
                                return {
                                  ...prevformData,
                                  bannerImage3: "",
                                };
                              });
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="addImage p-relative">
                <h3>Upload Profile image </h3>
                {image.logoimage ? (
                  <>
                    <div className="crops-module">
                      <div className="crops">
                        <div className="crops-controls">
                          <button
                            className="z-1 btn"
                            type="button"
                            onClick={() => {
                              setImage({
                                preview: "",
                              });
                            }}
                          >
                            Cancel
                          </button>
                          <button
                            className="z-1 btn"
                            type="button"
                            onClick={showCroppedImage}
                          >
                            Save
                          </button>
                        </div>
                        <div className="crop-container">
                          <Cropper
                            image={image.logoimage}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            cropShape="round"
                            showGrid={false}
                          />
                        </div>
                        <div className="crop-edit">
                          <input
                            type="range"
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e) => {
                              setZoom(e.target.value);
                            }}
                            className="zoom-range"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div
                  className="uploadImg-container justify-content-between align-sm-items-start align-items-center mt-3 gap-sm-2 f-sm-column p-relative"
                  onClick={() => {
                    const uploadList = document.querySelector(".uploadList");
                    if (uploadList.style.transform === "unset") {
                      uploadList.style.transform =
                        "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)";
                    } else {
                      uploadList.style.transform = "unset";
                    }
                    navbarToggle();
                  }}
                >
                  <div className="upload-img">
                    {secondImage.logoimage ? (
                      <img
                        src={secondImage.logoimage}
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
                      className="d-none"
                      onChange={imagehandleChange}
                      name="logoimage"
                      value=""
                    />
                    <input
                      type="file"
                      id="upload-photo"
                      className="d-none"
                      onChange={imagehandleChange}
                      name="logoimage"
                      capture
                      value=""
                    />
                  </div>
                  <div class="uploadImg-btn">
                    <FontAwesomeIcon icon={faCamera} />
                  </div>
                </div>
                <div class="uploadList">
                  <label className="uploadList-item" htmlFor="upload-photo">
                    Take photo
                    <FontAwesomeIcon icon={faCamera} />
                  </label>
                  <label className="uploadList-item" htmlFor="upload-button">
                    Upload image
                    <FontAwesomeIcon icon={faCloudArrowUp} />
                  </label>
                  {secondImage.logoimage ? (
                    <>
                      <div
                        className="uploadList-item"
                        onClick={() => {
                          setImage((prevformData) => {
                            return {
                              ...prevformData,
                              logoimage: editImage,
                            };
                          });
                        }}
                      >
                        Edit
                        <FontAwesomeIcon icon={faPen} />
                      </div>
                      <div
                        className="uploadList-item"
                        onClick={() => {
                          setSecondImage((prevformData) => {
                            return {
                              ...prevformData,
                              logoimage: "",
                            };
                          });
                        }}
                      >
                        Clear
                        <FontAwesomeIcon icon={faXmark} />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="admin_detail-member">
                <h3>Enter user detail </h3>

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
                  {props.linkData.map((links, id) => {
                    return (
                      <button key={id} className="btn-primary" onClick={addLin}>
                        {links.linkType === "whatsapp" ? "WA" : ""}
                      </button>
                    );
                  })}
                  {/* <button className="btn-primary" onClick={addLin}>
                    FB
                  </button> */}
                  {/* <button className="btn-primary">Insta</button>
                  <button className="btn-primary">YT</button>
                  <button className="btn-primary">FB</button>
                  <button className="btn-primary">Insta</button>
                  <button className="btn-primary">YT</button>
                  <button className="btn-primary">FB</button>
                  <button className="btn-primary">Insta</button>
                  <button className="btn-primary">YT</button>
                  <button className="btn-primary">FB</button>
                  <button className="btn-primary">Insta</button>
                  <button className="btn-primary">YT</button> */}
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
                  <label className="did-floating-label">+91</label>
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
                  <label className="did-floating-label">+91</label>
                </div>
              </div>
              <button className="btn-primary">Save</button>
            </div>
          </div>
        </div>

        <div
          className={
            isLinks
              ? "d-md-none signup_phone text-center"
              : "signup_phone text-center"
          }
        >
          <button className="btn btn-preview">Live Preview</button>
          <div className="signup_phone-container">
            <UserProfile
              formData={formData}
              logo={image.logoimage}
              images={image}
            />
          </div>
        </div>

        {isLinks ? <AddCard removeLink={addLin} isClick={isClick} /> : ""}
        {/* {isClick ? <AddLink data={linkData} sendData={sendData} /> : ""} */}
      </div>
    </>
  );
}
