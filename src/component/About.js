import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Cropper from "react-easy-crop";
import getCroppedImg from "./imgUploader/cropImage";
import UserProfile from "./UserProfile/UserProfile";
import AddCard from "./AddCard";
import PhoneInput from "react-phone-input-2";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
export default function About(props) {
  const [startDate, setStartDate] = useState(new Date());

  const [isLinks, setIslinks] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [linkData, setLinkData] = useState({});
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [isNavbar, setIsNavbar] = useState(false);
  const [editImage, setEditImage] = useState({
    logoimage: "",
    bannerImage1: "",
    bannerImage2: "",
    bannerImage3: "",
    raw: "",
  });

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

  const [uploadList, setUploadList] = useState({
    transform: "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)",
    transformEnd: "translateX(-50%)",
    uploadListcontainer: ".bannerImage1",
    uploadList: ".uploadBanner1",
  });

  const handleChange = (event) => {
    props.setFormData((prevformData) => {
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

  const showCroppedImage = useCallback(
    async (e) => {
      try {
        const croppedImage = await getCroppedImg(
          image.logoimage ||
            image.bannerImage1 ||
            image.bannerImage2 ||
            image.bannerImage3,
          croppedAreaPixels,
          rotation
        );

        if (image.logoimage) {
          setSecondImage((prevformData) => {
            return {
              ...prevformData,
              logoimage: croppedImage,
            };
          });
        } else if (image.bannerImage1) {
          setSecondImage((prevformData) => {
            return {
              ...prevformData,
              bannerImage1: croppedImage,
            };
          });
        } else if (image.bannerImage2) {
          setSecondImage((prevformData) => {
            return {
              ...prevformData,
              bannerImage2: croppedImage,
            };
          });
        } else if (image.bannerImage3) {
          setSecondImage((prevformData) => {
            return {
              ...prevformData,
              bannerImage3: croppedImage,
            };
          });
        }

        setEditImage({
          logoimage: image.logoimage,
          bannerImage1: image.bannerImage1,
          bannerImage2: image.bannerImage2,
          bannerImage3: image.bannerImage3,
        });

        setImage((prevformData) => {
          return {
            ...prevformData,
            logoimage: "",
            bannerImage1: "",
            bannerImage2: "",
            bannerImage3: "",
          };
        });

        setRotation(0);

        setCroppedImage(croppedImage);
      } catch (e) {
        console.error(e);
      }
    },
    [croppedAreaPixels, rotation]
  );

  window.addEventListener("click", function (e) {
    let uploadListcontainer = document.querySelector(
      uploadList.uploadListcontainer
    );
    let uploadListelemet = document.querySelector(uploadList.uploadList);

    if (uploadListcontainer && !uploadListcontainer.contains(e.target)) {
      if (uploadListelemet.style.transform === uploadList.transformEnd) {
        uploadListelemet.style.transform = uploadList.transform;
      }
    }
  });

  const [formData, setFormData] = useState({
    userInfo: {},
    userLink: [],
    userPlugin: [],

    userImages: {
      userProfile: "",
      bannerImage1: "",
      bannerImage2: "",
      bannerImage3: "",
    },
  });

  const textHander = () => {
    console.log(formData);
  };
  console.log(props.data);
  return (
    <>
      <div className="setting">
        <div className="admin">
          <div className="admin_detail">
            <div className="addImage">
              <h3>Upload banner image </h3>
              {image.bannerImage1 ||
              image.bannerImage2 ||
              image.bannerImage3 ? (
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
                          image={
                            image.bannerImage1 ||
                            image.bannerImage2 ||
                            image.bannerImage3
                          }
                          crop={crop}
                          zoom={zoom}
                          rotation={rotation}
                          aspect={2 / 1}
                          onCropChange={setCrop}
                          onCropComplete={onCropComplete}
                          onZoomChange={setZoom}
                          // cropSize={{ width: 500, height: 240 }}
                          // showGrid={false}
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
                      <div className="crop_rotate">
                        <div
                          className="crop_rotate-left"
                          // htmlFor="crop_rotate-left"
                          onClick={() =>
                            setRotation((prevformData) => prevformData + 90)
                          }
                        >
                          <FontAwesomeIcon icon={faRotateLeft} />
                        </div>
                        <div
                          className="crop_rotate-right"
                          onClick={() =>
                            setRotation((prevformData) => prevformData - 90)
                          }
                        >
                          <FontAwesomeIcon icon={faRotateRight} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
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
                        <div
                          className="cursor_pointer bannerImage1"
                          onClick={() => {
                            setUploadList((prevformData) => {
                              return {
                                ...prevformData,
                                transform:
                                  "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)",
                                transformEnd: "translateX(-50%)",
                                uploadListcontainer: ".bannerImage1",
                                uploadList: ".uploadBanner1",
                              };
                            });
                            const uploadBanner1 =
                              document.querySelector(".uploadBanner1");
                            if (
                              uploadBanner1.style.transform ===
                              "translateX(-50%)"
                            ) {
                              uploadBanner1.style.transform =
                                "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)";
                            } else {
                              uploadBanner1.style.transform =
                                "translateX(-50%)";
                            }
                          }}
                        >
                          <div className="imgUploader">
                            {secondImage.bannerImage1 ? (
                              <img
                                src={secondImage.bannerImage1}
                                alt=""
                                className="img-fluid"
                              />
                            ) : (
                              <>
                                item with images see 60% more visits from
                                customers
                              </>
                            )}
                          </div>
                          <div className="uploadImg-btn">
                            <FontAwesomeIcon icon={faCamera} />
                          </div>
                        </div>
                        <div className="uploadList uploadBanner1">
                          <label
                            className="uploadList-item"
                            htmlFor="uploadBanner1-photo"
                          >
                            Take photo
                            <FontAwesomeIcon icon={faCamera} />
                          </label>
                          <label
                            className="uploadList-item"
                            htmlFor="uploadBanner1-image"
                          >
                            Upload image
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                          </label>
                          {secondImage.bannerImage1 ? (
                            <>
                              <div
                                className="uploadList-item"
                                onClick={() => {
                                  setImage((prevformData) => {
                                    return {
                                      ...prevformData,
                                      bannerImage1: editImage.bannerImage1,
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
                                      bannerImage1: "",
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
                          id="uploadBanner1-photo"
                          className="d-none"
                          name="bannerImage1"
                          value=""
                          onChange={imagehandleChange}
                          capture
                          accept="image/*"
                        />
                        <input
                          type="file"
                          id="uploadBanner1-image"
                          className="d-none"
                          name="bannerImage1"
                          value=""
                          onChange={imagehandleChange}
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <div className="tab">
                      <input type="checkbox" id="rd2" name="rd" />
                      <label className="tab-label" htmlFor="rd2">
                        Upload images
                        <FontAwesomeIcon icon={faPlus} />
                      </label>
                      <div className="tab-content p-relative">
                        <div
                          className="cursor_pointer bannerImage2"
                          onClick={() => {
                            setUploadList((prevformData) => {
                              return {
                                ...prevformData,
                                transform:
                                  "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)",
                                transformEnd: "translateX(-50%)",
                                uploadListcontainer: ".bannerImage2",
                                uploadList: ".uploadBanner2",
                              };
                            });
                            const uploadBanner2 =
                              document.querySelector(".uploadBanner2");
                            if (
                              uploadBanner2.style.transform ===
                              "translateX(-50%)"
                            ) {
                              uploadBanner2.style.transform =
                                "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)";
                            } else {
                              uploadBanner2.style.transform =
                                "translateX(-50%)";
                            }
                          }}
                        >
                          <div className="imgUploader">
                            {secondImage.bannerImage2 ? (
                              <img
                                src={secondImage.bannerImage2}
                                alt=""
                                className="img-fluid"
                              />
                            ) : (
                              <>
                                item with images see 60% more visits from
                                customers
                              </>
                            )}
                          </div>
                          <div className="uploadImg-btn">
                            <FontAwesomeIcon icon={faCamera} />
                          </div>
                        </div>
                        <div className="uploadList uploadBanner2">
                          <label
                            className="uploadList-item"
                            htmlFor="uploadBanner2-photo"
                          >
                            Take photo
                            <FontAwesomeIcon icon={faCamera} />
                          </label>
                          <label
                            className="uploadList-item"
                            htmlFor="uploadBanner2-image"
                          >
                            Upload image
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                          </label>
                          {secondImage.bannerImage2 ? (
                            <>
                              <div
                                className="uploadList-item"
                                onClick={() => {
                                  setImage((prevformData) => {
                                    return {
                                      ...prevformData,
                                      bannerImage2: editImage.bannerImage2,
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
                                      bannerImage2: "",
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
                          id="uploadBanner2-photo"
                          className="d-none"
                          name="bannerImage2"
                          value=""
                          onChange={imagehandleChange}
                          capture
                          accept="image/*"
                        />
                        <input
                          type="file"
                          id="uploadBanner2-image"
                          className="d-none"
                          name="bannerImage2"
                          value=""
                          onChange={imagehandleChange}
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <div className="tab">
                      <input type="checkbox" id="rd3" name="rd" />
                      <label className="tab-label" htmlFor="rd3">
                        Upload images
                        <FontAwesomeIcon icon={faPlus} />
                      </label>
                      <div className="tab-content p-relative">
                        <div
                          className="cursor_pointer bannerImage3"
                          onClick={() => {
                            setUploadList((prevformData) => {
                              return {
                                ...prevformData,
                                transform:
                                  "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)",
                                transformEnd: "translateX(-50%)",
                                uploadListcontainer: ".bannerImage3",
                                uploadList: ".uploadBanner3",
                              };
                            });
                            const uploadBanner3 =
                              document.querySelector(".uploadBanner3");
                            if (
                              uploadBanner3.style.transform ===
                              "translateX(-50%)"
                            ) {
                              uploadBanner3.style.transform =
                                "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)";
                            } else {
                              uploadBanner3.style.transform =
                                "translateX(-50%)";
                            }
                          }}
                        >
                          <div className="imgUploader">
                            {secondImage.bannerImage3 ? (
                              <img
                                src={secondImage.bannerImage3}
                                alt=""
                                className="img-fluid"
                              />
                            ) : (
                              <>
                                item with images see 60% more visits from
                                customers
                              </>
                            )}
                          </div>
                          <div className="uploadImg-btn">
                            <FontAwesomeIcon icon={faCamera} />
                          </div>
                        </div>
                        <div className="uploadList uploadBanner3">
                          <label
                            className="uploadList-item"
                            htmlFor="uploadBanner3-photo"
                          >
                            Take photo
                            <FontAwesomeIcon icon={faCamera} />
                          </label>
                          <label
                            className="uploadList-item"
                            htmlFor="uploadBanner3-image"
                          >
                            Upload image
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                          </label>
                          {secondImage.bannerImage3 ? (
                            <>
                              <div
                                className="uploadList-item"
                                onClick={() => {
                                  setImage((prevformData) => {
                                    return {
                                      ...prevformData,
                                      bannerImage3: editImage.bannerImage3,
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
                                      bannerImage3: "",
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
                          id="uploadBanner3-photo"
                          className="d-none"
                          name="bannerImage3"
                          value=""
                          onChange={imagehandleChange}
                          capture
                          accept="image/*"
                        />
                        <input
                          type="file"
                          id="uploadBanner3-image"
                          className="d-none"
                          name="bannerImage3"
                          value=""
                          onChange={imagehandleChange}
                          accept="image/*"
                        />
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
                          rotation={rotation.logoimage}
                          // cropSize={{ width: 110, height: 110 }}
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
                      <div className="crop_rotate">
                        <div
                          className="crop_rotate-left"
                          onClick={() =>
                            setRotation((prevformData) => prevformData - 90)
                          }
                        >
                          <FontAwesomeIcon icon={faRotateLeft} />
                        </div>
                        <div
                          className="crop_rotate-right"
                          onClick={() =>
                            setRotation((prevformData) => prevformData - 90)
                          }
                        >
                          <FontAwesomeIcon icon={faRotateRight} />
                        </div>
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
                  setUploadList((prevformData) => {
                    return {
                      ...prevformData,
                      transform:
                        "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)",
                      transformEnd: "unset",
                      uploadListcontainer: ".uploadImg-container",
                      uploadList: ".logoimage",
                    };
                  });
                  const logoimage = document.querySelector(".logoimage");
                  if (logoimage.style.transform === "unset") {
                    logoimage.style.transform =
                      "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)";
                  } else {
                    logoimage.style.transform = "unset";
                  }
                }}
                id="imgfor"
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
                    accept="image/*"
                  />
                  <input
                    type="file"
                    id="upload-photo"
                    className="d-none"
                    onChange={imagehandleChange}
                    name="logoimage"
                    capture
                    value=""
                    accept="image/*"
                  />
                </div>
                <div className="uploadImg-btn">
                  <FontAwesomeIcon icon={faCamera} />
                </div>
              </div>
              <div className="uploadList logoimage" htmlFor="imgfor">
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
                            logoimage: editImage.logoimage,
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
                  name="name"
                  onChange={handleChange}
                  value={props.formData.name}
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
                  // onChange={handleChange}
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
                  onChange={handleChange}
                  value={props.formData.employeeBio}
                />
              </div>
            </div>

            {/* <div className="admin_detail-social">
              <h3>Choose/add Social handles </h3>
              <div className="admin_detail-social-grid">
                {formData.userLink.map((links, id) => {
                  return (
                    <button key={id} className="btn-primary" onClick={addLin}>
                      {links.linkType === "phone" ? "phone" : ""}
                      {links.linkType === "email" ? "email" : ""}
                      {links.linkType === "website" ? "website" : ""}
                      {links.linkType === "whatsapp" ? "whatsapp" : ""}
                      {links.linkType === "linkedin" ? "linkedin" : ""}
                      {links.linkType === "instagram" ? "instagram" : ""}
                      {links.linkType === "facebook" ? "facebook" : ""}
                      {links.linkType === "twitter" ? "twitter" : ""}
                      {links.linkType === "youtube" ? "youtube" : ""}
                      {links.linkType === "address" ? "address" : ""}
                    </button>
                  );
                })}

                <button className="btn-primary" onClick={addLin}>
                  Add +
                </button>
              </div>
            </div> */}
            <div className="admin_detail-social">
              <h3>Choose/add Social handles </h3>
              <div className="admin_detail-social-grid">
                {formData.userLink.map((links, id) => {
                  return (
                    <button
                      key={id}
                      className="btn-primary"
                      // onClick={() => {
                      //   updateLink(links, id);
                      // }}
                    >
                      {links.type === "phone" ? "phone" : ""}
                      {links.type === "email" ? "email" : ""}
                      {links.type === "website" ? "website" : ""}
                      {links.type === "whatsapp" ? "whatsapp" : ""}
                      {links.type === "linkedin" ? "linkedin" : ""}
                      {links.type === "instagram" ? "instagram" : ""}
                      {links.type === "facebook" ? "facebook" : ""}
                      {links.type === "twitter" ? "twitter" : ""}
                      {links.type === "youtube" ? "youtube" : ""}
                      {links.type === "address" ? "address" : ""}
                    </button>
                  );
                })}

                <button
                  className="btn-primary"
                  onClick={() => {
                    addLin();
                    // setType("card");
                  }}
                >
                  Add +
                </button>
              </div>
            </div>
            <div className="admin_detail-social">
              <h3> Choose/add Plugin handles </h3>
              <div className="admin_detail-social-grid">
                {formData.userPlugin.map((links, id) => {
                  return (
                    <button
                      key={id}
                      className="btn-primary"
                      // onClick={() => {
                      //   updatePlugin(links, id);
                      // }}
                    >
                      {links.type === "youtube" ? "youtube" : ""}
                    </button>
                  );
                })}

                <button
                  className="btn-primary"
                  onClick={() => {
                    addLin();
                    // setType("plugin");
                  }}
                >
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
                  name="officeEmailId"
                  onChange={handleChange}
                  value={props.formData.officeEmailId}
                />
              </div>
              <div className="p-relative mb-3 countriesCode">
                <input
                  type="number"
                  className={
                    props.formData.whatsAppNumber &&
                    props.formData.whatsAppNumber.split("").length === 2
                      ? "countriesCode-input form-control formControl-2"
                      : props.formData.whatsAppNumber &&
                        props.formData.whatsAppNumber.split("").length === 3
                      ? "countriesCode-input form-control formControl-3"
                      : props.formData.whatsAppNumber &&
                        props.formData.whatsAppNumber.split("").length === 4
                      ? "countriesCode-input form-control formControl-4"
                      : "countriesCode-input form-control formControl-1"
                  }
                  id="designation"
                  placeholder="enter whatsApp number"
                  name="whatsappNumber"
                  onChange={handleChange}
                  value={props.formData.whatsAppNumber}
                />
                {/* <label className="did-floating-label">+91</label> */}
                <label
                  className="did-floating-label z-1"
                  // htmlFor="number"
                  aria-haspopup="listbox"
                >
                  <PhoneInput
                    country={"us"}
                    value={props.formData.whatsAppNumber}
                    onChange={handleChange.bind(this, "whPhone")}
                    enableSearch={true}
                    disableSearchIcon={true}
                    // disableCountryCode={true}
                    countryCodeEditable={false}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                      id: "number",
                      placeholder: "1",
                      className:
                        props.formData.whatsAppNumber &&
                        props.formData.whatsAppNumber.split("").length === 2
                          ? "form-control CodeForm-control CodeForm-2"
                          : props.formData.whatsAppNumber &&
                            props.formData.whatsAppNumber.split("").length === 3
                          ? "form-control CodeForm-control CodeForm-3"
                          : props.formData.whatsAppNumber &&
                            props.formData.whatsAppNumber.split("").length === 4
                          ? "form-control CodeForm-control CodeForm-4"
                          : "form-control CodeForm-control",
                    }}
                  />
                </label>
              </div>
              <div className="p-relative mb-3 countriesCode z">
                <input
                  type="number"
                  // className="form-control "
                  className={
                    props.formData.mobileNumber &&
                    props.formData.mobileNumber.split("").length === 2
                      ? "countriesCode-input form-control  formControl-2"
                      : props.formData.mobileNumber &&
                        props.formData.mobileNumber.split("").length === 3
                      ? "countriesCode-input form-control formControl-3"
                      : props.formData.mobileNumber &&
                        props.formData.mobileNumber.split("").length === 4
                      ? "countriesCode-input form-control formControl-4"
                      : "countriesCode-input form-control formControl-1"
                  }
                  id="company"
                  placeholder="enter Mobile number"
                  name="mobileNumber"
                  required
                  onChange={handleChange}
                  value={props.formData.mobileNumber}
                />

                <label
                  className="did-floating-label countriesCode"
                  // htmlFor="number"
                  aria-haspopup="listbox"
                >
                  <PhoneInput
                    country={"us"}
                    value={props.formData.mobileNumber}
                    onChange={handleChange.bind(this, "phone")}
                    enableSearch={true}
                    disableSearchIcon={true}
                    // disableCountryCode={true}
                    countryCodeEditable={false}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                      id: "number",
                      placeholder: "1",
                      className:
                        props.formData.mobileNumber &&
                        props.formData.mobileNumber.split("").length === 2
                          ? "form-control CodeForm-control CodeForm-2"
                          : props.formData.mobileNumber &&
                            props.formData.mobileNumber.split("").length === 3
                          ? "form-control CodeForm-control CodeForm-3"
                          : props.formData.mobileNumber &&
                            props.formData.mobileNumber.split("").length === 4
                          ? "form-control CodeForm-control CodeForm-4"
                          : "form-control CodeForm-control",
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="admin_authentication">
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
            </div>
            <button
              type="formData"
              className="btn-save mt-5"
              onClick={textHander}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {isLinks ? (
        <AddCard
          removeLink={addLin}
          isClick={isClick}
          setFormData={setFormData}
        />
      ) : (
        ""
      )}
    </>
  );
}
