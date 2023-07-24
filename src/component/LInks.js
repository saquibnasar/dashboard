import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
export default function LInks(props) {
  const [checked, setChecked] = useState({
    call: true,
    email: true,
    website: true,
    whatsapp: true,
    linkedIn: true,
    instagram: true,
    facebook: true,
    twitter: true,
    youtube: true,
    address: true,
  });
  const handleChange = (e) => {
    setChecked((prevformData) => {
      return {
        ...prevformData,
        [e.target.name]: e.target.checked,
      };
    });
  };
  return (
    <>
      <div className="linkPage">
        <button className="btn-link" onClick={props.addLin}>
          <FontAwesomeIcon icon={faPlus} />
          Add info
        </button>
        <div className="addcard_links">
          <div className="addcard_link">
            <div className="addcard_link_dot">
              <svg
                width="8"
                height="16"
                fill="#82828290"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
              </svg>
            </div>
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p>Call</p>
            <div className="addcard_link-edit">
              {!checked.call ? (
                <div className="addcard_link-delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              ) : (
                ""
              )}

              <button className="form-check">
                <input
                  type="checkbox"
                  id="darkmode-toggle"
                  onChange={handleChange}
                  checked={checked.call}
                  name="phone"
                />
                <label htmlFor="darkmode-toggle"></label>
              </button>
            </div>
            {/* <div className="addcard_link-list">
              <div
                className="MuiPaper-root jss191 MuiPaper-elevation1 MuiPaper-rounded"
                tabindex="1"
                data-testid="content-container"
              >
                <div data-eventname="edit" className="jss278" data-testid="content">
                  <FontAwesomeIcon icon={faPen} />
                  <div>
                    <span className="jss279">Edit lead</span>
                  </div>
                </div>
                <div
                  data-eventname="exportToCrm"
                  className="jss278 stop"
                  data-testid="content"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_639_2632)">
                      <path
                        d="M9.99935 9.16667C11.8403 9.16667 13.3327 7.67428 13.3327 5.83333C13.3327 3.99238 11.8403 2.5 9.99935 2.5C8.1584 2.5 6.66602 3.99238 6.66602 5.83333C6.66602 7.67428 8.1584 9.16667 9.99935 9.16667Z"
                        stroke="#828282"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5 17.5V15.8333C5 14.9493 5.35119 14.1014 5.97631 13.4763C6.60143 12.8512 7.44928 12.5 8.33333 12.5H11.6667C12.5507 12.5 13.3986 12.8512 14.0237 13.4763C14.6488 14.1014 15 14.9493 15 15.8333V17.5"
                        stroke="#828282"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M14 16.5H19M19 16.5L16.5 14M19 16.5L16.5 19"
                        stroke="#F7F7F7"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M14 16.5H19M19 16.5L16.5 14M19 16.5L16.5 19"
                        stroke="#828282"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_639_2632">
                        <rect width="20" height="20" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <span className="jss279 stop">Export to CRM</span>
                  </div>
                </div>
                <div
                  data-eventname="saveLead"
                  className="jss278 stop"
                  data-testid="content"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.25 10.2493L4.25 14.9159C4.25 15.2696 4.40804 15.6087 4.68934 15.8587C4.97064 16.1088 5.35218 16.2493 5.75 16.2493L14.75 16.2493C15.1478 16.2493 15.5294 16.1088 15.8107 15.8587C16.092 15.6087 16.25 15.2696 16.25 14.9159L16.25 10.2493"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.25 3.75073L10.25 12.2494M10.25 12.2494L12.75 9.74943M10.25 12.2494L7.75 9.74943"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <div>
                    <span className="jss279 stop">Save as contact</span>
                  </div>
                </div>
                <div
                  data-eventname="sendEmail"
                  className="jss278 stop"
                  data-testid="content"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8333 4.16663H4.16667C3.24619 4.16663 2.5 4.91282 2.5 5.83329V14.1666C2.5 15.0871 3.24619 15.8333 4.16667 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1666V5.83329C17.5 4.91282 16.7538 4.16663 15.8333 4.16663Z"
                      stroke="#BDBDBD"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2.5 5.83337L10 10.8334L17.5 5.83337"
                      stroke="#BDBDBD"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <div>
                    <span className="jss279 stop">Send email</span>
                  </div>
                </div>
                <div
                  data-eventname="addTag"
                  className="jss278 stop"
                  data-testid="content"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M7.25 8C7.80228 8 8.25 7.55228 8.25 7C8.25 6.44772 7.80228 6 7.25 6C6.69772 6 6.25 6.44772 6.25 7C6.25 7.55228 6.69772 8 7.25 8Z"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3.25 5.47056V8.64852C3.25 9.09075 3.42541 9.51486 3.73835 9.8278L10.422 16.5115C10.5769 16.6664 10.7607 16.7892 10.9631 16.873C11.1654 16.9569 11.3823 17 11.6013 17C11.8203 17 12.0372 16.9569 12.2395 16.873C12.4419 16.7892 12.6257 16.6664 12.7806 16.5115L16.7615 12.5306C16.9164 12.3757 17.0392 12.1919 17.123 11.9895C17.2069 11.7872 17.25 11.5703 17.25 11.3513C17.25 11.1323 17.2069 10.9154 17.123 10.7131C17.0392 10.5107 16.9164 10.3269 16.7615 10.172L10.077 3.48835C9.7644 3.17582 9.34053 3.00017 8.89852 3H5.72056C5.06532 3 4.43693 3.26029 3.97361 3.72361C3.51029 4.18693 3.25 4.81532 3.25 5.47056V5.47056Z"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <div>
                    <span className="jss279 stop">Add tag</span>
                  </div>
                </div>
                <div
                  data-eventname="reassign"
                  className="jss278 stop jss205"
                  data-testid="content"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.25 4.75L8.75 7L11.25 9.25"
                      stroke="#BDBDBD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.75 19.25L15.25 17L12.75 14.75"
                      stroke="#BDBDBD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9.75 7H13.25C16.5637 7 19.25 9.68629 19.25 13V13.25"
                      stroke="#BDBDBD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14.25 17H10.75C7.43629 17 4.75 14.3137 4.75 11V10.75"
                      stroke="#BDBDBD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <div>
                    <span className="jss279 stop">Reassign</span>
                  </div>
                </div>
                <div
                  data-eventname="share"
                  className="jss278 stop jss204"
                  data-testid="content"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.25 7C19.25 8.24264 18.2426 9.25 17 9.25C15.7574 9.25 14.75 8.24264 14.75 7C14.75 5.75736 15.7574 4.75 17 4.75C18.2426 4.75 19.25 5.75736 19.25 7Z"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9.25 12C9.25 13.2426 8.24264 14.25 7 14.25C5.75736 14.25 4.75 13.2426 4.75 12C4.75 10.7574 5.75736 9.75 7 9.75C8.24264 9.75 9.25 10.7574 9.25 12Z"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M19.25 17C19.25 18.2426 18.2426 19.25 17 19.25C15.7574 19.25 14.75 18.2426 14.75 17C14.75 15.7574 15.7574 14.75 17 14.75C18.2426 14.75 19.25 15.7574 19.25 17Z"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14.5 16L9 13.5"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14.5 8.5L9 11"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <div>
                    <span className="jss279 stop">Share</span>
                  </div>
                </div>
                <div
                  data-eventname="remove"
                  className="jss278 stop"
                  data-testid="content"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33203 5.8335H16.6654"
                      stroke="#EB5757"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8.33203 9.1665V14.1665"
                      stroke="#EB5757"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.668 9.1665V14.1665"
                      stroke="#EB5757"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.16797 5.8335L5.0013 15.8335C5.0013 16.2755 5.1769 16.6994 5.48946 17.012C5.80202 17.3246 6.22594 17.5002 6.66797 17.5002H13.3346C13.7767 17.5002 14.2006 17.3246 14.5131 17.012C14.8257 16.6994 15.0013 16.2755 15.0013 15.8335L15.8346 5.8335"
                      stroke="#EB5757"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333"
                      stroke="#EB5757"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <div>
                    <span className="jss279 jss280 stop">Remove</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="addcard_link">
            <div className="addcard_link_dot">
              <svg
                width="8"
                height="16"
                fill="#82828290"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
              </svg>
            </div>
            <div className="addcard_link-item-icon">
              <img className="img-fluid" src="/email.png" alt="" />
            </div>
            <p>Email</p>
            <div className="addcard_link-edit">
              {!checked.email ? (
                <div className="addcard_link-delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              ) : (
                ""
              )}

              <button className="form-check">
                <input
                  type="checkbox"
                  id="email"
                  onChange={handleChange}
                  checked={checked.email}
                  name="email"
                />
                <label htmlFor="email"></label>
              </button>
            </div>
          </div>
          <div className="addcard_link">
            <div className="addcard_link_dot">
              <svg
                width="8"
                height="16"
                fill="#82828290"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
              </svg>
            </div>
            <div className="addcard_link-item-icon">
              <img className="img-fluid" src="/safari.png" alt="" />
            </div>
            <p>Website</p>
            <div className="addcard_link-edit">
              {!checked.website ? (
                <div className="addcard_link-delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              ) : (
                ""
              )}

              <button className="form-check">
                <input
                  type="checkbox"
                  id="website"
                  onChange={handleChange}
                  checked={checked.website}
                  name="website"
                />
                <label htmlFor="website"></label>
              </button>
            </div>
          </div>
          <div className="addcard_link">
            <div className="addcard_link_dot">
              <svg
                width="8"
                height="16"
                fill="#82828290"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
              </svg>
            </div>
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <p>Whatsapp</p>
            <div className="addcard_link-edit">
              {!checked.whatsapp ? (
                <div className="addcard_link-delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              ) : (
                ""
              )}

              <button className="form-check">
                <input
                  type="checkbox"
                  id="whatsapp"
                  onChange={handleChange}
                  checked={checked.whatsapp}
                  name="whatsapp"
                />
                <label htmlFor="whatsapp"></label>
              </button>
            </div>
          </div>
          <div className="addcard_link">
            <div className="addcard_link_dot">
              <svg
                width="8"
                height="16"
                fill="#82828290"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
              </svg>
            </div>
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <p>LinkedIn</p>
            <div className="addcard_link-edit">
              {!checked.linkedIn ? (
                <div className="addcard_link-delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              ) : (
                ""
              )}

              <button className="form-check">
                <input
                  type="checkbox"
                  id="linkedIn"
                  onChange={handleChange}
                  checked={checked.linkedIn}
                  name="linkedIn"
                />
                <label htmlFor="linkedIn"></label>
              </button>
            </div>
          </div>
          <div className="addcard_link">
            <div className="addcard_link_dot">
              <svg
                width="8"
                height="16"
                fill="#82828290"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
              </svg>
            </div>
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <p>Instagram</p>
            <div className="addcard_link-edit">
              {!checked.instagram ? (
                <div className="addcard_link-delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              ) : (
                ""
              )}

              <button className="form-check">
                <input
                  type="checkbox"
                  id="instagram"
                  onChange={handleChange}
                  checked={checked.instagram}
                  name="instagram"
                />
                <label htmlFor="instagram"></label>
              </button>
            </div>
          </div>
          <div className="addcard_link">
            <div className="addcard_link_dot">
              <svg
                width="8"
                height="16"
                fill="#82828290"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
              </svg>
            </div>
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <p>Facebook</p>
            <div className="addcard_link-edit">
              {!checked.facebook ? (
                <div className="addcard_link-delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              ) : (
                ""
              )}

              <button className="form-check">
                <input
                  type="checkbox"
                  id="facebook"
                  onChange={handleChange}
                  checked={checked.facebook}
                  name="facebook"
                />
                <label htmlFor="facebook"></label>
              </button>
            </div>
          </div>
          <div className="addcard_link">
            <div className="addcard_link_dot">
              <svg
                width="8"
                height="16"
                fill="#82828290"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
              </svg>
            </div>
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <p>Twitter</p>
            <div className="addcard_link-edit">
              {!checked.twitter ? (
                <div className="addcard_link-delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              ) : (
                ""
              )}

              <button className="form-check">
                <input
                  type="checkbox"
                  id="twitter"
                  onChange={handleChange}
                  checked={checked.twitter}
                  name="twitter"
                />
                <label htmlFor="twitter"></label>
              </button>
            </div>
          </div>
          <div className="addcard_link">
            <div className="addcard_link_dot">
              <svg
                width="8"
                height="16"
                fill="#82828290"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
              </svg>
            </div>
            <div className="addcard_link-item-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <p>Youtube</p>
            <div className="addcard_link-edit">
              {!checked.youtube ? (
                <div className="addcard_link-delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              ) : (
                ""
              )}

              <button className="form-check">
                <input
                  type="checkbox"
                  id="youtube"
                  onChange={handleChange}
                  checked={checked.youtube}
                  name="phone"
                />
                <label htmlFor="youtube"></label>
              </button>
            </div>
          </div>
          <div className="addcard_link">
            <div className="addcard_link_dot">
              <svg
                width="8"
                height="16"
                fill="#82828290"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"></path>
              </svg>
            </div>
            <div className="addcard_link-item-icon">
              <img className="img-fluid" src="/googlemap.png" alt="" />
            </div>
            <p>Address</p>
            <div className="addcard_link-edit">
              {!checked.address ? (
                <div className="addcard_link-delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              ) : (
                ""
              )}

              <button className="form-check">
                <input
                  type="checkbox"
                  id="address"
                  onChange={handleChange}
                  checked={checked.address}
                  name="address"
                />
                <label htmlFor="address"></label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
