import React, { useState, useCallback, Component } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./imgUploader/cropImage";
import UserProfile from "./UserProfile/UserProfile";
import AddCard from "./AddCard";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import AddPlugin from "./Plugin/AddPlugin";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "./userDetail/Image";
import AddLink from "./AddLink";

export default function CreateCard(props) {
  const [isLinks, setIslinks] = useState(false);
  const [type, setType] = useState("link");
  const [isClick, setIsClick] = useState(false);
  const [isLinkClick, setIsLinkClick] = useState(false);
  const [isPlugin, setIsPlugin] = useState(false);

  const [phoneNum, setPhoneNum] = useState({
    whPhone: "1",
    phone: "1",
  });

  const [linkData, setLinkData] = useState({
    headerTitle: "",
    linkTitleInput: "",
    title: "",
    titleInput: "",
    type: "",
    linktype: "",
    icon: "",
  });

  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const [editImage, setEditImage] = useState({
    logoimage: "",
    bannerImage1: "",
    bannerImage2: "",
    bannerImage3: "",
  });

  const [secondImage, setSecondImage] = useState({
    logoimage: "",
    bannerImage1: "",
    bannerImage2: "",
    bannerImage3: "",
  });

  const [image, setImage] = useState({
    logoimage: "",
    bannerImage1: "",
    bannerImage2: "",
    bannerImage3: "",
  });

  const [uploadList, setUploadList] = useState({
    transform: "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)",
    transformEnd: "translateX(-50%)",
    uploadListcontainer: ".bannerImage1",
    uploadList: ".uploadBanner1",
  });

  const handleChange = (event, code) => {
    if (event === "whPhone" || event === "phone") {
      if (event === "whPhone") {
        setFormData((prevformData) => {
          return {
            ...prevformData,
            userInfo: {
              ...prevformData.userInfo,
              whatsappNumber: {
                ...prevformData.userInfo.whatsappNumber,
                countryCode: code,
              },
            },
          };
        });
      } else {
        setFormData((prevformData) => {
          return {
            ...prevformData,
            userInfo: {
              ...prevformData.userInfo,
              mobileNumber: {
                ...prevformData.userInfo.mobileNumber,
                countryCode: code,
              },
            },
          };
        });
      }
      setPhoneNum((prevData) => {
        return { ...prevData, [event]: code };
      });
    } else if (
      event.target.name === "whatsappNumber" ||
      event.target.name === "mobileNumber"
    ) {
      if (event.target.name === "mobileNumber") {
        setFormData((prevformData) => {
          return {
            ...prevformData,
            userInfo: {
              ...prevformData.userInfo,
              [event.target.name]: {
                ...prevformData.userInfo.mobileNumber,
                phoneNum: event.target.value,
              },
            },
          };
        });
      } else {
        setFormData((prevformData) => {
          return {
            ...prevformData,
            userInfo: {
              ...prevformData.userInfo,
              [event.target.name]: {
                ...prevformData.userInfo.whatsappNumber,
                whatsappNum: event.target.value,
              },
            },
          };
        });
      }
      if (event.target.value === "") {
        setFormData((prevformData) => {
          return {
            ...prevformData,
            userInfo: {
              ...prevformData.userInfo,
              [event.target.name]: "",
            },
          };
        });
      }
    } else {
      setFormData((prevformData) => {
        return {
          ...prevformData,
          userInfo: {
            ...prevformData.userInfo,
            [event.target.name]: event.target.value,
          },
        };
      });
    }
  };

  const addLin = () => {
    setIslinks(!isLinks);
  };
  const updateLink = (link, id) => {
    setIsLinkClick(!isLinkClick);

    setLinkData(() => {
      if (link && link.linkType && link.linkType === "call") {
        return {
          headerTitle: "Phone",
          linkTitleInput: "Call",
          title: "Phone Number*",
          titleInput: "Enter Phone Number*",
          type: "number",
          linktype: "call",
          icon: faPhone,
          linkData: link.titleInput,
          linkTitle: link.title,
          countryCode: link.countryCode,
          id: id,
        };
      } else if (link && link.linkType && link.linkType === "email") {
        return {
          headerTitle: "Link Title",
          linkTitleInput: "email",
          title: "Email",
          titleInput: "Enter Email",
          type: "email",
          linktype: "email",
          icon: "/email.png",
          linkData: link.titleInput,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.linkType && link.linkType === "website") {
        return {
          headerTitle: "Website Title",
          linkTitleInput: "Website",
          title: "Website*",
          titleInput: "Enter Website URL",
          type: "text",
          linktype: "website",
          icon: "/safari.png",
          linkData: link.titleInput,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.linkType && link.linkType === "whatsapp") {
        return {
          headerTitle: "Whatsapp Title",
          linkTitleInput: "Whatsapp",
          title: "Whatsapp*",
          titleInput: "Enter Whatsapp Number",
          type: "text",
          linktype: "whatsapp",
          icon: faWhatsapp,
          linkData: link.titleInput,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.linkType && link.linkType === "linkedin") {
        return {
          headerTitle: "Linkedin Title",
          linkTitleInput: "Linkedin",
          title: "Linkedin*",
          titleInput: "Enter Linkedin URl",
          type: "text",
          linktype: "linkedin",
          icon: faLinkedinIn,
          linkData: link.titleInput,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.linkType && link.linkType === "instagram") {
        return {
          headerTitle: "Instagram Title",
          linkTitleInput: "Instagram",
          title: "Instagram*",
          titleInput: "Enter Instagram URl",
          type: "text",
          linktype: "instagram",
          icon: faInstagram,
          linkData: link.titleInput,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.linkType && link.linkType === "facebook") {
        return {
          headerTitle: "Facebook Title",
          linkTitleInput: "Facebook",
          title: "Facebook*",
          titleInput: "Enter Facebook URl",
          type: "text",
          linktype: "facebook",
          icon: faFacebookF,
          linkData: link.titleInput,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.linkType && link.linkType === "address") {
        return {
          headerTitle: "Address Title",
          linkTitleInput: "Address",
          title: "Address*",
          titleInput: "Enter Address",
          type: "text",
          linktype: "address",
          icon: "/googlemap.png",
          linkData: link.titleInput,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.linkType && link.linkType === "youtube") {
        return {
          headerTitle: "Youtube Title",
          linkTitleInput: "Youtube",
          title: "Youtube*",
          titleInput: "Enter Youtube URl",
          type: "text",
          linktype: "youtube",
          icon: faYoutube,
          linkData: link.titleInput,
          linkTitle: link.title,
          id: id,
        };
      }
    });
  };
  const updatePlugin = (link, id) => {
    setIsPlugin(!isPlugin);
    setLinkData(() => {
      if (link && link.linkType && link.linkType === "youtube") {
        return {
          headerTitle: "Youtube Title",
          linkTitleInput: "Youtube",
          title: "Youtube*",
          value: "Enter Youtube URl",
          linktype: "text",
          type: "youtube",
          icon: faYoutube,
          linkData: link.titleInput,
          linkTitle: link.title,
          id: id,
        };
      }
    });
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
          setFormData((prevformData) => {
            return {
              ...prevformData,
              userImages: {
                ...prevformData.userImages,
                userProfile: croppedImage,
              },
            };
          });
        } else if (image.bannerImage1) {
          setSecondImage((prevformData) => {
            return {
              ...prevformData,
              bannerImage1: croppedImage,
            };
          });
          setFormData((prevformData) => {
            return {
              ...prevformData,
              userImages: {
                ...prevformData.userImages,
                bannerImage1: croppedImage,
              },
            };
          });
        } else if (image.bannerImage2) {
          setSecondImage((prevformData) => {
            return {
              ...prevformData,
              bannerImage2: croppedImage,
            };
          });
          setFormData((prevformData) => {
            return {
              ...prevformData,
              userImages: {
                ...prevformData.userImages,
                bannerImage2: croppedImage,
              },
            };
          });
        } else if (image.bannerImage3) {
          setSecondImage((prevformData) => {
            return {
              ...prevformData,
              bannerImage3: croppedImage,
            };
          });
          setFormData((prevformData) => {
            return {
              ...prevformData,
              userImages: {
                ...prevformData.userImages,
                bannerImage3: croppedImage,
              },
            };
          });

          setEditImage((prevformData) => {
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
      userProfile: secondImage.logoimage,
      bannerImage1: secondImage.bannerImage1,
      bannerImage2: secondImage.bannerImage2,
      bannerImage3: secondImage.bannerImage3,
    },
  });

  const textHander = async () => {
    var bannerImages = [];

    if (formData.userImages.bannerImage1) {
      bannerImages.push(formData.userImages.bannerImage1);
    }

    if (formData.userImages.bannerImage2) {
      bannerImages.push(formData.userImages.bannerImage2);
    }
    if (formData.userImages.bannerImage3) {
      bannerImages.push(formData.userImages.bannerImage3);
    }
    if (formData.userInfo.whatsappNumber) {
      bannerImages.push(formData.userImages.bannerImage3);
    }

    var requestObj = {
      name: formData.userInfo.username,
      name: formData.userInfo.username,
      designation: formData.userInfo.username,
      designation: formData.userInfo.designation,
      employeeId: formData.userInfo.employeeId,
      employeeBio: formData.userInfo.employeeBio,
      links: formData.userLink,
      officeEmailId: formData.userInfo.officeId,
      whatsAppNumber:
        formData.userInfo.whatsappNumber.countryCode +
        formData.userInfo.whatsappNumber.whatsappNum,
      mobileNumber:
        formData.userInfo.mobileNumber.countryCode +
        formData.userInfo.mobileNumber.phoneNum,
    };
    // const instance = axios.create({
    //   baseURL: "http://192.168.1.3:3000/members",
    // });
    console.log(requestObj);
    // var response = await axios.post(
    //   "http://192.168.1.3:3000/members/addMember",
    //   requestObj,
    //   {
    //     headers: {
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNTQ1ZGUyYy0yNDI0LTRjNTAtYTAwOS05YTFhZjFlYTM3Y2YiLCJpYXQiOjE2ODk2MTgxODAsImV4cCI6MTY4OTYyMTc4MH0.19A7aNJVo4DnGnx2wLlJzP_1Yj8lYGhEFPvgQLVmzqk",
    //     },
    //   }
    // );

    // console.log(formData);

    // console.log(response);
  };

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
                      <Image
                        setUploadList={setUploadList}
                        setSecondImage={setSecondImage}
                        secondImage={secondImage}
                        setImage={setImage}
                        editImage={editImage}
                        imagehandleChange={imagehandleChange}
                        imageNum="1"
                      />
                      <Image
                        setUploadList={setUploadList}
                        setSecondImage={setSecondImage}
                        secondImage={secondImage}
                        setImage={setImage}
                        editImage={editImage}
                        imagehandleChange={imagehandleChange}
                        imageNum="2"
                      />
                      <Image
                        setUploadList={setUploadList}
                        setSecondImage={setSecondImage}
                        secondImage={secondImage}
                        setImage={setImage}
                        editImage={editImage}
                        imagehandleChange={imagehandleChange}
                        imageNum="3"
                      />
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
                  {formData.userLink.map((links, id) => {
                    return (
                      <button
                        key={id}
                        className="btn-primary"
                        onClick={() => {
                          updateLink(links, id);
                        }}
                      >
                        {links.type === "call" ? "call" : ""}
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
                      setType("card");
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
                        onClick={() => {
                          updatePlugin(links, id);
                        }}
                      >
                        {links.type === "youtube" ? "youtube" : ""}
                      </button>
                    );
                  })}

                  <button
                    className="btn-primary"
                    onClick={() => {
                      addLin();
                      setType("plugin");
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
                    name="officeId"
                    onChange={handleChange}
                    value={formData.officeId}
                  />
                </div>
                <div className="p-relative mb-3 countriesCode">
                  <input
                    type="number"
                    className={
                      phoneNum.whPhone &&
                      phoneNum.whPhone.split("").length === 2
                        ? "countriesCode-input form-control formControl-2"
                        : phoneNum.whPhone &&
                          phoneNum.whPhone.split("").length === 3
                        ? "countriesCode-input form-control formControl-3"
                        : phoneNum.whPhone &&
                          phoneNum.whPhone.split("").length === 4
                        ? "countriesCode-input form-control formControl-4"
                        : "countriesCode-input form-control formControl-1"
                    }
                    id="designation"
                    placeholder="enter whatsApp number"
                    name="whatsappNumber"
                    onChange={handleChange}
                    value={formData.whatsappNumber}
                  />
                  {/* <label className="did-floating-label">+91</label> */}
                  <label
                    className="did-floating-label z-1"
                    // htmlFor="number"
                    aria-haspopup="listbox"
                  >
                    <PhoneInput
                      country={"us"}
                      value={phoneNum.whPhone}
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
                          phoneNum.whPhone &&
                          phoneNum.whPhone.split("").length === 2
                            ? "form-control CodeForm-control CodeForm-2"
                            : phoneNum.whPhone &&
                              phoneNum.whPhone.split("").length === 3
                            ? "form-control CodeForm-control CodeForm-3"
                            : phoneNum.whPhone &&
                              phoneNum.whPhone.split("").length === 4
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
                      phoneNum.phone && phoneNum.phone.split("").length === 2
                        ? "countriesCode-input form-control  formControl-2"
                        : phoneNum.phone &&
                          phoneNum.phone.split("").length === 3
                        ? "countriesCode-input form-control formControl-3"
                        : phoneNum.phone &&
                          phoneNum.phone.split("").length === 4
                        ? "countriesCode-input form-control formControl-4"
                        : "countriesCode-input form-control formControl-1"
                    }
                    id="company"
                    placeholder="enter Mobile number"
                    name="mobileNumber"
                    required
                    onChange={handleChange}
                    value={formData.mobileNumber}
                  />

                  <label
                    className="did-floating-label countriesCode"
                    // htmlFor="number"
                    aria-haspopup="listbox"
                  >
                    <PhoneInput
                      country={"us"}
                      value={phoneNum.phone}
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
                          phoneNum.phone &&
                          phoneNum.phone.split("").length === 2
                            ? "form-control CodeForm-control CodeForm-2"
                            : phoneNum.phone &&
                              phoneNum.phone.split("").length === 3
                            ? "form-control CodeForm-control CodeForm-3"
                            : phoneNum.phone &&
                              phoneNum.phone.split("").length === 4
                            ? "form-control CodeForm-control CodeForm-4"
                            : "form-control CodeForm-control",
                      }}
                    />
                  </label>
                </div>
              </div>
              <button
                type="formData"
                className="btn-primary"
                onClick={textHander}
              >
                Save
              </button>
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
              logo={secondImage.logoimage}
              images={secondImage}
            />
            {/* <Footer /> */}
          </div>
        </div>

        {isLinks ? (
          <AddCard
            removeLink={addLin}
            isClick={isClick}
            setFormData={setFormData}
            type={type}
          />
        ) : (
          ""
        )}
        {isLinkClick ? (
          <div className="addcard">
            <div className="addcard_container">
              <AddLink
                data={linkData}
                sendData={updateLink}
                setFormData={setFormData}
                formData={formData}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {isPlugin ? (
          <div className="addcard">
            <div className="addcard_container">
              <AddPlugin
                data={linkData}
                sendData={updatePlugin}
                setFormData={setFormData}
                formData={formData}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
