import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Image(props) {
  const test = (className, input) => {
    const test = document.querySelector(".tab-content1");
    const test2 = document.querySelector(".tab-content2");
    const test3 = document.querySelector(".tab-content3");

    if (className === ".tab-content1") {
      test2.classList.remove("tab-contentChecked");
      test3.classList.remove("tab-contentChecked");
      if (test.classList.contains("tab-contentChecked")) {
        test.classList.remove("tab-contentChecked");
      } else {
        test.classList.add("tab-contentChecked");
      }
    }
    if (className === ".tab-content2") {
      test3.classList.remove("tab-contentChecked");
      test.classList.remove("tab-contentChecked");
      if (test2.classList.contains("tab-contentChecked")) {
        test2.classList.remove("tab-contentChecked");
      } else {
        test2.classList.add("tab-contentChecked");
      }
    }
    if (className === ".tab-content3") {
      test2.classList.remove("tab-contentChecked");
      test.classList.remove("tab-contentChecked");
      if (test3.classList.contains("tab-contentChecked")) {
        test3.classList.remove("tab-contentChecked");
      } else {
        test3.classList.add("tab-contentChecked");
      }
    }
  };
  return (
    <>
      <div className="tab">
        <input
          // type="radio"
          id={`rd${props.imageNum}`}
          name="rd"
          onClick={test.bind(this, `.tab-content${props.imageNum}`)}
          // onClick={test}
        />
        <label className="tab-label" htmlFor={`rd${props.imageNum}`}>
          Upload images
          <FontAwesomeIcon icon={faPlus} />
        </label>
        <div className={`tab-content p-relative tab-content${props.imageNum}`}>
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
                    src={
                      props.type === "about"
                        ? props.secondImage.bannerImage1
                        : URL.createObjectURL(props.secondImage.bannerImage1)
                    }
                    alt=""
                    className="img-fluid"
                  />
                ) : (
                  <>item with images see 60% more visits from customers</>
                )
              ) : props.imageNum === "2" ? (
                props.secondImage.bannerImage2 ? (
                  <img
                    src={
                      props.type === "about"
                        ? props.secondImage.bannerImage2
                        : URL.createObjectURL(props.secondImage.bannerImage2)
                    }
                    alt=""
                    className="img-fluid"
                  />
                ) : (
                  <>item with images see 60% more visits from customers</>
                )
              ) : props.secondImage.bannerImage3 ? (
                <img
                  src={
                    props.type === "about"
                      ? props.secondImage.bannerImage3
                      : URL.createObjectURL(props.secondImage.bannerImage3)
                  }
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
            {props.type === "about" ? (
              <>
                {props.imageNum === "1" && props.secondImage.bannerImage1 ? (
                  <>
                    <div
                      className="uploadList-item"
                      onClick={() => {
                        props.setImage((prevformData) => {
                          return {
                            ...prevformData,
                            bannerImage1: props.secondImage.bannerImage1,
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
                        props.setFormData((prevformData) => {
                          if (
                            prevformData.bannerImages &&
                            prevformData.bannerImages.length === 1
                          ) {
                            prevformData.bannerImages = null;
                          } else {
                            prevformData.bannerImages.splice(0, 1);
                          }
                          return prevformData;
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
                            bannerImage2: props.secondImage.bannerImage2,
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
                        props.setFormData((prevformData) => {
                          if (
                            prevformData.bannerImages &&
                            prevformData.bannerImages.length === 1
                          ) {
                            prevformData.bannerImages = null;
                          } else {
                            prevformData.bannerImages.splice(1, 1);
                          }
                          return prevformData;
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
                            bannerImage3: props.secondImage.bannerImage3,
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
                        props.setFormData((prevformData) => {
                          if (
                            prevformData.bannerImages &&
                            prevformData.bannerImages.length === 1
                          ) {
                            prevformData.bannerImages = null;
                          } else {
                            prevformData.bannerImages.splice(2, 1);
                          }
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
              </>
            ) : (
              <>
                {" "}
                {props.imageNum === "1" && props.secondImage.bannerImage1 ? (
                  <>
                    <div
                      className="uploadList-item"
                      onClick={() => {
                        props.setImage((prevformData) => {
                          return {
                            ...prevformData,
                            bannerImage1: props.secondImage.bannerImage1,
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
                            bannerImage2: props.secondImage.bannerImage2,
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
                            bannerImage3: props.secondImage.bannerImage3,
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
              </>
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
