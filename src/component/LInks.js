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
    googlemap: true,
  });
  const handleChange = (e) => {
    setChecked((prevformData) => {
      return {
        ...prevformData,
        [e.target.name]: e.target.checked,
      };
    });
  };
  // console.log(props.data);
  return (
    <>
      <div className="linkPage">
        <button className="btn-link" onClick={props.addLin}>
          <FontAwesomeIcon icon={faPlus} />
          Add info
        </button>

        <div className="addcard_links">
          {props.formData && props.formData.userLink
            ? props.formData.userLink.map((value) => {
                return (
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
                      {value.type ? (
                        <img className="img-fluid" src="/email.png" alt="" />
                      ) : (
                        <FontAwesomeIcon icon={faWhatsapp} />
                      )}
                    </div>
                    <p>{value.title}</p>
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
                );
              })
            : ""}
          {/* <div clasName="addcard_link">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
