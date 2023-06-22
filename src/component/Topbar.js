import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";

export default function Topbar(props) {
  const [isFlaxLink, setIsFlaxLink] = useState("isflaxlink");
  const navigate = useNavigate();

  // window.addEventListener("click", function (e) {
  //   if (
  //     document.querySelector(".navbar-btn") &&
  //     document.querySelector(".navbar-btn").contains(e.target)
  //   ) {
  //   } else if (
  //     document.querySelector(".flax_link") &&
  //     !document.querySelector(".flax_link").contains(e.target)
  //   ) {
  //     if (
  //       document.querySelector(".flax_link") &&
  //       !document.querySelector(".flax_link").classList.contains("d-none")
  //     ) {
  //       setIsFlaxLink(false);
  //     }
  //   }
  // });
  const FlaxLink = () => {
    setIsFlaxLink(
      isFlaxLink === "isflaxlink"
        ? "flaxlink"
        : isFlaxLink === "flaxlink"
        ? "isflaxlink"
        : "flaxlink"
    );
  };

  return (
    <>
      {props.isNavbar ? (
        <nav className="navbar">
          {props.type ? (
            <button
              onClick={() => navigate(-1)}
              className="navbar-brand"
              type="button"
            >
              <span className="setting-toggler-icon">
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              {props.text}
            </button>
          ) : (
            <Link to="/createCard" className="navbar-brand" type="button">
              My Team Cards
              <span className="navbar-toggler-icon">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </Link>
          )}

          <div className="navbar-collapse">
            {props.type ? (
              <Link to="/createCard" className="SettingProfile">
                <div className="SettingProfile_user">
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  NewProfile
                </div>
                <FontAwesomeIcon icon={faAngleDown} />
              </Link>
            ) : (
              // <button className="form-check">
              //   <input
              //     type="checkbox"
              //     id="darkmode-toggle"
              //     onChange={props.handleChange}
              //   />
              //   <label htmlFor="darkmode-toggle">
              //     <svg
              //       className="sun"
              //       width="28"
              //       height="28"
              //       viewBox="0 0 28 28"
              //       fill="none"
              //       xmlns="http://www.w3.org/2000/svg"
              //     >
              //       <path
              //         d="M7.8737 12.5417C10.451 12.5417 12.5404 10.4523 12.5404 7.87501C12.5404 5.29768 10.451 3.20834 7.8737 3.20834C5.29637 3.20834 3.20703 5.29768 3.20703 7.87501C3.20703 10.4523 5.29637 12.5417 7.8737 12.5417Z"
              //         stroke="#111111"
              //         strokeWidth="0.583333"
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //       />
              //       <path
              //         d="M20.1237 24.7917C22.701 24.7917 24.7904 22.7023 24.7904 20.125C24.7904 17.5477 22.701 15.4583 20.1237 15.4583C17.5464 15.4583 15.457 17.5477 15.457 20.125C15.457 22.7023 17.5464 24.7917 20.1237 24.7917Z"
              //         stroke="#111111"
              //         strokeWidth="0.583333"
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //       />
              //       <path
              //         d="M20.1237 12.5417C22.701 12.5417 24.7904 10.4523 24.7904 7.87501C24.7904 5.29768 22.701 3.20834 20.1237 3.20834C17.5464 3.20834 15.457 5.29768 15.457 7.87501C15.457 10.4523 17.5464 12.5417 20.1237 12.5417Z"
              //         stroke="#111111"
              //         strokeWidth="0.583333"
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //       />
              //       <path
              //         d="M7.8737 24.7917C10.451 24.7917 12.5404 22.7023 12.5404 20.125C12.5404 17.5477 10.451 15.4583 7.8737 15.4583C5.29637 15.4583 3.20703 17.5477 3.20703 20.125C3.20703 22.7023 5.29637 24.7917 7.8737 24.7917Z"
              //         stroke="#111111"
              //         strokeWidth="0.583333"
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //       />
              //     </svg>
              //     <svg
              //       className="moon"
              //       width="28"
              //       height="28"
              //       viewBox="0 0 28 28"
              //       fill="none"
              //       xmlns="http://www.w3.org/2000/svg"
              //     >
              //       <path
              //         d="M23.334 4.66669H4.66732C3.37865 4.66669 2.33398 5.71136 2.33398 7.00002V9.33335C2.33398 10.622 3.37865 11.6667 4.66732 11.6667H23.334C24.6226 11.6667 25.6673 10.622 25.6673 9.33335V7.00002C25.6673 5.71136 24.6226 4.66669 23.334 4.66669Z"
              //         fill="white"
              //         stroke="#111111"
              //         strokeWidth="1.5"
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //       />
              //       <path
              //         d="M23.334 16.3334H4.66732C3.37865 16.3334 2.33398 17.378 2.33398 18.6667V21C2.33398 22.2887 3.37865 23.3334 4.66732 23.3334H23.334C24.6226 23.3334 25.6673 22.2887 25.6673 21V18.6667C25.6673 17.378 24.6226 16.3334 23.334 16.3334Z"
              //         fill="white"
              //         stroke="#111111"
              //         strokeWidth="1.5"
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //       />
              //     </svg>
              //   </label>
              // </button>
              ""
            )}

            {props.type ? (
              <Link to="/createCard" className="SettingProfile">
                <div className="SettingProfile_user">Share Your Profile</div>
                <FontAwesomeIcon icon={faShare} />
              </Link>
            ) : (
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => props.setSearch(e.target.value)}
                />
                <FontAwesomeIcon icon={faSearch} />
              </form>
            )}
            <div className="navbar-links">
              <button className="navbar-btn" onClick={FlaxLink}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.20156 3.39998C6.20156 4.14258 5.90656 4.85477 5.38146 5.37987C4.85636 5.90498 4.14417 6.19997 3.40156 6.19997C2.65896 6.19997 1.94677 5.90498 1.42166 5.37987C0.896562 4.85477 0.601562 4.14258 0.601562 3.39998C0.601562 2.65737 0.896562 1.94518 1.42166 1.42008C1.94677 0.894975 2.65896 0.599976 3.40156 0.599976C4.14417 0.599976 4.85636 0.894975 5.38146 1.42008C5.90656 1.94518 6.20156 2.65737 6.20156 3.39998ZM6.20156 13C6.20156 13.7426 5.90656 14.4548 5.38146 14.9799C4.85636 15.505 4.14417 15.8 3.40156 15.8C2.65896 15.8 1.94677 15.505 1.42166 14.9799C0.896562 14.4548 0.601562 13.7426 0.601562 13C0.601562 12.2574 0.896562 11.5452 1.42166 11.0201C1.94677 10.495 2.65896 10.2 3.40156 10.2C4.14417 10.2 4.85636 10.495 5.38146 11.0201C5.90656 11.5452 6.20156 12.2574 6.20156 13ZM3.40156 25.4C4.14417 25.4 4.85636 25.105 5.38146 24.5799C5.90656 24.0548 6.20156 23.3426 6.20156 22.6C6.20156 21.8574 5.90656 21.1452 5.38146 20.6201C4.85636 20.095 4.14417 19.8 3.40156 19.8C2.65896 19.8 1.94677 20.095 1.42166 20.6201C0.896562 21.1452 0.601563 21.8574 0.601562 22.6C0.601563 23.3426 0.896562 24.0548 1.42166 24.5799C1.94677 25.105 2.65896 25.4 3.40156 25.4ZM15.8016 3.39998C15.8016 3.76768 15.7291 4.13178 15.5884 4.47149C15.4477 4.8112 15.2415 5.11987 14.9815 5.37987C14.7215 5.63988 14.4128 5.84612 14.0731 5.98684C13.7334 6.12755 13.3693 6.19997 13.0016 6.19997C12.6339 6.19997 12.2698 6.12755 11.93 5.98684C11.5903 5.84612 11.2817 5.63988 11.0217 5.37987C10.7617 5.11987 10.5554 4.8112 10.4147 4.47149C10.274 4.13178 10.2016 3.76768 10.2016 3.39998C10.2016 2.65737 10.4966 1.94518 11.0217 1.42008C11.5468 0.894975 12.259 0.599976 13.0016 0.599976C13.7442 0.599976 14.4564 0.894975 14.9815 1.42008C15.5066 1.94518 15.8016 2.65737 15.8016 3.39998ZM13.0016 15.8C13.3693 15.8 13.7334 15.7275 14.0731 15.5868C14.4128 15.4461 14.7215 15.2399 14.9815 14.9799C15.2415 14.7199 15.4477 14.4112 15.5884 14.0715C15.7291 13.7318 15.8016 13.3677 15.8016 13C15.8016 12.6323 15.7291 12.2682 15.5884 11.9285C15.4477 11.5887 15.2415 11.2801 14.9815 11.0201C14.7215 10.7601 14.4128 10.5538 14.0731 10.4131C13.7334 10.2724 13.3693 10.2 13.0016 10.2C12.259 10.2 11.5468 10.495 11.0217 11.0201C10.4966 11.5452 10.2016 12.2574 10.2016 13C10.2016 13.7426 10.4966 14.4548 11.0217 14.9799C11.5468 15.505 12.259 15.8 13.0016 15.8ZM15.8016 22.6C15.8016 22.9677 15.7291 23.3318 15.5884 23.6715C15.4477 24.0112 15.2415 24.3199 14.9815 24.5799C14.7215 24.8399 14.4128 25.0461 14.0731 25.1868C13.7334 25.3275 13.3693 25.4 13.0016 25.4C12.6339 25.4 12.2698 25.3275 11.93 25.1868C11.5903 25.0461 11.2817 24.8399 11.0217 24.5799C10.7617 24.3199 10.5554 24.0112 10.4147 23.6715C10.274 23.3318 10.2016 22.9677 10.2016 22.6C10.2016 21.8574 10.4966 21.1452 11.0217 20.6201C11.5468 20.095 12.259 19.8 13.0016 19.8C13.7442 19.8 14.4564 20.095 14.9815 20.6201C15.5066 21.1452 15.8016 21.8574 15.8016 22.6ZM22.6016 6.19997C23.3442 6.19997 24.0564 5.90498 24.5815 5.37987C25.1066 4.85477 25.4016 4.14258 25.4016 3.39998C25.4016 2.65737 25.1066 1.94518 24.5815 1.42008C24.0564 0.894975 23.3442 0.599976 22.6016 0.599976C21.859 0.599976 21.1468 0.894975 20.6217 1.42008C20.0966 1.94518 19.8016 2.65737 19.8016 3.39998C19.8016 4.14258 20.0966 4.85477 20.6217 5.37987C21.1468 5.90498 21.859 6.19997 22.6016 6.19997ZM25.4016 13C25.4016 13.7426 25.1066 14.4548 24.5815 14.9799C24.0564 15.505 23.3442 15.8 22.6016 15.8C21.859 15.8 21.1468 15.505 20.6217 14.9799C20.0966 14.4548 19.8016 13.7426 19.8016 13C19.8016 12.2574 20.0966 11.5452 20.6217 11.0201C21.1468 10.495 21.859 10.2 22.6016 10.2C23.3442 10.2 24.0564 10.495 24.5815 11.0201C25.1066 11.5452 25.4016 12.2574 25.4016 13ZM22.6016 25.4C23.3442 25.4 24.0564 25.105 24.5815 24.5799C25.1066 24.0548 25.4016 23.3426 25.4016 22.6C25.4016 21.8574 25.1066 21.1452 24.5815 20.6201C24.0564 20.095 23.3442 19.8 22.6016 19.8C21.859 19.8 21.1468 20.095 20.6217 20.6201C20.0966 21.1452 19.8016 21.8574 19.8016 22.6C19.8016 23.3426 20.0966 24.0548 20.6217 24.5799C21.1468 25.105 21.859 25.4 22.6016 25.4Z"
                    fill="white"
                  />
                </svg>
              </button>

              <div className={`flax_link ${isFlaxLink}`}>
                <a
                  href="https://apps.apple.com/in/app/caard-digital-business-card/id1626948504"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faApple} />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.caard.caard_frontend_final"
                  target="blank"
                >
                  <img
                    className="img-fluid"
                    src="/play-store-logo-33888.png"
                    alt=""
                  />
                </a>
                <a href="https://caard.mini.store/" target="blank">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
                <a href="https://www.instagram.com/getflaxapp/" target="blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com/Flaxai" target="blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.linkedin.com/company/flax-ai/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="mailto:support@flax.ai" target="blank">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://wa.me/+918171698717" target="blank">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="tel:+918171698717" target="blank">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </div>

              {/* {isFlaxLink ? (
                <div className="flax_link">
                  <a
                    href="https://apps.apple.com/in/app/caard-digital-business-card/id1626948504"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faApple} />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.caard.caard_frontend_final"
                    target="blank"
                  >
                    <img
                      className="img-fluid"
                      src="/play-store-logo-33888.png"
                      alt=""
                    />
                  </a>
                  <a href="https://caard.mini.store/" target="blank">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                  <a
                    href="https://www.instagram.com/getflaxapp/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://twitter.com/Flaxai" target="blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/flax-ai/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="mailto:support@flax.ai" target="blank">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <a href="https://wa.me/+918171698717" target="blank">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a href="tel:+918171698717" target="blank">
                    <FontAwesomeIcon icon={faPhone} />
                  </a>
                </div>
              ) : (
                ""
              )} */}

              {/* {isFlaxLink ? (
                <div className="flax_link">
                  <a
                    href="https://apps.apple.com/in/app/caard-digital-business-card/id1626948504"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faApple} />
                    Ios App
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.caard.caard_frontend_final"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faGooglePlay} />
                    Play Store
                  </a>
                  <a href="https://caard.mini.store/" target="blank">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Card
                  </a>
                  <a
                    href="https://www.instagram.com/getflaxapp/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                    Instagram
                  </a>
                  <a href="https://twitter.com/Flaxai" target="blank">
                    <FontAwesomeIcon icon={faTwitter} />
                    Twitter
                  </a>
                  <a
                    href="https://www.linkedin.com/company/flax-ai/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    Linkedin
                  </a>
                  <a href="mailto:support@flax.ai" target="blank">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Support
                  </a>
                  <a href="https://wa.me/+918171698717" target="blank">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    Whatsapp
                  </a>
                  <a href="tel:+918171698717" target="blank">
                    <FontAwesomeIcon icon={faPhone} />
                    Call Now
                  </a>
                </div>
              ) : (
                ""
              )} */}
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}
