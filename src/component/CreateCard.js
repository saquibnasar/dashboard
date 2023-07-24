import React, { useState, useCallback, Component } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./imgUploader/cropImage";
import UserProfile from "./UserProfile/UserProfile";
import AddCard from "./AddCard";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, json } from "react-router-dom";
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
                countryCode: code ? code : 1,
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
                countryCode: code ? code : 1,
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
      } else if (link && link.type && link.type === "address") {
        return {
          headerTitle: "Address Title",
          linkTitleInput: "Address",
          title: "Address*",
          titleInput: "Enter Address",
          type: "text",
          type: "address",
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
  const updatePlugin = (link, id) => {
  
    setIsPlugin(!isPlugin);
    setLinkData(() => {
      if (link && link.type && link.type === "youtube") {
        return {
          headerTitle: "Youtube Title",
          linkTitleInput: "Youtube",
          title: "Youtube*",
          value: "Enter Youtube URl",
          linktype: "text",
          type: "youtube",
          icon: faYoutube,
          linkData: link.value,
          linkTitle: link.title,
          id: id,
        };
      }
    });
  };
  const imagehandleChange = (e) => {

    if (e.target.name === "logoimage") {
      setFormData((prevformData) => {
        return {
          ...prevformData,
          userImages: {
            ...prevformData.userImages,
            userProfile: e.target.files[0],
          },
        };
      });
    } else if (e.target.name === "bannerImage1") {
      setFormData((prevformData) => {
        return {
          ...prevformData,
          userImages: {
            ...prevformData.userImages,
            bannerImage1: e.target.files[0],
          },
        };
      });
    } else if (e.target.name === "bannerImage2") {
      setFormData((prevformData) => {
        return {
          ...prevformData,
          userImages: {
            ...prevformData.userImages,
            bannerImage2: e.target.files[0],
          },
        };
      });
    } else if (e.target.name === "bannerImage3") {
      setFormData((prevformData) => {
        return {
          ...prevformData,
          userImages: {
            ...prevformData.userImages,
            bannerImage3: e.target.files[0],
          },
        };
      });
    }

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
            prevformData.userImages.userProfile.croppedAreaPixels =
              croppedAreaPixels;
            prevformData.userImages.userProfile.rotation = rotation;
          
            return {
              ...prevformData,
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
            prevformData.userImages.bannerImage1.croppedAreaPixels =
              croppedAreaPixels;
            prevformData.userImages.bannerImage1.rotation = rotation;

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
          setFormData((prevformData) => {
            prevformData.userImages.bannerImage2.croppedAreaPixels =
              croppedAreaPixels;
            prevformData.userImages.bannerImage2.rotation = rotation;

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
          setFormData((prevformData) => {
            prevformData.userImages.bannerImage3.croppedAreaPixels =
              croppedAreaPixels;
            prevformData.userImages.bannerImage3.rotation = rotation;
            return {
              ...prevformData,
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
      userProfile: "",
      bannerImage1: "",
      bannerImage2: "",
      bannerImage3: "",
    },
  });

  const textHander = async () => {
    var bodyFormData = new FormData();
    var bannerImages = [];
    let whatsAppNumber = "";
    let mobileNumber = "";


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
      let code = formData.userInfo.whatsappNumber.countryCode
        ? formData.userInfo.whatsappNumber.countryCode
        : 1;
      whatsAppNumber = code + formData.userInfo.whatsappNumber.whatsappNum;
    }
    if (formData.userInfo.whatsappNumber) {
      let code = formData.userInfo.mobileNumber.countryCode
        ? formData.userInfo.mobileNumber.countryCode
        : 1;
      mobileNumber = code + formData.userInfo.mobileNumber.phoneNum;
    }
    console.log(formData.userImages);
    // console.log(`a[] blobk ${json}`);

    var requestObj = {
      name: formData.userInfo.username,
      profileImage: formData.userImages.userProfile,

      bannerImages: bannerImages,
      designation: formData.userInfo.designation,
      employeeId: formData.userInfo.employeeId,
      employeeBio: formData.userInfo.employeeBio,
      links: formData.userLink,
      officeEmailId: formData.userInfo.officeId,
      whatsAppNumber: whatsAppNumber,
      mobileNumber: mobileNumber,
    };

    for (var i in requestObj) {
      if (i == "links") {
        for (let j = 0; j < requestObj[i].length; j++) {
          console.log(requestObj[i][j]);
          // {title: 'my phone', value: '+12342342342', type: 'phone'}

          bodyFormData.append(`links[${j}][title]`, requestObj[i][j].title);
          bodyFormData.append(`links[${j}][value]`, requestObj[i][j].value);
          bodyFormData.append(`links[${j}][type]`, requestObj[i][j].type);
        }
        // bodyFormData.append(i, requestObj[i]);
      } else if (i == "bannerImages") {
        for (let j = 0; j < requestObj[i].length; j++) {
          bodyFormData.append(i, requestObj[i][j]);
        }
      } else {
        bodyFormData.append(i, requestObj[i]);
      }
    }

    for (var pair of bodyFormData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // console.log(bodyFormData.getAll("links"));

    axios({
      method: "post",
      url: "http://192.168.1.7:3000/members/addMember",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNTQ1ZGUyYy0yNDI0LTRjNTAtYTAwOS05YTFhZjFlYTM3Y2YiLCJpYXQiOjE2OTAyMjMxNjgsImV4cCI6MTY5MDIyNjc2OH0.grVlgowWg0oMWAq37otsNRYxgYGKmtcVLOXpHyLiGec",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
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
                    console.log("cret", links);
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
