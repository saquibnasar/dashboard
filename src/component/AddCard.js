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
      <div className="addcard d-none">
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
                    headerTitle: "phone",
                    title: "Phone Number*",
                    titleInput: "Phone Number*",
                    linkTitleInput: "Call",
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
                <div className="addcard_link">
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
                <div className="addcard_link">
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
                <div className="addcard_link">
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
                <div className="addcard_link">
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
                <div className="addcard_link">
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
                <div className="addcard_link">
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
                <div className="addcard_link">
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
                <div className="addcard_link">
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
                <div className="addcard_link">
                  <div className="addcard_link-item">
                    <div className="addcard_link-item-icon">
                      <img className="img-fluid" src="/googlemap.png" alt="" />
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
            <AddLink data={linkData} sendData={sendData} />
          )}
        </div>
      </div>
    </>
  );
}
