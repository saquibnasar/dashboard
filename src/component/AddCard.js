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
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AddLink from "./AddLink";

export default function AddCard(props) {
  const [linkData, setLinkData] = useState({});
  const [isClick, setIsClick] = useState(false);

  const sendData = (data) => {
    setLinkData(data);
    setIsClick(!isClick);
  };

  return (
    <>
      {props.type === "plugin" ? (
        <div className="addcard addPlugin">
          <div className="addcard_container">
            {!isClick ? (
              <div>
                <div
                  className="addlink-back"
                  onClick={() => {
                    props.removeLink(!props.isPlugin);
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back
                </div>
                <h1>Add content to card</h1>
                <p className="addcard_container-para">
                  Select from our wide variety of links and contact info below
                </p>
                <div className="addcard_links">
                  <div
                    className={`addcard_link youtube`}
                    onClick={sendData.bind(this, {
                      headerTitle: "Youtube Title",
                      linkTitleInput: "Youtube",
                      title: "Youtube*",
                      titleInput: "Enter Youtube URl",
                      type: "text",
                      linktype: "youtube",
                      icon: faYoutube,
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <FontAwesomeIcon icon={faYoutube} />
                      </div>
                      <p>Youtube</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <AddLink
                data={linkData}
                sendData={sendData}
                setFormData={props.setFormData}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="addcard">
          <div className="addcard_container">
            {!isClick ? (
              <div>
                <div className="addlink-back" onClick={props.removeLink}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back
                </div>
                <h1>Add content to card</h1>
                <p className="addcard_container-para">
                  Select from our wide variety of links and contact info below
                </p>
                <div className="addcard_links">
                  <div
                    className="addcard_link"
                    onClick={sendData.bind(this, {
                      headerTitle: "Phone",
                      linkTitleInput: "Call",
                      title: "Phone Number*",
                      titleInput: "Enter Phone Number*",
                      type: "number",
                      // linkType: "number",
                      linktype: "call",
                      icon: faPhone,
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <p>Call</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  <div
                    className="addcard_link"
                    onClick={sendData.bind(this, {
                      headerTitle: "Link Title",
                      linkTitleInput: "email",
                      title: "Email",
                      titleInput: "Enter Email",
                      type: "email",
                      linktype: "email",
                      icon: "/email.png",
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <img className="img-fluid" src="/email.png" alt="" />
                      </div>
                      <p>Email</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  <div
                    className="addcard_link"
                    onClick={sendData.bind(this, {
                      headerTitle: "Website Title",
                      linkTitleInput: "Website",
                      title: "Website*",
                      titleInput: "Enter Website URL",
                      type: "text",
                      linktype: "website",
                      icon: "/safari.png",
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <img className="img-fluid" src="/safari.png" alt="" />
                      </div>
                      <p>Website</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>

                  <div
                    className="addcard_link"
                    onClick={sendData.bind(this, {
                      headerTitle: "Whatsapp Title",
                      linkTitleInput: "Whatsapp",
                      title: "Whatsapp*",
                      titleInput: "Enter Whatsapp Number",
                      type: "text",
                      linktype: "whatsapp",
                      icon: faWhatsapp,
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </div>
                      <p>Whatsapp</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  <div
                    className="addcard_link"
                    onClick={sendData.bind(this, {
                      headerTitle: "Linkedin Title",
                      linkTitleInput: "Linkedin",
                      title: "Linkedin*",
                      titleInput: "Enter Linkedin URl",
                      type: "text",
                      linktype: "linkedin",
                      icon: faLinkedinIn,
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </div>
                      <p>LinkedIn</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  <div
                    className="addcard_link"
                    onClick={sendData.bind(this, {
                      headerTitle: "Instagram Title",
                      linkTitleInput: "Instagram",
                      title: "Instagram*",
                      titleInput: "Enter Instagram URl",
                      type: "text",
                      linktype: "instagram",
                      icon: faInstagram,
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                      <p>Instagram</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  <div
                    className="addcard_link"
                    onClick={sendData.bind(this, {
                      headerTitle: "Facebook Title",
                      linkTitleInput: "Facebook",
                      title: "Facebook*",
                      titleInput: "Enter Facebook URl",
                      type: "text",
                      linktype: "facebook",
                      icon: faFacebookF,
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </div>
                      <p>Facebook</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  <div
                    className="addcard_link"
                    onClick={sendData.bind(this, {
                      headerTitle: "Twitter Title",
                      linkTitleInput: "Twitter",
                      title: "Twitter*",
                      titleInput: "Enter Twitter URl",
                      type: "text",
                      linktype: "twitter",
                      icon: faTwitter,
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <FontAwesomeIcon icon={faTwitter} />
                      </div>
                      <p>Twitter</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  <div
                    className="addcard_link"
                    onClick={sendData.bind(this, {
                      headerTitle: "Youtube Title",
                      linkTitleInput: "Youtube",
                      title: "Youtube*",
                      titleInput: "Enter Youtube URl",
                      type: "text",
                      linktype: "youtube",
                      icon: faYoutube,
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <FontAwesomeIcon icon={faYoutube} />
                      </div>
                      <p>Youtube</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  <div
                    className="addcard_link"
                    onClick={sendData.bind(this, {
                      headerTitle: "Address Title",
                      linkTitleInput: "Address",
                      title: "Address*",
                      titleInput: "Enter Address",
                      type: "text",
                      linktype: "address",
                      icon: "/googlemap.png",
                    })}
                  >
                    <div className="addcard_link-item">
                      <div className="addcard_link-item-icon">
                        <img
                          className="img-fluid"
                          src="/googlemap.png"
                          alt=""
                        />
                      </div>
                      <p>Address</p>
                    </div>

                    <div className="addcard_link-add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <AddLink
                data={linkData}
                sendData={sendData}
                setFormData={props.setFormData}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
