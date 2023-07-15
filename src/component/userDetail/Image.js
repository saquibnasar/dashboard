import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Image(props) {
  return (
    <>
      <div className="tab">
        <input type="checkbox" id={`rd${props.imageNum}`} name="rd" />
        <label className="tab-label" htmlFor={`rd${props.imageNum}`}>
          Upload images
          <FontAwesomeIcon icon={faPlus} />
        </label>
        <div className="tab-content p-relative">
          <div
            className={`cursor_pointer bannerImage${props.imageNum}`}
            onClick={() => {
              props.setUploadList((prevformData) => {
                return {
                  ...prevformData,
                  transform:
                    "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)",
                  transformEnd: "translateX(-50%)",
                  uploadListcontainer: `.bannerImage${props.imageNum}`,
                  uploadList: `.uploadBanner${props.imageNum}`,
                };
              });

              const uploadBanner1 = document.querySelector(
                `.uploadBanner${props.imageNum}`
              );
              if (uploadBanner1.style.transform === "translateX(-50%)") {
                uploadBanner1.style.transform =
                  "translateX(-102px) translateY(-40px) translateZ(0px) scale(0)";
              } else {
                uploadBanner1.style.transform = "translateX(-50%)";
              }
            }}
          >
            <div className="imgUploader">
              {props.imageNum === "1" ? (
                props.secondImage.bannerImage1 ? (
                  <img
                    src={props.secondImage.bannerImage1}
                    alt=""
                    className="img-fluid"
                  />
                ) : (
                  <>item with images see 60% more visits from customers</>
                )
              ) : props.imageNum === "2" ? (
                props.secondImage.bannerImage2 ? (
                  <img
                    src={props.secondImage.bannerImage2}
                    alt=""
                    className="img-fluid"
                  />
                ) : (
                  <>item with images see 60% more visits from customers</>
                )
              ) : props.secondImage.bannerImage3 ? (
                <img
                  src={props.secondImage.bannerImage3}
                  alt=""
                  className="img-fluid"
                />
              ) : (
                <>item with images see 60% more visits from customers</>
              )}
            </div>
            <div className="uploadImg-btn">
              <FontAwesomeIcon icon={faCamera} />
            </div>
          </div>
          <div className={`uploadList uploadBanner${props.imageNum}`}>
            <label
              className="uploadList-item"
              htmlFor={`uploadBanner${props.imageNum}-photo`}
            >
              Take photo
              <FontAwesomeIcon icon={faCamera} />
            </label>
            <label
              className="uploadList-item"
              htmlFor={`uploadBanner${props.imageNum}-image`}
            >
              Upload image
              <FontAwesomeIcon icon={faCloudArrowUp} />
            </label>

            {props.imageNum === "1" && props.secondImage.bannerImage1 ? (
              <>
                <div
                  className="uploadList-item"
                  onClick={() => {
                    props.setImage((prevformData) => {
                      return {
                        ...prevformData,
                        bannerImage1: props.editImage.bannerImage1,
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
                    props.setSecondImage((prevformData) => {
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
            ) : props.imageNum === "2" && props.secondImage.bannerImage2 ? (
              <>
                <div
                  className="uploadList-item"
                  onClick={() => {
                    props.setImage((prevformData) => {
                      return {
                        ...prevformData,
                        bannerImage2: props.editImage.bannerImage2,
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
                    props.setSecondImage((prevformData) => {
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
            ) : props.imageNum === "3" && props.secondImage.bannerImage3 ? (
              <>
                <div
                  className="uploadList-item"
                  onClick={() => {
                    props.setImage((prevformData) => {
                      return {
                        ...prevformData,
                        bannerImage3: props.editImage.bannerImage3,
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
                    props.setSecondImage((prevformData) => {
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
            id={`uploadBanner${props.imageNum}-photo`}
            className="d-none"
            name={`bannerImage${props.imageNum}`}
            value=""
            onChange={props.imagehandleChange}
            capture
            accept="image/*"
          />
          <input
            type="file"
            id={`uploadBanner${props.imageNum}-image`}
            className="d-none"
            name={`bannerImage${props.imageNum}`}
            value=""
            onChange={props.imagehandleChange}
            accept="image/*"
          />
        </div>
      </div>
    </>
  );
}
