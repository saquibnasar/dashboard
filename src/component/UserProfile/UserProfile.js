import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialLink from "../SocialLink";
import Footer from "../Footer";
import ReactPlayer from "react-player/youtube";
import ImgSlider from "../ImgSlider";
import Video from "./Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function UserProfile(props) {
  // const { userProfileId } = useParams();
  const [data, setData] = useState("");
  const [isCopy, setIsCopy] = useState("Copy");
  const [isShareClicked, setIsShareClicked] = useState(false);
  // useEffect(() => {
  //   fetch(
  //     `https://7drkndiu7g.execute-api.ap-south-1.amazonaws.com/v1/previewprofile/${userProfileId}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [1]);
  window.addEventListener("click", function (e) {
    if (
      document.getElementById("share_link") &&
      document.getElementById("share_link").contains(e.target)
    ) {
      if (!document.getElementById("share_link-container").contains(e.target)) {
        setIsShareClicked(false);
      }
    }
  });

  return (
    <>
      <section className="userProile hero main-container p-relative">
        <div className="logo-only">
          {props.images &&
          (props.images.bannerImage1 ||
            props.images.bannerImage2 ||
            props.images.bannerImage3) ? (
            <ImgSlider sliderImage={props.images} />
          ) : (
            ""
          )}

          {props.arrayImages ? (
            <ImgSlider arrayImages={props.arrayImages} />
          ) : (
            ""
          )}
        </div>
        <div className="container">
          <div
            className={
              props.images &&
              (props.images.bannerImage1 ||
                props.images.bannerImage2 ||
                props.images.bannerImage3)
                ? "header_content text-center"
                : props.formData && props.formData.bannerImages
                ? "header_content text-center"
                : "header_content text-center mt-5"
            }
          >
            {props.logo || (props.formData && props.formData.profileImage) ? (
              <>
                {props.logo ? (
                  <img
                    className="img-fluid"
                    src={
                      props.logo.name
                        ? URL.createObjectURL(props.logo)
                        : props.logo
                    }
                    alt=""
                  />
                ) : (
                  <img
                    className="img-fluid"
                    src={
                      props.formData.profileImage.name
                        ? URL.createObjectURL(props.formData.profileImage)
                        : props.formData.profileImage
                    }
                    alt=""
                  />
                )}
              </>
            ) : (
              <span className="logo">
                <FontAwesomeIcon icon={faUser} />
              </span>
            )}
            {props.formData && props.formData.id ? (
              <>
                {" "}
                <h1>
                  {props.formData && props.formData.name
                    ? props.formData.name
                    : "user name"}
                </h1>
                <h2>
                  {props.formData && props.formData.designation
                    ? props.formData.designation
                    : "Designation"}{" "}
                  at company
                </h2>
                <h3>
                  Employee ID -{" "}
                  {props.formData && props.formData.employeeId
                    ? props.formData.employeeId
                    : "xxxxxxxxx"}
                </h3>
                <span></span>
                <h4 className="">About ComXXXX</h4>
                <h5>
                  {props.formData && props.formData.employeeBio
                    ? props.formData.employeeBio
                    : "user bio"}
                </h5>
              </>
            ) : (
              <>
                <h1>
                  {props.formData &&
                  props.formData.userInfo &&
                  props.formData.userInfo.username
                    ? props.formData.userInfo.username
                    : "user name"}
                </h1>
                <h2>
                  {props.formData &&
                  props.formData.userInfo &&
                  props.formData.userInfo.designation
                    ? props.formData.userInfo.designation
                    : "Designation"}{" "}
                  at company
                </h2>
                <h3>
                  Employee ID -{" "}
                  {props.formData &&
                  props.formData.userInfo &&
                  props.formData.userInfo.employeeId
                    ? props.formData.userInfo.employeeId
                    : "xxxxxxxxx"}
                </h3>
                <span></span>
                <h4 className="">About ComXXXX</h4>
                <h5>
                  {props.formData &&
                  props.formData.userInfo &&
                  props.formData.userInfo.employeeBio
                    ? props.formData.userInfo.employeeBio
                    : "user bio"}
                </h5>
              </>
            )}

            <button className="btn">Save My Contact </button>
          </div>

          {props.formData &&
          props.formData.userLink &&
          props.formData.userLink.length ? (
            <SocialLink links={props.formData.userLink} />
          ) : (
            ""
          )}

          {props.formData &&
          props.formData.userPlugin &&
          props.formData.userPlugin.length ? (
            <Video data={props.formData.userPlugin} />
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}
