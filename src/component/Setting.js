import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import Subscription from "./setting/Subscription";
import Support from "./setting/Support";
import SettingDevices from "./setting/SettingDevices";
import Admin from "./setting/Admin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import AddCard from "./AddCard";
// import AddLink from "./AddLink";
import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";
import Cropper from "react-easy-crop";
import getCroppedImg from "./imgUploader/cropImage";
import AddLink from "./AddLink";

export default function Setting(props) {
  const { settingId } = useParams();
  const [isClick, setIsClick] = useState(false);
  const [isLinks, setIslinks] = useState(false);
  const [image, setImage] = useState({ preview: "", raw: "", secondImage: "" });
  const [secondImage, setSecondImage] = useState({ preview: "", raw: "" });
  const [editImage, setEditImage] = useState({ preview: "", raw: "" });
  const [alertText, setAlertText] = useState("");

  const [isLinkClick, setIsLinkClick] = useState(false);
  const [formData, setFormData] = useState({
    companyLogo: "",
    companyName: "",
    companyWebsite: "",
    companyCopyright: "",
    companyDisclaimer: "",
    // userLink: [],
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

  useEffect(() => {
    axios
      .get(
        "http://ec2-3-111-248-112.ap-south-1.compute.amazonaws.com:3000/settings/getCompanyDetails"
      )
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          window.location.href = "/login";
        }
      });
  }, []);

  const addLin = () => {
    setIslinks(!isLinks);
  };

  const handleChange = (e) => {
    if (!e.target.files[0].length) {
      setImage((prevformData) => {
        return {
          ...prevformData,
          preview: URL.createObjectURL(e.target.files[0]),
        };
      });
    }
  };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image.preview,
        croppedAreaPixels,
        rotation
      );

      setImage((prevformData) => {
        return {
          ...prevformData,
          secondImage: croppedImage,
        };
      });

      setImage((prevformData) => {
        return {
          ...prevformData,
          raw: prevformData.preview,
        };
      });

      setImage((prevformData) => {
        return {
          ...prevformData,
          preview: "",
        };
      });

      setFormData((prevformData) => {
        return {
          ...prevformData,
          companyLogo: croppedImage,
        };
      });
      setRotation(0);
      setZoom(1);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  window.addEventListener("click", function (e) {
    let uploadListcontainer = document.querySelector(".logo");
    let uploadListelemet = document.querySelector(".logoimage");

    if (uploadListcontainer && !uploadListcontainer.contains(e.target)) {
      if (uploadListelemet && uploadListelemet.style.transform === "unset") {
        uploadListelemet.style.transform =
          "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)";
      }
    }
  });

  const updateLink = (link, id) => {
    setIsLinkClick(!isLinkClick);

    // formData.usereLincoutryCode[link.value.string]
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
  const formhandle = (event) => {
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var bodyFormData = new FormData();

    for (var i in formData) {
      if (formData[i]) {
        bodyFormData.append(i, formData[i]);
      }
    }

    bodyFormData.forEach((e, i) => {
      console.log(i, e, typeof e);
    });

    // axios({
    //   method: "post",
    //   url: "http://ec2-3-111-248-112.ap-south-1.compute.amazonaws.com:3000/settings/updateCompanyDetails",
    //   data: bodyFormData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    //   .then((response) => {
    //     setAlertText(response.data.message);
    //     // window.location.href = "/setting/team";
    //   })
    //   .catch((error) => {
    //     if (error.response.data.message) {
    //       if (error.response.data.message === "Member already exists") {
    //         setAlertText(
    //           error.response.data.message + ", use different employee id"
    //         );
    //       } else {
    //         setAlertText(
    //           error.response.data.message[
    //             error.response.data.message.length - 1
    //           ]
    //         );
    //       }
    //     }
    //   });
  };

  return (
    <>
      <div className="d-flex h-100vh">
        <SIdebar navbarToggle={props.navbarToggle} />
        <div className="d-flex flex-direction-column w-100 overflow-hidden">
          <Topbar type="setting" isNavbar={props.isNavbar} text="Settings" />
          <div className="setting mt-4 p-relative">
            <nav className="sidebar">
              <div className="sidebar-collapse">
                <ul className="sidebar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting/team"
                    >
                      <img className="img-fluid" src="/dots.png" alt="" />
                      <p className="d-lg-none"> Team settings</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting/subscription"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <p className="d-lg-none">My subscription</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting/support"
                    >
                      <img className="img-fluid" src="/iconqr.png" alt="" />
                      {/* <FontAwesomeIcon icon={faHourglassEmpty} /> */}
                      <p className="d-lg-none">Support</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting/devices"
                    >
                      <FontAwesomeIcon icon={faNfcSymbol} />
                      <p className="d-lg-none">Add Flax Devices</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting/admin"
                    >
                      <FontAwesomeIcon icon={faUserShield} />
                      <p className="d-lg-none">Admin Details</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            {settingId === "team" ? (
              <>
                {image.preview ? (
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
                            image={image.preview}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            rotation={rotation}
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
                <div className="team_setting">
                  <form onSubmit={handleSubmit}>
                    <div className="Company_logo">
                      <h3>Company logo</h3>
                      <div className="upload-img">
                        <label
                          className="logo"
                          onClick={() => {
                            const logoimage =
                              document.querySelector(".logoimage");
                            if (logoimage.style.transform === "unset") {
                              logoimage.style.transform =
                                "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)";
                            } else {
                              logoimage.style.transform = "unset";
                            }
                          }}
                        >
                          {formData.companyLogo ? (
                            <img
                              src={
                                formData.companyLogo.name
                                  ? URL.createObjectURL(formData.companyLogo)
                                  : formData.companyLogo
                              }
                              alt="dummy"
                              className="img-fluid"
                            />
                          ) : (
                            <>
                              <span>
                                <FontAwesomeIcon icon={faPlus} />
                              </span>
                            </>
                          )}
                        </label>
                        <div className="uploadList logoimage" htmlFor="imgfor">
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
                          {formData.companyLogo ? (
                            <>
                              <div
                                className="uploadList-item"
                                onClick={() => {
                                  setImage((prevformData) => {
                                    return {
                                      ...prevformData,
                                      preview: image.raw,
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
                                      preview: "",
                                    };
                                  });
                                  setFormData((prevformData) => {
                                    return {
                                      ...prevformData,
                                      companyLogo: "",
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
                          id="upload-button"
                          className="d-none"
                          onChange={handleChange}
                          name="logoimage"
                          value=""
                          accept="image/*"
                        />
                        <input
                          type="file"
                          id="upload-photo"
                          className="d-none"
                          onChange={handleChange}
                          name="logoimage"
                          capture
                          value=""
                          accept="image/*"
                        />
                      </div>
                    </div>

                    <div className="Company_name">
                      {/* <h3>Company name</h3> */}

                      <input
                        type="text"
                        className="form-control"
                        id="company name"
                        placeholder="company name"
                        name="companyName"
                        required
                        onChange={formhandle}
                        value={formData.companyName}
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="website"
                        placeholder="website"
                        name="companyWebsite"
                        required
                        onChange={formhandle}
                        value={formData.companyWebsite}
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="copyright"
                        placeholder="copyright"
                        name="companyCopyright"
                        required
                        onChange={formhandle}
                        value={formData.companyCopyright}
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="disclaimer"
                        placeholder="disclaimer"
                        name="companyDisclaimer"
                        required
                        onChange={formhandle}
                        value={formData.companyDisclaimer}
                      />
                      <div>
                        <div className="admin_detail-social">
                          <div className="admin_detail-social-grid">
                            {/* {formData.userLink.map((links, id) => {
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
                                  {links.type === "instagram"
                                    ? "instagram"
                                    : ""}
                                  {links.type === "facebook" ? "facebook" : ""}
                                  {links.type === "twitter" ? "twitter" : ""}
                                  {links.type === "youtube" ? "youtube" : ""}
                                  {links.type === "googlemap" ? "address" : ""}
                                </button>
                              );
                            })} */}
                          </div>
                        </div>
                        <button type="button" onClick={addLin}>
                          Company social media links
                        </button>
                      </div>
                    </div>
                    <button type="submit">save</button>
                  </form>
                </div>
              </>
            ) : settingId === "subscription" ? (
              <Subscription />
            ) : settingId === "support" ? (
              <Support />
            ) : settingId === "devices" ? (
              <SettingDevices />
            ) : (
              <Admin />
            )}

            {alertText ? (
              <Alert alertText={alertText} setAlertText={setAlertText} />
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
                    setAlertText={setAlertText}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            {isLinks ? (
              <AddCard
                removeLink={addLin}
                isClick={isClick}
                setFormData={setFormData}
                setAlertText={setAlertText}
              />
            ) : (
              ""
            )}
          </div>

          {/* {isClick ? <AddLink data={linkData} sendData={sendData} /> : ""} */}
        </div>
      </div>
    </>
  );
}
