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
import { Link, useNavigate } from "react-router-dom";

export default function Topbar(props) {
  const [isFlaxLink, setIsFlaxLink] = useState(false);
  const navigate = useNavigate();

  window.addEventListener("click", function (e) {
    if (
      document.querySelector(".navbar-btn") &&
      document.querySelector(".navbar-btn").contains(e.target)
    ) {
      setIsFlaxLink(!isFlaxLink);
    } else if (
      document.querySelector(".flax_link") &&
      !document.querySelector(".flax_link").contains(e.target)
    ) {
      if (
        document.querySelector(".flax_link") &&
        !document.querySelector(".flax_link").classList.contains("d-none")
      ) {
        setIsFlaxLink(false);
      }
    }
  });

  return (
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
          Settings
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
          <button className="SettingProfile">
            <div className="SettingProfile_user">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              NewProfile
            </div>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        ) : (
          <button className="form-check">
            <input
              type="checkbox"
              id="darkmode-toggle"
              onChange={props.handleChange}
            />
            <label htmlFor="darkmode-toggle">
              <svg
                className="sun"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.8737 12.5417C10.451 12.5417 12.5404 10.4523 12.5404 7.87501C12.5404 5.29768 10.451 3.20834 7.8737 3.20834C5.29637 3.20834 3.20703 5.29768 3.20703 7.87501C3.20703 10.4523 5.29637 12.5417 7.8737 12.5417Z"
                  stroke="#111111"
                  strokeWidth="0.583333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.1237 24.7917C22.701 24.7917 24.7904 22.7023 24.7904 20.125C24.7904 17.5477 22.701 15.4583 20.1237 15.4583C17.5464 15.4583 15.457 17.5477 15.457 20.125C15.457 22.7023 17.5464 24.7917 20.1237 24.7917Z"
                  stroke="#111111"
                  strokeWidth="0.583333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.1237 12.5417C22.701 12.5417 24.7904 10.4523 24.7904 7.87501C24.7904 5.29768 22.701 3.20834 20.1237 3.20834C17.5464 3.20834 15.457 5.29768 15.457 7.87501C15.457 10.4523 17.5464 12.5417 20.1237 12.5417Z"
                  stroke="#111111"
                  strokeWidth="0.583333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.8737 24.7917C10.451 24.7917 12.5404 22.7023 12.5404 20.125C12.5404 17.5477 10.451 15.4583 7.8737 15.4583C5.29637 15.4583 3.20703 17.5477 3.20703 20.125C3.20703 22.7023 5.29637 24.7917 7.8737 24.7917Z"
                  stroke="#111111"
                  strokeWidth="0.583333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="moon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.334 4.66669H4.66732C3.37865 4.66669 2.33398 5.71136 2.33398 7.00002V9.33335C2.33398 10.622 3.37865 11.6667 4.66732 11.6667H23.334C24.6226 11.6667 25.6673 10.622 25.6673 9.33335V7.00002C25.6673 5.71136 24.6226 4.66669 23.334 4.66669Z"
                  fill="white"
                  stroke="#111111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.334 16.3334H4.66732C3.37865 16.3334 2.33398 17.378 2.33398 18.6667V21C2.33398 22.2887 3.37865 23.3334 4.66732 23.3334H23.334C24.6226 23.3334 25.6673 22.2887 25.6673 21V18.6667C25.6673 17.378 24.6226 16.3334 23.334 16.3334Z"
                  fill="white"
                  stroke="#111111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
          </button>
        )}

        {props.type ? (
          <button className="SettingProfile">
            <div className="SettingProfile_user">Share Your Profile</div>
            <FontAwesomeIcon icon={faShare} />
          </button>
        ) : (
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => props.setSearch(e.target.value)}
            />

            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0349 17.3865L24.0317 22.3822L22.3809 24.033L17.3852 19.0362C15.5264 20.5263 13.2144 21.3367 10.832 21.3333C5.03603 21.3333 0.332031 16.6293 0.332031 10.8333C0.332031 5.03734 5.03603 0.333344 10.832 0.333344C16.628 0.333344 21.332 5.03734 21.332 10.8333C21.3354 13.2157 20.525 15.5277 19.0349 17.3865ZM16.6945 16.5208C18.1752 14.9982 19.002 12.9572 18.9987 10.8333C18.9987 6.32184 15.3435 2.66668 10.832 2.66668C6.32053 2.66668 2.66536 6.32184 2.66536 10.8333C2.66536 15.3448 6.32053 19 10.832 19C12.9559 19.0034 14.9969 18.1765 16.5195 16.6958L16.6945 16.5208Z"
                fill="#636060"
              />
            </svg>
          </form>
        )}
        <div className="p-relative">
          <button className="navbar-btn">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              c
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.20156 6.40001C9.20156 7.14261 8.90656 7.8548 8.38146 8.3799C7.85636 8.90501 7.14417 9.20001 6.40156 9.20001C5.65896 9.20001 4.94677 8.90501 4.42166 8.3799C3.89656 7.8548 3.60156 7.14261 3.60156 6.40001C3.60156 5.6574 3.89656 4.94521 4.42166 4.42011C4.94677 3.89501 5.65896 3.60001 6.40156 3.60001C7.14417 3.60001 7.85636 3.89501 8.38146 4.42011C8.90656 4.94521 9.20156 5.6574 9.20156 6.40001ZM9.20156 16C9.20156 16.7426 8.90656 17.4548 8.38146 17.9799C7.85636 18.505 7.14417 18.8 6.40156 18.8C5.65896 18.8 4.94677 18.505 4.42166 17.9799C3.89656 17.4548 3.60156 16.7426 3.60156 16C3.60156 15.2574 3.89656 14.5452 4.42166 14.0201C4.94677 13.495 5.65896 13.2 6.40156 13.2C7.14417 13.2 7.85636 13.495 8.38146 14.0201C8.90656 14.5452 9.20156 15.2574 9.20156 16ZM6.40156 28.4C7.14417 28.4 7.85636 28.105 8.38146 27.5799C8.90656 27.0548 9.20156 26.3426 9.20156 25.6C9.20156 24.8574 8.90656 24.1452 8.38146 23.6201C7.85636 23.095 7.14417 22.8 6.40156 22.8C5.65896 22.8 4.94677 23.095 4.42166 23.6201C3.89656 24.1452 3.60156 24.8574 3.60156 25.6C3.60156 26.3426 3.89656 27.0548 4.42166 27.5799C4.94677 28.105 5.65896 28.4 6.40156 28.4ZM18.8016 6.40001C18.8016 6.76771 18.7291 7.13181 18.5884 7.47152C18.4477 7.81123 18.2415 8.1199 17.9815 8.3799C17.7215 8.63991 17.4128 8.84616 17.0731 8.98687C16.7334 9.12758 16.3693 9.20001 16.0016 9.20001C15.6339 9.20001 15.2698 9.12758 14.93 8.98687C14.5903 8.84616 14.2817 8.63991 14.0217 8.3799C13.7617 8.1199 13.5554 7.81123 13.4147 7.47152C13.274 7.13181 13.2016 6.76771 13.2016 6.40001C13.2016 5.6574 13.4966 4.94521 14.0217 4.42011C14.5468 3.89501 15.259 3.60001 16.0016 3.60001C16.7442 3.60001 17.4564 3.89501 17.9815 4.42011C18.5066 4.94521 18.8016 5.6574 18.8016 6.40001ZM16.0016 18.8C16.3693 18.8 16.7334 18.7276 17.0731 18.5869C17.4128 18.4462 17.7215 18.2399 17.9815 17.9799C18.2415 17.7199 18.4477 17.4112 18.5884 17.0715C18.7291 16.7318 18.8016 16.3677 18.8016 16C18.8016 15.6323 18.7291 15.2682 18.5884 14.9285C18.4477 14.5888 18.2415 14.2801 17.9815 14.0201C17.7215 13.7601 17.4128 13.5539 17.0731 13.4131C16.7334 13.2724 16.3693 13.2 16.0016 13.2C15.259 13.2 14.5468 13.495 14.0217 14.0201C13.4966 14.5452 13.2016 15.2574 13.2016 16C13.2016 16.7426 13.4966 17.4548 14.0217 17.9799C14.5468 18.505 15.259 18.8 16.0016 18.8ZM18.8016 25.6C18.8016 25.9677 18.7291 26.3318 18.5884 26.6715C18.4477 27.0112 18.2415 27.3199 17.9815 27.5799C17.7215 27.8399 17.4128 28.0462 17.0731 28.1869C16.7334 28.3276 16.3693 28.4 16.0016 28.4C15.6339 28.4 15.2698 28.3276 14.93 28.1869C14.5903 28.0462 14.2817 27.8399 14.0217 27.5799C13.7617 27.3199 13.5554 27.0112 13.4147 26.6715C13.274 26.3318 13.2016 25.9677 13.2016 25.6C13.2016 24.8574 13.4966 24.1452 14.0217 23.6201C14.5468 23.095 15.259 22.8 16.0016 22.8C16.7442 22.8 17.4564 23.095 17.9815 23.6201C18.5066 24.1452 18.8016 24.8574 18.8016 25.6ZM25.6016 9.20001C26.3442 9.20001 27.0564 8.90501 27.5815 8.3799C28.1066 7.8548 28.4016 7.14261 28.4016 6.40001C28.4016 5.6574 28.1066 4.94521 27.5815 4.42011C27.0564 3.89501 26.3442 3.60001 25.6016 3.60001C24.859 3.60001 24.1468 3.89501 23.6217 4.42011C23.0966 4.94521 22.8016 5.6574 22.8016 6.40001C22.8016 7.14261 23.0966 7.8548 23.6217 8.3799C24.1468 8.90501 24.859 9.20001 25.6016 9.20001ZM28.4016 16C28.4016 16.7426 28.1066 17.4548 27.5815 17.9799C27.0564 18.505 26.3442 18.8 25.6016 18.8C24.859 18.8 24.1468 18.505 23.6217 17.9799C23.0966 17.4548 22.8016 16.7426 22.8016 16C22.8016 15.2574 23.0966 14.5452 23.6217 14.0201C24.1468 13.495 24.859 13.2 25.6016 13.2C26.3442 13.2 27.0564 13.495 27.5815 14.0201C28.1066 14.5452 28.4016 15.2574 28.4016 16ZM25.6016 28.4C26.3442 28.4 27.0564 28.105 27.5815 27.5799C28.1066 27.0548 28.4016 26.3426 28.4016 25.6C28.4016 24.8574 28.1066 24.1452 27.5815 23.6201C27.0564 23.095 26.3442 22.8 25.6016 22.8C24.859 22.8 24.1468 23.095 23.6217 23.6201C23.0966 24.1452 22.8016 24.8574 22.8016 25.6C22.8016 26.3426 23.0966 27.0548 23.6217 27.5799C24.1468 28.105 24.859 28.4 25.6016 28.4Z"
                fill="#252525"
              />
            </svg>
          </button>
          {isFlaxLink ? (
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
              <a href="https://www.instagram.com/getflaxapp/" target="blank">
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
          )}
        </div>
      </div>
    </nav>
  );
}
