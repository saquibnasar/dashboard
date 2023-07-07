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
import { NavLink, useParams } from "react-router-dom";
import AddCard from "./AddCard";
// import AddLink from "./AddLink";

import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./imgUploader/cropImage";
export default function Setting(props) {
  const { settingId } = useParams();
  const [isClick, setIsClick] = useState(false);
  const [isLinks, setIslinks] = useState(false);
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [testimage, setTestimage] = useState({ preview: "", raw: "" });
  const addLin = () => {
    setIslinks(!isLinks);
  };

  const handleChange = (e) => {
    // console.log();
    if (!e.target.files[0].length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", image.raw);

  //   await fetch("YOUR_URL", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     body: formData,
  //   });
  // };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

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

      setTestimage({
        preview: croppedImage,
      });
      setImage({
        preview: "",
        raw: "",
      });
      // console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

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
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className="team_setting">
                  <form>
                    <div className="Company_logo">
                      <h3>Company logo</h3>
                      <div className="upload-img">
                        <label className="logo" htmlFor="upload-button">
                          {testimage.preview ? (
                            <img
                              src={testimage.preview}
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
                        <input
                          type="file"
                          id="upload-button"
                          // style={{ display: "none" }}
                          accept="image/*"
                          className="d-none"
                          value=""
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="Company_name">
                      {/* <h3>Company name</h3> */}
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Company name"
                      />
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Website"
                      />
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Copyright"
                      />
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Disclaimer "
                      />
                      <button type="button" onClick={addLin}>
                        Company social media links
                      </button>
                    </div>
                    <button type="submit">Update</button>
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
            {isLinks ? <AddCard removeLink={addLin} isClick={isClick} /> : ""}
          </div>

          {/* {isClick ? <AddLink data={linkData} sendData={sendData} /> : ""} */}
        </div>
      </div>
    </>
  );
}
