import React, { useState, useCallback, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Cropper from "react-easy-crop";
import getCroppedImg from "./imgUploader/cropImage";
import PhoneInput from "react-phone-input-2";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import AddLink from "./AddLink";
import AdduCard from "./AddCard";
import Image from "./userDetail/Image";
import ALert from "./Alert";
import axios from "axios";

export default function About(props) {
  const [startDate, setStartDate] = useState(new Date());

  const [isLinks, setIslinks] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [linkData, setLinkData] = useState({});
  const [isSend, setIsSend] = useState(false);
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [isNavbar, setIsNavbar] = useState(false);
  const [isLinkClick, setIsLinkClick] = useState(false);
  const [alertText, setAlertText] = useState("");
  // const [editImage, setEditImage] = useState({
  //   logoimage: `${props.formData.profileImage}`,
  //   bannerImage1: `${props.formData.bannerImages[0]}`,
  //   bannerImage2: `${props.formData.bannerImages[1]}`,
  //   bannerImage3: `${props.formData.bannerImages[2]}`,
  // });

  const [secondImage, setSecondImage] = useState({
    logoimage: props.formData.profileImage
      ? `${props.formData.profileImage}`
      : "",
    bannerImage1:
      props.formData.bannerImages && props.formData.bannerImages[0]
        ? `${props.formData.bannerImages[0]}`
        : "",
    bannerImage2:
      props.formData.bannerImages && props.formData.bannerImages[1]
        ? `${props.formData.bannerImages[1]}`
        : "",
    bannerImage3:
      props.formData.bannerImages && props.formData.bannerImages[2]
        ? `${props.formData.bannerImages[2]}`
        : "",
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
          props.setFormData((prevformData) => {
            return {
              ...prevformData,
              profileImage: croppedImage,
            };
          });
        } else if (image.bannerImage1) {
          setSecondImage((prevformData) => {
            return {
              ...prevformData,
              bannerImage1: croppedImage,
            };
          });
          props.setFormData((prevformData) => {
            if (prevformData.bannerImages) {
              prevformData.bannerImages.splice(0, 1, croppedImage);
            } else {
              prevformData.bannerImages = [];
              prevformData.bannerImages.push(croppedImage);
            }

            return {
              ...prevformData,
            };
          });
        } else if (image.bannerImage2) {
          setSecondImage((prevformData) => {
            return {
              ...prevformData,
              bannerImage2: croppedImage,
            };
          });
          props.setFormData((prevformData) => {
            if (prevformData.bannerImages) {
              prevformData.bannerImages.splice(1, 1, croppedImage);
            } else {
              prevformData.bannerImages = [];
              prevformData.bannerImages.push(croppedImage);
            }

            return {
              ...prevformData,
            };
          });
        } else if (image.bannerImage3) {
          setSecondImage((prevformData) => {
            return {
              ...prevformData,
              bannerImage3: croppedImage,
            };
          });
          props.setFormData((prevformData) => {
            if (prevformData.bannerImages) {
              prevformData.bannerImages.splice(2, 1, croppedImage);
            } else {
              prevformData.bannerImages = [];
              prevformData.bannerImages.push(croppedImage);
            }

            return {
              ...prevformData,
            };
          });
        }

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
        setZoom(1);
        setCroppedImage(croppedImage);
      } catch (e) {
        setAlertText(e);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    var bodyFormData = new FormData();
    var bannerImages = [];
    let whatsAppNumber = "";
    let mobileNumber = "";

    // if (props.formData.userImages.bannerImage1) {
    //   bannerImages.push(props.formData.userImages.bannerImage1);
    // }

    // if (props.formData.userImages.bannerImage2) {
    //   bannerImages.push(props.formData.userImages.bannerImage2);
    // }
    // if (props.formData.userImages.bannerImage3) {
    //   bannerImages.push(props.formData.userImages.bannerImage3);
    // }

    let requestObj = new Map();
    console.log(props.formData.userLink);
    requestObj = {
      name: props.formData.name,
      profileImage: props.formData.profileImage,
      bannerImages: props.formData.bannerImages,
      designation: props.formData.designation,
      employeeId: props.formData.employeeId,
      employeeBio: props.formData.employeeBio,
      links:
        props.formData.userLink.length === 0 ? null : props.formData.userLink,
      officeEmailId: props.formData.officeEmailId,
      whatsAppNumber:
        props.formData.whatsAppNumber &&
        props.formData.whatsAppNumber.phoneNumber
          ? {
              phoneNumber: props.formData.whatsAppNumber.phoneNumber,
              code: props.formData.whatsAppNumber.code,
            }
          : null,
      mobileNumber:
        props.formData.mobileNumber && props.formData.mobileNumber.phoneNumber
          ? {
              phoneNumber: props.formData.mobileNumber.phoneNumber,
              code: props.formData.mobileNumber.code,
            }
          : null,
    };

    if (
      requestObj.whatsAppNumber &&
      (requestObj.whatsAppNumber.phoneNumber.split("").length < 8 ||
        requestObj.whatsAppNumber.phoneNumber.split("").length > 10)
    ) {
      setAlertText(
        "whatsappNumber cann't be less then 8 and cann't be more then 10"
      );
    } else if (
      requestObj.mobileNumber &&
      (requestObj.mobileNumber.phoneNumber.split("").length < 8 ||
        requestObj.mobileNumber.phoneNumber.split("").length > 10)
    ) {
      setAlertText(
        "mobileNumber cann't be less then 8 and cann't be more then 10"
      );
    } else {
      for (var i in requestObj) {
        if (i == "bannerImages") {
          if (requestObj[i]) {
            for (let j = 0; j < requestObj[i].length; j++) {
              if (requestObj[i][j].name) {
                if (requestObj[i]) {
                  bodyFormData.append("bannerImages", j);
                  bodyFormData.append("bannerImages", requestObj[i][j]);
                }
              }
            }
          }
        } else if (i == "links" && requestObj[i]) {
          for (let j = 0; j < requestObj[i].length; j++) {
            if (requestObj[i][j].type === "phone") {
              bodyFormData.append(`links[${j}][title]`, requestObj[i][j].title);
              bodyFormData.append(`links[${j}][value]`, requestObj[i][j].value);
              bodyFormData.append(`links[${j}][type]`, requestObj[i][j].type);
              bodyFormData.append(
                `links[${j}][countryCode]`,
                requestObj[i][j].countryCode
              );
              bodyFormData.append(
                `links[${j}][isActive]`,
                requestObj[i][j].isActive
              );
            } else {
              bodyFormData.append(`links[${j}][title]`, requestObj[i][j].title);
              bodyFormData.append(`links[${j}][value]`, requestObj[i][j].value);
              bodyFormData.append(`links[${j}][type]`, requestObj[i][j].type);
              bodyFormData.append(
                `links[${j}][isActive]`,
                requestObj[i][j].isActive
              );
            }
          }
        } else if (
          (i == "whatsAppNumber" || i == "mobileNumber") &&
          requestObj[i]
        ) {
          bodyFormData.append(`${i}[phoneNumber]`, requestObj[i].phoneNumber);
          bodyFormData.append(`${i}[code]`, requestObj[i].code);
        } else {
          if (requestObj[i]) {
            bodyFormData.append(i, requestObj[i]);
          }
        }
      }

      bodyFormData.forEach((e, i) => {
        console.log(i, e, typeof e);
      });

      axios({
        method: "post",
        url: "http://13.127.69.231/members/updatemember",
        data: bodyFormData,
      })
        .then((response) => {
          setAlertText(response.data.message);
          // window.location.href = window.location.href;
        })
        .catch((error) => {
          if (error.response.data.message) {
            if (error.response.data.message === "Member already exists") {
              setAlertText(
                error.response.data.message + ", use different employee id"
              );
            } else {
              setAlertText(
                error.response.data.message[
                  error.response.data.message.length - 1
                ]
              );
            }
          }
        });
    }
  };

  const updateLink = (link, id) => {
    setIsLinkClick(!isLinkClick);
    setLinkData(() => {
      if (link && link.type && link.type === "phone") {
        return {
          headerTitle: "Phone",
          linkTitleInput: "phone",
          title: "Phone Number*",
          titleInput: "Enter Phone Number*",
          type: "number",
          type: "phone",
          icon: faPhone,
          linkData: link.value,
          linkTitle: link.title,
          countryCode: link.countryCode,
          countryCode: link.countryCode ? link.countryCode : "1",
          id: id,
        };
      } else if (link && link.type && link.type === "email") {
        return {
          headerTitle: "Link Title",
          linkTitleInput: "email",
          title: "Email",
          titleInput: "Enter Email",
          type: "email",
          type: "email",
          icon: "/email.png",
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "website") {
        return {
          headerTitle: "Website Title",
          linkTitleInput: "Website",
          title: "Website*",
          titleInput: "Enter Website URL",
          type: "text",
          type: "website",
          icon: "/safari.png",
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "whatsapp") {
        return {
          headerTitle: "Whatsapp Title",
          linkTitleInput: "Whatsapp",
          title: "Whatsapp*",
          titleInput: "Enter Whatsapp Number",
          type: "text",
          type: "whatsapp",
          icon: faWhatsapp,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "linkedin") {
        return {
          headerTitle: "Linkedin Title",
          linkTitleInput: "Linkedin",
          title: "Linkedin*",
          titleInput: "Enter Linkedin URl",
          type: "text",
          type: "linkedin",
          icon: faLinkedinIn,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "instagram") {
        return {
          headerTitle: "Instagram Title",
          linkTitleInput: "Instagram",
          title: "Instagram*",
          titleInput: "Enter Instagram URl",
          type: "text",
          type: "instagram",
          icon: faInstagram,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "facebook") {
        return {
          headerTitle: "Facebook Title",
          linkTitleInput: "Facebook",
          title: "Facebook*",
          titleInput: "Enter Facebook URl",
          type: "text",
          type: "facebook",
          icon: faFacebookF,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "twitter") {
        return {
          headerTitle: "Twitter Title",
          linkTitleInput: "Twitter",
          title: "Twitter*",
          titleInput: "Enter Twiter URL",
          type: "text",
          type: "twitter",
          icon: faTwitter,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "googlemap") {
        return {
          headerTitle: "Address Title",
          linkTitleInput: "Address",
          title: "Address*",
          titleInput: "Enter Address",
          type: "text",
          type: "googlemap",
          icon: "/googlemap.png",
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      } else if (link && link.type && link.type === "youtube") {
        return {
          headerTitle: "Youtube Title",
          linkTitleInput: "Youtube",
          title: "Youtube*",
          titleInput: "Enter Youtube URl",
          type: "text",
          type: "youtube",
          icon: faYoutube,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      }
    });
  };

  useEffect(() => {
    const setting = document.querySelector(".setting");
    setting.scrollTop = 0;
  }, []);

  return (
    <>
      <div className="setting">
        <div className="admin">
          <div className="admin_detail">
            <form action="" onSubmit={handleSubmit}>
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
                        // editImage={editImage}
                        imagehandleChange={imagehandleChange}
                        imageNum="1"
                        setFormData={props.setFormData}
                        type="about"
                      />
                      <Image
                        setUploadList={setUploadList}
                        setSecondImage={setSecondImage}
                        secondImage={secondImage}
                        setImage={setImage}
                        // editImage={editImage}
                        imagehandleChange={imagehandleChange}
                        imageNum="2"
                        setFormData={props.setFormData}
                        type="about"
                      />
                      <Image
                        setUploadList={setUploadList}
                        setSecondImage={setSecondImage}
                        secondImage={secondImage}
                        setImage={setImage}
                        // editImage={editImage}
                        imagehandleChange={imagehandleChange}
                        imageNum="3"
                        setFormData={props.setFormData}
                        type="about"
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
                        // src={secondImage.logoimage}
                        src={`${props.formData.profileImage}`}
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
                              logoimage: secondImage.logoimage,
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
                          props.setFormData((prevformData) => {
                            prevformData.profileImag = null;

                            return prevformData;
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
                    onChange={props.handleChange}
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
                    onChange={props.handleChange}
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
                    onChange={props.handleChange}
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
                    // required
                    onChange={props.handleChange}
                    value={
                      !(props.formData.employeeBio === "undefined")
                        ? props.formData.employeeBio
                        : ""
                    }
                  />
                </div>
              </div>

              <div className="admin_detail-social">
                <h3>Choose/add Social handles </h3>
                <div className="admin_detail-social-grid">
                  {props.formData &&
                    props.formData.userLink &&
                    props.formData.userLink.map((links, id) => {
                      return (
                        <button
                          key={id}
                          className="btn-primary"
                          type="button"
                          onClick={() => {
                            updateLink(links, id);
                          }}
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
                          {links.type === "googlemap" ? "address" : ""}
                        </button>
                      );
                    })}

                  <button
                    className="btn-primary"
                    type="button"
                    onClick={() => {
                      props.addLin();
                      // setType("card");
                    }}
                  >
                    Add +
                  </button>
                </div>
              </div>
              {/* <div className="admin_detail-social">
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
            </div> */}
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
                    onChange={props.handleChange}
                    value={
                      !(props.formData.officeEmailId === "undefined")
                        ? props.formData.officeEmailId
                        : ""
                    }
                  />
                </div>
                <div className="p-relative mb-3 countriesCode">
                  <input
                    type="number"
                    className={
                      props.formData.whatsAppNumber &&
                      props.formData.whatsAppNumber.code.split("").length === 2
                        ? "countriesCode-input form-control formControl-2"
                        : props.formData.whatsAppNumber &&
                          props.formData.whatsAppNumber.code.split("")
                            .length === 3
                        ? "countriesCode-input form-control formControl-3"
                        : props.formData.whatsAppNumber &&
                          props.formData.whatsAppNumber.code.split("")
                            .length === 4
                        ? "countriesCode-input form-control formControl-4"
                        : "countriesCode-input form-control formControl-1"
                    }
                    id="designation"
                    placeholder="enter whatsApp number"
                    name="whatsAppNumber"
                    onChange={props.handleChange}
                    value={
                      props.formData.whatsAppNumber &&
                      props.formData.whatsAppNumber.phoneNumber
                        ? props.formData.whatsAppNumber.phoneNumber
                        : ""
                    }
                  />

                  <label
                    className="did-floating-label z-1"
                    aria-haspopup="listbox"
                  >
                    <PhoneInput
                      value={
                        props.formData.whatsAppNumber
                          ? props.formData.whatsAppNumber.code
                          : ""
                      }
                      enableAreaCodes={true}
                      onChange={props.handleChange.bind(this, "whPhone")}
                      enableSearch={true}
                      disableSearchIcon={true}
                      countryCodeEditable={false}
                      country="us"
                      inputProps={{
                        name: "phone",
                        // required: true,
                        autoFocus: true,
                        id: "number",
                        placeholder: "1",

                        className:
                          props.formData.whatsAppNumber &&
                          props.formData.whatsAppNumber.code.split("")
                            .length === 2
                            ? "form-control CodeForm-control CodeForm-2"
                            : props.formData.whatsAppNumber &&
                              props.formData.whatsAppNumber.code.split("")
                                .length === 3
                            ? "form-control CodeForm-control CodeForm-3"
                            : props.formData.whatsAppNumber &&
                              props.formData.whatsAppNumber.code.split("")
                                .length === 4
                            ? "form-control CodeForm-control CodeForm-4"
                            : "form-control CodeForm-control",
                      }}
                    />
                  </label>
                </div>
                <div className="p-relative mb-3 countriesCode z">
                  <input
                    type="number"
                    className={
                      props.formData.mobileNumber &&
                      props.formData.mobileNumber.code.split("").length === 2
                        ? "countriesCode-input form-control  formControl-2"
                        : props.formData.mobileNumber &&
                          props.formData.mobileNumber.code.split("").length ===
                            3
                        ? "countriesCode-input form-control formControl-3"
                        : props.formData.mobileNumber &&
                          props.formData.mobileNumber.code.split("").length ===
                            4
                        ? "countriesCode-input form-control formControl-4"
                        : "countriesCode-input form-control formControl-1"
                    }
                    id="company"
                    placeholder="enter Mobile number"
                    name="mobileNumber"
                    // required
                    onChange={props.handleChange}
                    value={
                      props.formData.mobileNumber &&
                      props.formData.mobileNumber.phoneNumber
                        ? props.formData.mobileNumber.phoneNumber
                        : ""
                    }
                  />

                  <label
                    className="did-floating-label countriesCode"
                    aria-haspopup="listbox"
                  >
                    <PhoneInput
                      value={
                        props.formData.mobileNumber
                          ? props.formData.mobileNumber.code
                          : ""
                      }
                      onChange={props.handleChange.bind(this, "phone")}
                      enableSearch={true}
                      disableSearchIcon={true}
                      // disableCountryCode={true}
                      countryCodeEditable={false}
                      country="us"
                      inputProps={{
                        name: "phone",
                        // required: true,
                        autoFocus: true,
                        id: "number",
                        placeholder: "1",
                        className:
                          props.formData.mobileNumber &&
                          props.formData.mobileNumber.code.split("").length ===
                            2
                            ? "form-control CodeForm-control CodeForm-2"
                            : props.formData.mobileNumber &&
                              props.formData.mobileNumber.code.split("")
                                .length === 3
                            ? "form-control CodeForm-control CodeForm-3"
                            : props.formData.mobileNumber &&
                              props.formData.mobileNumber.code.split("")
                                .length === 4
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
                      <input
                        className="tgl tgl-flat"
                        id="cb4"
                        type="checkbox"
                      />
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
              <button type="formData" className="btn-save mt-5">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      {alertText ? (
        <ALert alertText={alertText} setAlertText={setAlertText} />
      ) : (
        ""
      )}
      {props.isLinks ? (
        <AdduCard
          removeLink={props.addLin}
          isClick={isClick}
          setFormData={props.setFormData}
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
              setFormData={props.setFormData}
              formData={props.formData}
              setAlertText={setAlertText}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
